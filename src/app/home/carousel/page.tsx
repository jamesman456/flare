import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carouselone'
import React from 'react'
import image1 from "@/images/Home/carouselone/Flare meeting.webp"
import image2 from "@/images/Home/carouselone/Group of people at Flare event.webp"
import image3 from "@/images/Home/carouselone/builders at flare google hackathon.webp"
import image5 from "@/images/Home/carouselone/Flare meeting.webp"
import image6 from "@/images/Home/carouselone/events.webp"
import image7 from "@/images/Home/carouselone/Two women at ETH London.webp"
import image8 from "@/images/Home/carouselone/Speaker_At_Korean_Blockchain_Week.webp"
import image9 from "@/images/Home/carouselone/Conference room at flare event.webp"
import image10 from "@/images/Home/carouselone/Group of people at Flare event outide.webp"
import image11 from "@/images/Home/carouselone/Woman at Flare Google Hackathon Berkeley.webp"
import image12 from "@/images/Home/carouselone/group pic flare google hackathon.webp"
import image13 from "@/images/Home/carouselone/Man at Flare google hackathon.webp"
import image14 from "@/images/Home/carouselone/conference.webp"
import { IconType } from 'react-icons/lib'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'


function CarouselAutoPlay()
{

  return (
      <div>
          <Carousel     opts={{
        align: "start",
      }}
              className="w-full max-w-sm">
              <CarouselContent>
                  
                      <CarouselItem className="basis-1/3">
                          <Image src={image1} alt=''/>
                      </CarouselItem>
                      <CarouselItem className="basis-1/3">
                      <Image src={image2} alt='' />
                      <Image src={image3} alt='' />
                      <div>
                          <p>300k+</p>
                      </div>
                  </CarouselItem>
                  <CarouselItem className="basis-1/3">
                      <Image src={image3} alt=''/>
                  </CarouselItem>
                  
                  
              </CarouselContent>
               <CarouselPrevious />
      <CarouselNext />
          </Carousel>
      
    </div>
  )
}

export default CarouselAutoPlay
