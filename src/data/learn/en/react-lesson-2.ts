const content = `
# Components and Props

Components let you split the UI into independent, reusable pieces. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

## Functional Components
The simplest way to define a component is to write a JavaScript function:

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

## Rendering a Component
When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object "props".

\`\`\`jsx
const element = <Welcome name="Ubay" />;
\`\`\`

Always remember that components **must never modify their own props**. Props are *read-only*.
`;

export default content;
