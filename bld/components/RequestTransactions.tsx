import {
    Transaction,
    WalletAdapterNetwork,
    WalletNotConnectedError
  } from "@demox-labs/aleo-wallet-adapter-base";
  import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";
  import React, { FC, useCallback } from "react";
  
  export const RequestTransaction: FC = () => {
    const { publicKey, requestTransaction } = useWallet();
  
    const onClick = async () => {
      if (!publicKey) throw new WalletNotConnectedError();
  
      const record = `'{"id":"0f27d86a-1026-4980-9816-bcdce7569aa4","program_id":"credits.aleo","microcredits":"200000","spent":false,"data":{}}'`
      const inputs = [JSON.parse(record), "aleo1kf3dgrz9...", `${amount}u64`];
      const fee = 35_000;
  
      const aleoTransaction = Transaction.createTransaction(
        publicKey,
        WalletAdapterNetwork.Testnet,
        'credits.aleo',
        'transfer',
        inputs,
        fee
      );
  
      if (requestTransaction) {
        await requestTransaction(aleoTransaction);
      }
    };
  
    return (
      <button onClick={onClick} disabled={!publicKey}>
        Request Transaction
      </button>
    );
  };