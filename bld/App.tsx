import React from 'react';
import { Wallet } from './components/WalletProvider';
import { SignMessage } from './components/SignMessage';
import { DecryptMessage } from './components/DecryptMessage';
import { RequestRecords } from './components/RequestRecords';
import { RequestTransaction } from './components/RequestTransaction';
import { DeployProgram } from './components/DeployProgram';
import { RequestRecordPlaintexts } from './components/RequestRecordPlaintexts';
import { RequestTransactionHistory } from './components/RequestTransactionHistory';
import { SubscribeToEvent } from './components/SubscribeToEvent';

const App: React.FC = () => {
  return (
    <Wallet>
      <div>
        <SignMessage />
        <DecryptMessage />
        <RequestRecords />
        <RequestTransaction />
        <DeployProgram />
        <RequestRecordPlaintexts />
        <RequestTransactionHistory />
        <SubscribeToEvent />
      </div>
    </Wallet>
  );
};

export default App;