const content = `# Secrets of Fast React

Slow React applications are often caused by unnecessary renders. Here is how to fix it.

## Render Optimization
- **useMemo**: Use for expensive calculations.
- **useCallback**: Use to stabilize function references passed to child components.
- **React.memo**: Wrap pure components to avoid unnecessary re-renders.

## Image Loading
Use \`loading="lazy"\` and modern formats like WebP or AVIF to speed up initial page load times.
`;
export default content;
