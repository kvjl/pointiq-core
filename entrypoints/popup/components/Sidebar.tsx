import React from "react";
import { CheckIcon } from "./icons/CheckIcon";
import { WalletIcon } from "./icons/WalletIcon";

type SidebarProps = {
  tab: string;
  onSelect: (tab: string) => void;
};

export const Sidebar = ({ tab, onSelect }: SidebarProps) => {
  return (
    <nav className="p-4 bg-gray-600 h-dvh border-0 text-amber-50 w-40">
      <div className="flex cursor-pointer ">
        <h1>PointIQ</h1>
      </div>
      <button
        onClick={() => onSelect("check")}
        className="flex justify-around items-center cursor-pointer hover:opacity-90 "
      >
        <CheckIcon className="w-6 h-6" />
        <span>IQ Pick</span>
      </button>
      <button
        onClick={() => onSelect("wallet")}
        className="flex justify-around items-center cursor-pointer hover:opacity-90 "
      >
        <WalletIcon className="w-6 h-6" />

        <span>Wallet</span>
      </button>
    </nav>
  );
};
