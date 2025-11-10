import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useEffect } from 'react';
interface WalletButtonProps {
  onConnect?: (publicKey: string) => void;
}
export const WalletButton = ({
  onConnect
}: WalletButtonProps) => {
  const {
    publicKey,
    connected
  } = useWallet();
  useEffect(() => {
    if (connected && publicKey && onConnect) {
      onConnect(publicKey.toString());
    }
  }, [connected, publicKey, onConnect]);
  useEffect(() => {
    // Detect if Phantom is installed
    const isPhantomInstalled = window.solana && window.solana.isPhantom;
    if (!isPhantomInstalled) {
      console.log('Phantom wallet not detected');
    }
  }, []);
  return <div className="wallet-adapter-button-trigger">
      <WalletMultiButton className="!bg-gradient-to-r !from-solana-purple !to-solana-green !text-white hover:!opacity-90 !font-semibold !px-6 !py-2.5 !rounded-full !transition-all !border-0 !shadow-lg !shadow-solana-purple/20">
        Connect Wallet
      </WalletMultiButton>
    </div>;
};