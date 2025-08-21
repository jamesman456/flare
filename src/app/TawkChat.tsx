"use client";
import { useEffect } from "react";

const TawkChat = () => {
  useEffect(() => {
    
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/6890ef37a4fc79192a7ba0f2/1j1s42plp"
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    
    document.body.appendChild(script);

    return () => {
      
      document.body.removeChild(script);
    };
  }, []);

  return null; 
};

export default TawkChat;


