'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import image from "@/images/Home/wave.png";
import image1 from "@/images/Home/circle.png"
export default function Counter() {
  const [count, setCount] = useState<number>(260077672);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center px-4 sm:px-8 md:px-16 lg:px-0  py-10">
  
      <div className="flex justify-center lg:justify-start">
        <Image src={image} className="w-64 sm:w-80 md:w-96 lg:w-[28rem] hidden lg:block" alt="" />
          <Image src={image1} className="w-64 sm:w-80 md:w-96 lg:w-100 block lg:hidden" alt="" />

      </div>

    
      <div className="text-center ">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[9em] font-semibold leading-tight">
          Fast
        </h1>
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
          {count.toLocaleString()}
        </p>
        <p className="font-medium text-sm sm:text-base md:text-lg mt-2">
          1.8 avg block time with single-slot finality
        </p>
      </div>
    </main>
  );
}
