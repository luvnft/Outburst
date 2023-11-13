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
import { Button } from "../components/custom/button";
import { useBlog } from "../context/Blog";

const Dashboard = () => {
  const [connecting, setConnecting] = useState(false);
  const { connected, select } = useWallet();
  const { user, initialized, initUser } = useBlog();

  const onConnect = () => {
    setConnecting(true);
    select(PhantomWalletName);
  };

  useEffect(() => {
    if (user) {
      setConnecting(false);
    }
  }, [user]);

  useEffect(() =>{
  }, [connected, initialized])

  return (
    <main className="h-full">
      <header className="h-16 md:h-20 shadow-md px-4 sticky top-0">
        <div className="sm:container mx-auto flex items-center h-full justify-between">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            Out
            <span className="text-rose-500">Burst</span>
          </h1>
          <span className="flex items-center gap-3">
            <p className="hidden md:inline-block font-medium">
              {connected ? user?.name ?? "User" : "Welcome User"}
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <img
                  src={user?.avatar}
                  alt="avatar"
                  className="h-8 md:h-10 w-8 md:w-10 bg-rose-500 rounded-full"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="relative right-2 md:right-0">
                <DropdownMenuItem className="md:text-base font-medium">
                  {/*  */}
                  {connected ? (
                    <div className="flex items-center">
                      {initialized ? (
                        <></>
                      ) : (
                        <Button
                          onClick={() => {
                            initUser();
                          }}
                        >
                          Initialize User
                        </Button>
                      )}
                    </div>
                  ) : (
                    <Button
                      loading={connecting}
                      className="w-28"
                      onClick={onConnect}
                      leftIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      }
                    >
                      Connect
                    </Button>
                  )}
                  {/*  */}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500 md:text-base font-medium">
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
