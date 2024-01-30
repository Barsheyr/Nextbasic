"use client";
import React, { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-7xl font-bold mb-4"> {count} </h1>
      <button className="btn btn-secondary" onClick={() => setCount(count + 1)}>
        increase
      </button>
      <button className="btn btn-info" onClick={() => setCount(count - 1)}>
        decrease
      </button>
    </div>
  );
};

export default ClientPage;
