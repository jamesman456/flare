'use client';
import React from "react";
import Image from "next/image";
import image3 from "@/images/Contact/xrplogo (2).png";
import image2 from "@/images/Contact/eth.png";
import image1 from "@/images/Contact/bitcooin.png";
import Script from "next/script";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface TradeImage {
  id: number;
  src: StaticImport;
}

const images: TradeImage[] = [
  { id: 1, src: image1 },
  { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image1 },
  { id: 5, src: image2 },
    { id: 6, src: image3 },
    { id: 7, src: image1 },
  { id: 8, src: image2 },
  { id: 9, src: image3 },
];


export default function Trade  () {
  return (
    <div className="w-full bg-gray-900 py-10 overflow-hidden">
      
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-loop space-x-6">
          {[...images, ...images].map((img, index) => (
            <div key={index} className="flex-shrink-0 w-40 h-40">
              <Image
                src={img.src}
                alt={`Crypto ${index}`}
                width={160}
                height={160}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    
      <div className="mt-10">
        <div className="tradingview-widget-container">
          <div id="tradingview_widget"></div>
          <Script
            id="tradingview-ticker"
            src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
            strategy="lazyOnload"
          >
            {`
              {
                "symbols": [
                  {"proName": "BINANCE:BTCUSDT", "title": "BTC/USDT"},
                  {"proName": "BINANCE:ETHUSDT", "title": "ETH/USDT"},
                  {"proName": "BINANCE:ADAUSDT", "title": "ADA/USDT"}
                ],
                "showSymbolLogo": true,
                "colorTheme": "dark",
                "isTransparent": false,
                "displayMode": "adaptive",
                "locale": "en"
              }
            `}
          </Script>
        </div>
      </div>
    </div>
  );
};

