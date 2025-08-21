import Image from "next/image";
import bgImage from "../images/Home/backgroud.png"
import Navbar from "./navbar/page";
import image1 from "../images/Home/elliptic(1).png"
import image2 from "../images/Home/layerzero(1).png"
import image3 from "../images/Home/hypernative.png"
import image4 from "../images/Home/googlecloud(1).png"

import image5 from "../images/Home/ankr(1).png"
import image6 from "../images/Home/arkham(1).png"
import image7 from "../images/Home/hextrust(1).png"
import image8 from "../images/Home/tower.png"
import image9 from "../images/Home/drop.png"
import image10 from "../images/Home/eye.png"
import image11 from "../images/Home/curve.png"
import image13 from "../images/code.png"
import image14 from "../images/join.webp"
import image15 from "../images/Home/fw5_join_bg.webp"
import { FaArrowRight, FaDiscord, FaGithub, FaLinkedin, FaMedium, FaTelegram, FaTwitter, FaXbox, FaYoutube } from "react-icons/fa";
import image12 from "../images/Home/circle.png"
import logo from "../images/Home/Screenshot_2025-07-22_215836-removebg-preview.png"
import CarouselPlugin from "./carousel";
import Counter from "./home/infinitecounter/page";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Cards from "./home/card/page";
import CarouselAutoPlay from "./home/carousel/page";
import { link } from "fs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ShieldCheck, Zap, Globe2, Users } from "lucide-react";
import FeaturesSection from "./home/carouselthree/page";
export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <section className="flex flex-col  items-center justify-center text-center py-30 px-6">
        <div className="text-center">
          <Image src={logo} alt="" />
        </div>
        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          Flare is a next-generation blockchain platform powering decentralized
          finance, NFTs, and secure digital transactions.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-gray-700">
          Flare is a full-stack layer 1 solution designed for data intensive use
          cases.
        </p>
        <Link href="./claim" className="mt-8 flex gap-4">
          <Button className="rounded-2xl px-6 py-3 text-lg bg-[#C1003F] text-white shadow-lg">
            Claim Flare
          </Button>
        </Link>
      </section>
      <section className="lg:py-20 ">
        <div className="text-center px-4">
          <p className="text-gray-500 text-base sm:text-lg">
            BUILDING WITH THE BEST
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-6 sm:px-10 md:px-20 lg:px-30 mt-6">
          {[image1, image2, image3, image4, image5, image6, image7].map(
            (img, idx) => (
              <div key={idx} className="flex justify-center">
                <Image
                  src={img}
                  className="w-20 sm:w-24 md:w-28 lg:w-30"
                  alt=""
                />
              </div>
            )
          )}
        </div>

        <section className="py-20 px-8 grid md:grid-cols-5 gap-8 max-w-7xl mx-auto">
          <Card className="bg-white border border-[#C1003F]/30 rounded-2xl shadow-xl">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <Sparkles className="w-12 h-12 text-[#C1003F]" />
              <h3 className="mt-4 text-xl font-semibold">Scalable</h3>
              <p className="text-gray-600 mt-2">
                Flare is built to handle millions of transactions per second
                with near-zero fees.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-[#C1003F]/30 rounded-2xl shadow-xl">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <ShieldCheck className="w-12 h-12 text-[#C1003F]" />
              <h3 className="mt-4 text-xl font-semibold">Secure</h3>
              <p className="text-gray-600 mt-2">
                Enterprise-grade encryption and decentralized consensus keep
                your assets safe.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-[#C1003F]/30 rounded-2xl shadow-xl">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <Zap className="w-12 h-12 text-[#C1003F]" />
              <h3 className="mt-4 text-xl font-semibold">Fast</h3>
              <p className="text-gray-600 mt-2">
                Experience lightning-fast transactions and instant settlements
                worldwide.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-[#C1003F]/30 rounded-2xl shadow-xl">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <Globe2 className="w-12 h-12 text-[#C1003F]" />
              <h3 className="mt-4 text-xl font-semibold">Global</h3>
              <p className="text-gray-600 mt-2">
                Accessible to anyone, anywhere in the world with a connected
                device.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border border-[#C1003F]/30 rounded-2xl shadow-xl">
            <CardContent className="flex flex-col items-center p-8 text-center">
              <Users className="w-12 h-12 text-[#C1003F]" />
              <h3 className="mt-4 text-xl font-semibold">Community</h3>
              <p className="text-gray-600 mt-2">
                A strong, decentralized community driving the future of Flare
                together.
              </p>
            </CardContent>
          </Card>
        </section>
      </section>

      <section>
        <CarouselPlugin />
      </section>

      <section className="py-24 px-8 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <Card className="bg-white border border-[#C1003F]/30 rounded-2xl shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-[#C1003F]">DeFi</h3>
            <p className="text-gray-600 mt-2">
              Empowering decentralized finance applications with high
              performance and low fees.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white border border-[#C1003F]/30 rounded-2xl shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-[#C1003F]">NFTs</h3>
            <p className="text-gray-600 mt-2">
              Supporting creators and collectors with a fast, reliable NFT
              ecosystem.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white border border-[#C1003F]/30 rounded-2xl shadow-xl">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-[#C1003F]">Payments</h3>
            <p className="text-gray-600 mt-2">
              Seamless, secure, and instant payments for businesses and
              individuals worldwide.
            </p>
          </CardContent>
        </Card>
      </section>
      <section className="px-6 md:px-18 py-10 md:py-30">
        <div className="bg-gray-100 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-4 gap-8">
            <div className="items-center self-center px-4 md:px-9 space-y-5 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-semibold">
                Build on Flare
              </h1>
              <p className="text-black/40 text-lg md:text-xl">
                Leverage Flare`s full-stack data solutionns in your
                <br className="hidden md:block" /> decentralized application
              </p>
              <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                <button className="border hover:bg-pink-800 cursor-pointer bg-[#C1003F] px-7 py-3 rounded-2xl text-white">
                  Developer Resources
                </button>
                <button className="bg-white rounded-2xl px-8 py-3 cursor-pointer hover:bg-gray-100">
                  Learn about Flare
                </button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image src={image13} className="w-full md:w-[40em]" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div>
          <FeaturesSection />
        </div>

        <div>
          <Cards />
        </div>
      </section>
      <section className="py-20 px-8 bg-[#C1003F]/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Subscribe to Newsletter
            </h2>
            <p className="text-gray-700 mb-6">
              Join over 30,000 Flare community members. Sign up to the Flare
              newsletter today to hear the latest on product releases, ecosystem
              announcements and global events.
            </p>
            <Button className="rounded-2xl px-6 py-3 text-lg bg-[#C1003F] text-white shadow-lg">
              Subscribe
            </Button>
          </div>

          <div className="flex hidden md:block justify-center">
            <Image
              src={image12}
              alt="Newsletter"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="border-t-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-6 px-6 sm:px-10 lg:px-20">
          <div className="space-y-5 col-span-2">
            <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-5 space-y-4 sm:space-y-0">
              <div className="flex items-center border-b-2 sm:border-b-0 sm:border-r-2 px-4 pb-2 sm:pb-0">
                <Image src={logo} alt="" />
                <p className="text-2xl text-[#C1003F] font-semibold ml-2 sm:ml-0">
                  flare
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg sm:text-2xl font-semibold">
                  The blockchain for data
                </p>
              </div>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-3 sm:space-x-5 px-2 sm:px-9">
              {[
                {
                  desc: "Support",
                  link: "https://flare.network/resources/technical-support",
                },
                { desc: "Our Team", link: "https://flare.network/team" },
                { desc: "Brand Assets", link: "https://flare.network/team" },
                {
                  desc: "Terms & Conditions",
                  link: "https://flare.network/privacy-policy",
                },
                {
                  desc: "UK Disclaimer",
                  link: "https://flare.network/uk-disclaimer",
                },
              ].map((item, i) => (
                <Link href={item.link} key={i}>
                  <div className="border-b-2 sm:border-b-0 sm:border-r-2 text-sm text-black/40 pr-0 sm:pr-4 hover:text-[#C1003F] cursor-pointer">
                    <p>{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="px-2 sm:px-8 text-black/40 text-center sm:text-left">
              <p className="">
                © {new Date().getFullYear()} Flare. All rights reserved.
              </p>{" "}
            </div>

            <div className="flex justify-center sm:justify-start space-x-5 px-2 sm:px-8">
              {[
                { icon: FaGithub, link: "https://github.com/flare-foundation" },
                {
                  icon: FaYoutube,
                  link: "https://www.youtube.com/c/Flare_Networks",
                },
                {
                  icon: FaLinkedin,
                  link: "https://www.linkedin.com/company/flarenetwork/",
                },
                {
                  icon: FaDiscord,
                  link: "https://discord.com/invite/flarenetwork",
                },
                { icon: FaXbox, link: "https://x.com/FlareNetworks" },
                { icon: FaMedium, link: "https://medium.com/flarenetwork" },
                { icon: FaTelegram, link: "https://t.me/FlareNetwork" },
              ].map((item, i) => (
                <Link href={item.link} key={i}>
                  <item.icon
                    size={18}
                    className="text-black/40 hover:text-[#C1003F] cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="py-5 space-y-4">
            <h1 className="text-black/40 font-semibold">Explore</h1>
            <div className="space-y-5">
              {[
                { desc: "Flarescan", link: "https://flarescan.com/" },
                { desc: "Flare Portal", link: "https://portal.flare.network/" },
                {
                  desc: "System Explorer",
                  link: "https://flare-systems-explorer.flare.network/",
                },
                { desc: "Developer Hub", link: "https://dev.flare.network/" },
              ].map((item, i) => (
                <Link
                  href={item.link}
                  key={i}
                  className="flex items-center space-x-4 text-black/40 hover:text-[#C1003F] cursor-pointer"
                >
                  <p className="text-sm">{item.desc}</p>
                  <GoArrowUpRight />
                </Link>
              ))}
            </div>
          </div>

          <div className="py-5 space-y-4">
            <h1 className="text-black/40 font-semibold">Flare</h1>
            <div className="space-y-5">
              {[
                {
                  desc: "Grants",
                  link: "https://flare.network/resources/grants",
                },
                { desc: "Careers", link: "https://flare.network/careers" },
                { desc: "Newsletter", link: "https://flare.network/sign-up" },
                {
                  desc: "Whitepapers",
                  link: "https://dev.flare.network/support/flr/",
                },
              ].map((item, i) => (
                <Link
                  href={item.link}
                  key={i}
                  className="text-black/40 hover:text-[#C1003F] cursor-pointer flex items-center space-x-4"
                >
                  <p className="text-sm">{item.desc}</p>
                </Link>
              ))}
              <Link
                href="#"
                className="flex items-center space-x-4 text-black/40 hover:text-[#C1003F] cursor-pointer"
              >
                <p className="text-sm">FLR</p>
                <GoArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
