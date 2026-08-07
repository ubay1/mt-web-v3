import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code({ className, children, ...rest }) {
      const match = /language-(\w+)/.exec(className || "");
      if (match) {
        const code = String(children).replace(/\n$/, "");
        return <CodeBlock language={match[1]}>{code}</CodeBlock>;
      }
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
      return <>{children}</>;
    },
    ...components,
  };
}
