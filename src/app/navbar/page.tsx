'use client';
import React, { useState } from 'react';
import image1 from "@/images/Home/Screenshot_2025-07-22_215836-removebg-preview.png";
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className='border-b-2 fixed w-full top-0 left-0 bg-white z-50 py-4 px-6 md:py-7 md:px-15'>
      <div className='flex justify-between items-center'>
        <div className='grid grid-cols-2 items-center gap-2'>
          <div className='w-full'>
            <Image src={image1} alt='' className='w-16 md:w-auto' />
          </div>
          <div>
            <p className='text-[#C1003F] text-lg md:text-xl'>flare</p>
          </div>
        </div>

    
        <div>
          <ul className='hidden md:flex text-black space-x-6 lg:space-x-20'>
          
            
            <li className='cursor-pointer'><Link href="https://flare.network/wallets">Participate</Link></li>
            <li className='cursor-pointer'><Link href="https://flare.network/products/fassets">Products</Link></li>
            <li className='cursor-pointer'><Link href="https://flare.network/resources/developer-hub">Developers</Link></li>
                        <li className='cursor-pointer'><Link href="https://flarescan.com/">Network</Link></li>

          </ul>

          <div className='md:hidden'>
            <button 
              onClick={toggleMenu} 
              className='text-black focus:outline-none text-2xl'
              aria-label='Toggle Menu'
            >
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

      
      {menuOpen && (
        <div className='md:hidden mt-4 bg-white shadow-md rounded-lg'>
          <ul className='flex flex-col space-y-4 text-black px-6 py-4'>
            
            <li className='cursor-pointer'><Link href="https://flare.network/wallets">Participate</Link></li>
            <li className='cursor-pointer'><Link href="https://flare.network/products/fassets">Products</Link></li>
            <li className='cursor-pointer'><Link href="https://flare.network/resources/developer-hub">Developers</Link></li>
                        <li className='cursor-pointer'><Link href="https://flarescan.com/">Network</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
