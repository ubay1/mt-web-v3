/* eslint-disable react-hooks/error-boundaries */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { prerender } from "react-dom/static";
import { NextResponse } from "next/server";
import React, { Suspense } from "react";

// Simulasi async data fetcher
async function fetchArticleData() {
  // Delay untuk simulasi async data fetching di server (SSG)
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    title: "Panduan React 19: Static Site Generation (SSG)",
    author: "Tim React 19",
    content: "API react-dom/static (prerender) merender seluruh pohon komponen secara asinkron hingga semua Suspense boundary selesai sebelum menghasilkan HTML statis utuh.",
    generatedAt: new Date().toISOString(),
  };
}

// Komponen Server Asinkron (Async Server Component)
async function ArticleContent() {
  const article = await fetchArticleData();
  return (
    <article style={{ border: "1px solid #333", padding: "16px", borderRadius: "8px", background: "#111", color: "#fff" }}>
      <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px", color: "#d4ff00" }}>{article.title}</h1>
      <p style={{ fontSize: "12px", color: "#888", marginBottom: "12px" }}>
        Penulis: {article.author} | Dibuat Pada: {article.generatedAt}
      </p>
      <hr style={{ borderColor: "#333", marginBottom: "12px" }} />
      <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#ccc" }}>{article.content}</p>
    </article>
  );
}

// Komponen Utama yang di-SSG
function StaticApp() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
      <header style={{ marginBottom: "16px" }}>
        <span style={{ background: "#d4ff00", color: "#000", padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>
          ⚡ HTML Statis dari react-dom/static (prerender)
        </span>
      </header>
      <main>
        <Suspense fallback={<div style={{ color: "#888" }}>Memuat data artikel...</div>}>
          <ArticleContent />
        </Suspense>
      </main>
    </div>
  );
}

export async function GET() {
  try {
    // Menggunakan API react-dom/static (prerender)
    // prerender() menunggu seluruh data async & Suspense selesai sebelum menghasilkan HTML
    const { prelude } = await prerender(<StaticApp />, {
      bootstrapScripts: [],
    });

    // Konversi Web ReadableStream dari prelude ke string HTML
    const reader = prelude.getReader();
    const decoder = new TextDecoder();
    let html = "";
    let done = false;

    while (!done) {
      const { value, done: isDone } = await reader.read();
      done = isDone;
      if (value) {
        html += decoder.decode(value, { stream: !done });
      }
    }

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Rendered-By": "react-dom/static (prerender)",
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
