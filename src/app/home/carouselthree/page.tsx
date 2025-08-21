"use client";

import { useState } from "react";
import { Sparkles, ShieldCheck, Zap, Globe2, Users } from "lucide-react";

const features = [
  {
    icon: <Sparkles className="w-10 h-10 text-[#C1003F]" />,
    title: "Smart Contracts",
    desc: "Deploy fast and secure smart contracts on Flare’s robust L1 architecture.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#C1003F]" />,
    title: "Security",
    desc: "Enterprise-grade security with advanced validation mechanisms.",
  },
  {
    icon: <Zap className="w-10 h-10 text-[#C1003F]" />,
    title: "Scalability",
    desc: "Handle thousands of transactions per second with low latency.",
  },
  {
    icon: <Globe2 className="w-10 h-10 text-[#C1003F]" />,
    title: "Interoperability",
    desc: "Seamless cross-chain interactions with other networks.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#C1003F]" />,
    title: "Community Driven",
    desc: "A thriving ecosystem of developers, validators, and users.",
  },
];

export default function FeaturesSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section className="py-20 px-8 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Powerful Features of Flare
      </h2>

      <div className="relative max-w-4xl mx-auto overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {features.map((feature, idx) => (
            <div key={idx} className="w-full flex-shrink-0 px-6">
              <div className="p-8 rounded-2xl shadow-md text-center bg-white">
                <div className="flex flex-col items-center gap-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-[#C1003F] text-white p-3 rounded-full shadow-md"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-[#C1003F] text-white p-3 rounded-full shadow-md"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {features.map((_, idx) => (
            <button
                title="jfj"
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-[#C1003F]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
