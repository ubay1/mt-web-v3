const content = `
## What's New in React 19

React 19 brings massive changes that make writing code much cleaner, centering around **Server Components** and **Actions**. This release also deprecates or phases out several old APIs (like \`useMemo\` and \`useCallback\`, which are largely replaced by the upcoming *React Compiler*).

Here are the key features in React 19 that you need to know:

### 1. Actions & \`useActionState\`

Previously, to handle form submissions, you had to use \`e.preventDefault()\`, manage *loading states*, *errors*, and *data* manually. In React 19, this functionality is built-in natively using **Actions**.

\`\`\`jsx
import { useActionState } from 'react';

// Action Function (can run on server or client)
async function updateName(prevState, formData) {
  const name = formData.get('name');
  const error = await api.updateName(name);
  if (error) return { error };
  return { success: true };
}

function FormUpdateName() {
  // useActionState replaces useState for forms
  const [state, submitAction, isPending] = useActionState(updateName, { error: null });

  return (
    <form action={submitAction}>
      <input type="text" name="name" disabled={isPending} />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Saving...' : 'Save'}
      </button>
      {state.error && <p className="error">{state.error}</p>}
    </form>
  );
}
\`\`\`

### 2. \`useFormStatus\` & \`useFormState\`

This new hook allows child components inside a \`<form>\` to know the status of that form without needing to pass down *props* manually.

\`\`\`jsx
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus(); // Automatically knows if the form is submitting
  
  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}
\`\`\`

### 3. The \`use\` Hook

The \`use\` hook is a new way to read asynchronous resources (*Promises*) or *Context* directly, even inside *conditional statements* (like \`if\`), which was previously forbidden with React Hooks!

\`\`\`jsx
import { use, Suspense } from 'react';
import ThemeContext from './ThemeContext';

function Message({ messagePromise }) {
  // 1. Read a Promise synchronously
  const messageContent = use(messagePromise);
  
  // 2. Read Context directly
  const theme = use(ThemeContext);

  return <p style={{ color: theme.color }}>{messageContent}</p>;
}
\`\`\`

> **Important Note:** The \`use\` hook must be paired with \`<Suspense>\`. While the *Promise* is *pending*, the component will "suspend" and display the *fallback* UI from \`<Suspense>\`.

### 4. React Server Components (RSC)

Although introduced earlier (alongside Next.js), React 19 cements *Server Components* natively. By default, if you use a *framework* like Next.js, components are rendered on the server.
- **Pros**: Reduces the JavaScript bundle size sent to the client (dependencies stay on the server) and accelerates data access (you can query databases directly in components).
- Components that need interactivity (like *onClick* or *useState*) must be marked with the \`"use client"\` directive.

### 5. \`ref\` as a Regular Prop

Previously, if you wanted to pass a \`ref\` to a custom component, you were forced to wrap it with \`forwardRef\`. In React 19, \`ref\` is just a regular *prop*!

\`\`\`jsx
// BEFORE (React 18):
const MyInput = forwardRef((props, ref) => <input ref={ref} {...props} />);

// NOW (React 19):
function MyInput({ ref, ...props }) {
  return <input ref={ref} {...props} />
}
\`\`\`

### 6. \`<Context>\` as a Provider

You no longer need to write \`<ThemeContext.Provider>\`. In React 19, you can just use the *Context* object directly as a tag.

\`\`\`jsx
const ThemeContext = createContext('light');

function App() {
  return (
    // No .Provider needed
    <ThemeContext value="dark">
      <Main />
    </ThemeContext>
  );
}
\`\`\`

---

## Conclusion

React 19 focuses heavily on **Simplification** (removing \`forwardRef\`, \`.Provider\`, \`useMemo\`/React Compiler) and **Accelerating Data Fetching/Forms** (\`useActionState\`, \`use\`, *Server Components*).
`

export default content;
