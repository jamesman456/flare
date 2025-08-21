'use client'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

 interface wallet
{
    id: number;
    src: StaticImport
    title: string;
    desc?: string
}
interface AuthContextType
{
      selectedWallet: wallet | null;
  loading: boolean;
  progress: number;
  failed: boolean;
  sliderPos: number;
  handleWalletClick: (Wallet: wallet) => void;
  simulateFailure: () => void;
    setSelectedWallet: React.Dispatch<React.SetStateAction<wallet | null>>; 

}

 export const WalletContext = createContext<AuthContextType | undefined>(
    undefined,
);
export const UseWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [selectedWallet, setSelectedWallet] = useState<wallet | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState(false);
    const [sliderPos, setSliderPos] = useState(0); 
   const simulateFailure = () => {
       setLoading(true);
    setFailed(false);
    setSliderPos(0);

    setTimeout(() => {
      setLoading(false);
      setFailed(true);
    }, 3000);
    
  };
    const handleWalletClick = (Wallet: wallet) => {
    setSelectedWallet(Wallet);
    simulateFailure();
  };

    useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setSliderPos((prev) => {
          if (prev >= 100) {
            return 0; 
          }
          return prev + 2; 
        });
      }, 30); 
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <WalletContext.Provider
      value={{
        selectedWallet,
        setSelectedWallet,
        loading,
        progress,
        failed,
        sliderPos,
        handleWalletClick,
        simulateFailure,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
