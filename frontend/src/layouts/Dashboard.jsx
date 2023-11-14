import Routers from "../Routers";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";

import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-wallets";
import { useEffect, useState } from "react";
import { useBlog } from "../context/Blog";

const Dashboard = () => {
  const [connecting, setConnecting] = useState(false);
  const { connected, select } = useWallet();
  const { user, disconnectWallet } = useBlog();

  const onConnect = () => {
    setConnecting(true);
    select(PhantomWalletName);
  };

  useEffect(() => {
    if (user) {
      setConnecting(false);
    }
  }, [user]);
  return (
    <main className="h-full">
      <header className="h-16 md:h-20 shadow-md px-4 sticky top-0 bg-white z-20">
        <div className="sm:container mx-auto flex items-center h-full justify-between">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            Out
            <span className="text-rose-500">Burst</span>
          </h1>
          <span className="flex items-center gap-3">
            <p className="hidden md:inline-block font-medium">
              {connected ? user?.name ?? "Guest User" : "Welcome User"}
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <img
                  src={
                    user?.avatar ??
                    "https://gravatar.com/avatar/$%7Bmd4(key)z?s=400&d=robohash&r=x"
                  }
                  alt="avatar"
                  className="h-8 md:h-10 w-8 md:w-10 bg-rose-400 rounded-full"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="relative right-2 md:right-0">
                <DropdownMenuItem
                  className="md:text-base font-medium"
                  onClick={connected ? null : onConnect}
                >
                  {connected ? (
                    <>Wallet Connected</>
                  ) : (
                    <>
                      {connecting ? (
                        <>
                          <div className="w-6 h-6 rounded-full border-2 border-black border-t-transparent animate-spin inline-block mr-2"></div>
                          Loading...
                        </>
                      ) : (
                        "Connect Wallet"
                      )}
                    </>
                  )}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={disconnectWallet}
                  className={`${
                    connected ? "block" : "hidden"
                  } text-red-500 md:text-base font-medium`}
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
        </div>
      </header>

      <Routes>
        <Route path="*" element={<Navigate exact path="/home" />} />
        {Routers.map(
          ({ title, pages }) =>
            title === "Dashboard" &&
            pages.map(({ path, element }, key) => (
              <Route path={path} element={element} key={key} />
            ))
        )}
      </Routes>
    </main>
  );
};

export default Dashboard;
