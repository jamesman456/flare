'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import image1 from "@/images/Home/Carousel/flare_updates.webp"
import image2 from "@/images/Home/Carousel/fassets.webp"
import image3 from "@/images/Home/Carousel/ftso.webp"
import image4 from "@/images/Home/Carousel/xrp (2).png"
import image5 from "@/images/Home/Carousel/fcasset (2).png"
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { IconType } from 'react-icons/lib'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
import Link from 'next/link'

interface carouselImage {
  id: number;
  img1: StaticImport;
  logo?: StaticImport;
  img3?: StaticImport | string;
  header: string;
  title?: string;
  desc: string[];
  btn: string;
  date: string;
  word: string;
  icon: IconType;
  link: string;
}

function CarouselPlugin() {
  const images: carouselImage[] = [
    {
      id: 1,
      img1: image1,
      header: "FLARE FEATURED NEWS",
      desc: [
        "VivoPower and Flare Launch ",
        "Definitive Strategic partnership to ",
        "Deploy US$100 Million in XRP for",
        "Institutional Yield"
      ],
      logo: image5,
      img3: image4,
      word: "Read More",
      icon: FaArrowRight,
      btn: "FLARE UPDATES",
      date: "JUN 11 2025",
      link:"https://flare.network/news/vivopower-flare-deploy-xrp-institutional-yield"
    },
    {
      id: 2,
      img1: image2,
      header: "FLARE FEATURED NEWS",
      desc: [
        "FAssets v1.1 Launches on Songbird - Unlocking",
        "Scalable FXRP Minting"
      ],
      logo: image5,
      img3: image4,
      word: "Read More",
      icon: FaArrowRight,
      btn: "FLARE UPDATES",
      date: "MAY 14 2025",
      link:"https://flare.network/news/fxrp-on-songbird"
    },
    {
      id: 3,
      img1: image3,
      header: "FLARE FEATURED NEWS",
      desc: ["Flare 2.0 Vision Part 1: Expand Flare consensus across", "chain"],
      logo: image5,
      word: "Read More",
      icon: FaArrowRight,
      btn: "FLARE UPDATES",
      date: "MAY 14 2025",
      link: "https://flare.network/news/flare-vision"
    },
  ];

  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      jump: true,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
    })
  );

  return (
    <div className="py-10 px-4 sm:px-10 md:px-20 lg:px-40">
      <Carousel plugins={[plugin.current]}>
        <CarouselContent>
          {images.map((index) => (
            <CarouselItem key={index.id} className="p-4">
              <div>
                <Link href={index.link}  className="flex items-center group justify-end space-x-2 mb-4">
                        <p className="text-[#C1003F] group-hover:text-pink-950 text-sm sm:text-base">
                  {index.word}
                </p>
                <index.icon className="text-[#C1003F] group-hover:text-pink-950" />
                </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex justify-center">
                  <Image className="w-52 sm:w-64 md:w-70 lg:w-80" src={index.img1} alt="" />
                </div>

                <div className="space-y-6 text-center lg:text-left">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">{index.header}</h1>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                    <div className="flex items-center gap-3">
                      {index.logo && (
                        <Image className="w-16 sm:w-20 md:w-24" src={index.logo} alt="" />
                      )}
                      <p className="text-2xl text-[#C1003F] font-bold">{index.title}</p>
                    </div>
                    {index.img3 && (
                      <Image className="w-16 sm:w-20 md:w-24" src={index.img3} alt="" />
                    )}
                  </div>

                  <div>
                    {index.desc.map((line, i) => (
                      <p key={i} className="text-sm sm:text-base md:text-lg font-medium leading-snug">
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                    <button className="bg-[#C1003F] text-white px-4 py-2 rounded-full text-sm sm:text-base">
                      {index.btn}
                    </button>
                    <p className="text-gray-600 text-xs sm:text-sm">{index.date}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default CarouselPlugin;
