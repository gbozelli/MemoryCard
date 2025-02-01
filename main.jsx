import React from 'react';
import ReactDOM from 'react-dom/client';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
);

import { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);
    return () => {
      clearInterval(key);
    };
  }, [])

  return (
    <p>{counter} seconds have passed.</p>
  );
}