const content = `# Mastering TypeScript: Best Practices 2024

TypeScript has become the industry standard. Here are some of the best practices you should adopt this year.

## 1. Use Type Aliases vs Interfaces Correctly
Use \`interface\` for objects that will be extended, and \`type\` for unions or primitives.

## 2. Avoid 'any'
Use \`unknown\` if the data type is truly unknown, then perform type checking.

## 3. Utility Types
Leverage \`Partial\`, \`Omit\`, and \`ReturnType\` to make your code more DRY (Don't Repeat Yourself).

\`\`\`typescript
type User = { id: string; name: string; email: string };
type UserPreview = Omit<User, 'email'>;
\`\`\`
`;
export default content;
