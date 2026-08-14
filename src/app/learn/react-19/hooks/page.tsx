
"use client";

import { memo, useCallback, useEffect, useState } from "react";

const Button = memo(({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => {
  console.log('Render Anak:', children);
  return <button className="bg-blue-700 text-white px-4 py-2 rounded mr-4" onClick={onClick}>{children}</button>;
});
Button.displayName = 'Button';

export default function ReactHooksPage() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [todo, setTodo] = useState(null);

  console.log("Render Parent: ReactHooksPage");

  const tambahTanpaCallback = () => setCount(count + 1);

  const tambahDenganCallback = useCallback(() => setCount2(count2 + 1), [count2]);

  const fetchData = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json()).then(data => {
      console.log("Data: ", data)
      setTodo(data)
    });
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex-1">
      <div className="w-full max-w-4xl mx-auto px-4">
        <p>
          <input className="bg-white p-2 rounded text-black" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Ketik sesuatu..." />
        </p>
        <p>
          Count: {count}
        </p>
        <p>
          {JSON.stringify(todo)}
        </p>
        <div className="mt-4">
          <Button key="tambahTanpaCallback" onClick={tambahTanpaCallback}>
            Increment (Tanpa useCallback)
          </Button>
          <Button key="tambahDenganCallback" onClick={tambahDenganCallback}>
            Increment (Pakai useCallback)
          </Button>
        </div>

      </div>
    </div>
  )
}