import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-wallets";
import { useBlog } from "../context/Blog";

const usePhantom = () => {
  const [connecting, setConnecting] = useState(false);
  const { connected, select, publicKey } = useWallet();
  const { user, disconnectWallet, posts, transactionPending, initUser } = useBlog();

  const onConnect = () => {
    setConnecting(true);
    select(PhantomWalletName);
  };

  const onConnectWallet = () => {
    onConnect();
    initUser();
  };

  useEffect(() => {
    if (user) {
      setConnecting(false);
    }
  }, [user]);

  return {
    connecting,
    connected,
    user,
    disconnectWallet,
    posts,
    publicKey,
    transactionPending,
    onConnectWallet
  };
};

export default usePhantom;
