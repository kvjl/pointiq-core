import React from "react";
import { useState } from "react";
import CardList from "./CardList";
import { AddCardButton } from "./AddCardButton";
import AppleCardIcon from "./icons/AppleCardIcon";

const WalletView = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold">Wallet</h2>
        <AddCardButton />
      </div>
      <CardList />
    </>
  );
};

export default WalletView;
