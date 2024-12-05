"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className={`bg-white rounded-lg shadow-xl p-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          カウンターアプリ
        </h1>
        <div className="text-center">
          <p className={`text-6xl font-bold mb-8 transition-all duration-300 ${count > 0 ? 'text-green-500' : count < 0 ? 'text-red-500' : 'text-gray-700'}`}>
            {count}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              -1
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              +1
            </button>
          </div>
          <button
            onClick={() => setCount(0)}
            className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            リセット
          </button>
        </div>
      </div>
    </main>
  );
}
