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
    table({ children, ...rest }) {
      return (
        <div className="overflow-x-auto my-8 border border-line rounded-lg">
          <table className="w-full border-collapse text-left text-sm" {...rest}>
            {children}
          </table>
        </div>
      );
    },
    th({ children, ...rest }) {
      return (
        <th className="border-b border-r border-line last:border-r-0 px-4 py-3 bg-white/5 font-bold uppercase tracking-wider text-xs text-white" {...rest}>
          {children}
        </th>
      );
    },
    td({ children, ...rest }) {
      return (
        <td className="border-b border-r border-line last:border-r-0 px-4 py-3 text-white/70" {...rest}>
          {children}
        </td>
      );
    },
    ...components,
  };
}
