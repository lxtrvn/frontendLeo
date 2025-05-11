import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
import { LeoWalletAdapter } from "@demox-labs/aleo-wallet-adapter-leo";
import React, { FC, useEffect, useCallback } from "react";

export const SubscribeToEvent: FC = () => {
  const { wallet, publicKey } = useWallet();

  const handleAccountChange = useCallback(() => {
    // Handle account change, reconnect
  }, [wallet]);

  useEffect(() => {
    (wallet?.adapter as LeoWalletAdapter).on('accountChange', handleAccountChange);
    return () => {
      (wallet?.adapter as LeoWalletAdapter).off('accountChange', handleAccountChange);
    }
  }, [wallet, publicKey]);

  return (
    <div>
      {/* Component */}
    </div>
  );
};
