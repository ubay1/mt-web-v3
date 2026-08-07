"use client";

import { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "./CodeBlock";

/**
 * Custom react-markdown `code` renderer.
 * Fenced code blocks (```lang) get Shiki highlighting via CodeBlock.
 * Inline `code` gets a styled <code> span.
 */
const components: Components = {
  code({ className, children, ...rest }) {
    // react-markdown sets className to "language-xxx" for fenced blocks
    const match = /language-(\w+)/.exec(className || "");

    if (match) {
      const code = String(children).replace(/\n$/, "");
      return <CodeBlock language={match[1]}>{code}</CodeBlock>;
    }

    // Inline code
    return (
      <code
        className="bg-white/10 px-1.5 py-0.5 rounded text-accent text-[0.9em] font-mono"
        {...rest}
      >
        {children}
      </code>
    );
  },
  pre({ children }) {
    // react-markdown wraps fenced code blocks in a <pre> tag.
    // Since our CodeBlock (via Shiki) already outputs a <pre> tag, 
    // we remove this outer wrapper to prevent double-box styling.
    return <>{children}</>;
  },
};

interface MarkdownRendererProps {
  content: string;
}

/**
 * Renders markdown content with Shiki syntax highlighting for code blocks.
 * Use this instead of raw <ReactMarkdown> throughout the app.
 */
export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
