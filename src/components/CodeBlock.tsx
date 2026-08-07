"use client";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

interface CodeBlockProps {
  children: string;
  language: string;
}

/**
 * CodeBlock renders syntax-highlighted code using Shiki.
 * Falls back to a styled <pre> block while Shiki loads asynchronously.
 */
export function CodeBlock({ children, language }: CodeBlockProps) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    codeToHtml(children, {
      lang: language || "text",
      theme: "github-dark-default",
    })
      .then((result) => {
        if (!cancelled) setHtml(result);
      })
      .catch(() => {
        // Shiki may not support the language — fall back silently
        if (!cancelled) setHtml("");
      });

    return () => {
      cancelled = true;
    };
  }, [children, language]);

  if (html) {
    return (
      <div
        className="shiki-wrapper"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  // Fallback while Shiki is loading
  return (
    <pre>
      <code>{children}</code>
    </pre>
  );
}
