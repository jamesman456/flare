import React from 'react'
import image1 from "@/images/Home/card/ballon.webp"
import image2 from "@/images/Home/card/cookie.webp"
import image3 from "@/images/Home/card/Vote_Hero.webp"
import image4 from "@/images/Home/card/Community_Header.webp"
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { IconType } from 'react-icons/lib'
import Image from "next/image"
import { FaArrowRight } from 'react-icons/fa'

interface CardProps {
  id: number;
  src: StaticImport;
  title: string;
  icon: IconType;
  desc: string[];
  link: string;
}

function Card() {
  const images: CardProps[] = [
    { id: 1, src: image1, link:"https://flare.network/flaredrops",title: "Get FlareDrops", icon: FaArrowRight, desc: ["Wrap FLR to earn rewards"] },
    { id: 2, src: image2, link: "https://flare.network/delegate-and-stake", title: "Delegate & Stake", icon: FaArrowRight, desc: ["A simple and effective way of boosting", "rewards while contributing to Flare's security"] },
    { id: 3, src: image3, link:"https://flare.network/vote", title: "Vote", icon: FaArrowRight, desc: ["Participate in transparent, onchain", "governance to define the future of Flare"] },
    { id: 4, src: image4, link:"https://flare.network/community", title: "Community", icon: FaArrowRight, desc: ["Come together, share ideas, and build"] }
  ]

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-6 sm:px-10 lg:px-20 py-10 lg:py-20'>
        {images.map((index) => (
          <a 
            href={index.link}
            key={index.id} 
            className='border bg-[#FFF3F5] translation-transform transform group hover:scale-105 duration-300 ease-in-out hover:bg-[#FFE3E8] rounded-2xl h-full'
          >
            <div className='py-5'>
              <Image src={index.src} className='h-[25vh] sm:h-[30vh] w-auto m-auto' alt="" />
            </div>
            <div className='text-center m-auto py-5 space-y-3'>
              <div className='flex items-center space-x-4 justify-center group-hover:underline underline-offset-8 text-[#F0325C]'>
                <h1 className='text-xl sm:text-2xl font-semibold'>{index.title}</h1>
                <index.icon size={22} className="sm:size-[25px]" />
              </div>
              <div className='px-4 sm:px-5 text-black/50 font-normal text-sm sm:text-base'>
                {index.desc.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Card
