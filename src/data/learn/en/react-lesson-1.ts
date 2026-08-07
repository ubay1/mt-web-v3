const content = `
# Introduction to React

**React.js** is an open-source *library* created by Meta (Facebook) for building user interfaces (**UI**), specifically for **Single Page Applications (SPA)**.

Unlike the traditional approach where every page navigation reloads the entire browser, React only updates the parts of the UI that change, quickly and efficiently.

---

## 3 Core Concepts of React

Before diving into code, there are three key concepts to understand:

1. **Component-Based:** The UI is broken into small, independent, and reusable pieces — such as buttons, headers, or profile cards.
2. **Virtual DOM:** React creates a lightweight copy of the page structure (DOM). When data changes, React compares this copy with the previous version (a process called *reconciliation*) and only updates the elements that actually changed in the real browser.
3. **Declarative:** You simply define *how the UI should look based on data/state*, and React handles the update process automatically.

---

## React Fundamentals

### 1. JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that lets you write HTML-like code directly inside JavaScript files.

\`\`\`jsx
// JSX Example
const Greeting = () => {
  const name = "Alex";
  return <h1>Hello, {name}! Welcome to React.</h1>;
};
\`\`\`

> **Note:** Code inside curly braces \`{}\` is treated as a pure JavaScript expression.

---

### 2. Components

In modern React, components are written as **Functional Components** (regular JavaScript functions that return JSX).

\`\`\`jsx
// A simple button component
function PrimaryButton() {
  return (
    <button className="btn-primary">
      Click Me
    </button>
  );
}
\`\`\`

---

### 3. Props (Properties)

Props are used to **pass data** from a parent component to a child component. Props are *read-only* (they cannot be modified by the receiving component).

\`\`\`jsx
// Child Component
function UserCard(props) {
  return (
    <div className="card">
      <h3>Name: {props.name}</h3>
      <p>Role: {props.role}</p>
    </div>
  );
}

// Parent Component
function App() {
  return (
    <div>
      <UserCard name="Budi" role="Frontend Developer" />
      <UserCard name="Siti" role="UI/UX Designer" />
    </div>
  );
}
\`\`\`

---

### 4. State (\`useState\`)

**State** is internal component data that is dynamic and can change in response to user interactions (like button clicks, text input, or API data). When state changes, React re-renders the component.

React provides a Hook called \`useState\` to manage state:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  // useState records the current value (count) and its setter function (setCount)
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Add 1
      </button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '8px' }}>
        Subtract 1
      </button>
    </div>
  );
}
\`\`\`

---

## Props vs State Summary

| Feature | Props | State |
| --- | --- | --- |
| **Definition** | Data passed from outside (Parent) | Internal data belonging to the component itself |
| **Triggers Re-render** | When props from Parent change | When state is updated via setter function |
| **Mutability** | Immutable (Read-only) | Mutable (Can be changed via \`setState\`) |

---

## Next Steps (Roadmap)

1. **Handling Events:** Handling clicks, form submissions, input changes.
2. **Lifecycle & \`useEffect\`:** Fetching data from APIs and other side effects.
3. **State Management:** Managing global state as apps grow larger (React Context API, Redux, or Zustand).
4. **Routing:** Navigating between pages using \`react-router-dom\`.
`;

export default content;
