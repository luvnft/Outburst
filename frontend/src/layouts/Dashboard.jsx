import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  IoWallet,
  IoLogOut,
  IoPersonCircle,
  IoMailUnread,
} from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { usePhantom } from "../hooks";
import Routers from "../Routers";
import { capitalizeString } from "../functions/capitalizeString";
import { ModalBox } from "../components/custom/modal-box";
import { OwnerSection, ProfileSection } from "../pages/Dashboard/Feed/sections";

const Dashboard = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const {
    connecting,
    connected,
    user,
    disconnectWallet,
    publicKey,
    onConnect,
  } = usePhantom();

  return (
    <main className="h-full">
      <ModalBox isVisible={showProfile} onExit={() => setShowProfile(false)}>
        <ProfileSection
          image={
            user?.avatar ??
            "https://gravatar.com/avatar/$%7Bmd4(key)z?s=400&d=robohash&r=x"
          }
          name={user?.name ?? "John Doe"}
          publicKey={publicKey?.toBase58() ?? null}
        />
      </ModalBox>

      <ModalBox isVisible={showContact} onExit={() => setShowContact(false)}>
        <OwnerSection />
      </ModalBox>

      {/* Navigation Bar */}
      <header className="h-16 md:h-20 shadow-md px-4 sticky top-0 bg-white">
        <div className="sm:container mx-auto flex items-center h-full justify-between">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            Out
            <span className="text-rose-500">Burst</span>
          </h1>
          <span className="flex items-center gap-3">
            <p className="hidden sm:inline-block font-medium text-end">
              {connected
                ? capitalizeString(user?.name ?? "John Doe")
                : "Welcome"}
            </p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="bg-zinc-100 border">
                  <AvatarImage
                    src={
                      user?.avatar ??
                      "https://gravatar.com/avatar/$%7Bmd4(key)z?s=400&d=robohash&r=x"
                    }
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="relative right-2 md:right-0">
                <DropdownMenuItem
                  className="md:text-base font-medium flex items-center gap-1"
                  onClick={connected ? null : onConnect}
                >
                  {connected ? (
                    <p className="text-sm text-zinc-500">
                      {publicKey?.toBase58().substring(0, 12)}...
                    </p>
                  ) : (
                    <>
                      {connecting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin inline-block mr-1"></div>
                          Loading...
                        </>
                      ) : (
                        <>
                          <IoWallet size={20} />
                          <p>Connect to Wallet</p>
                        </>
                      )}
                    </>
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="sm:hidden text-base font-medium flex items-center gap-1"
                  onClick={() => setShowProfile(true)}
                >
                  <IoPersonCircle size={20} />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="lg:hidden text-base font-medium flex items-center gap-1"
                  onClick={() => setShowContact(true)}
                >
                  <IoMailUnread size={20} />
                  Contact Me
                </DropdownMenuItem>
                {connected ? (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={disconnectWallet}
                      className="text-red-500 md:text-base font-medium flex items-center gap-1 hover:focus:bg-red-50 hover:focus:text-red-600"
                    >
                      <IoLogOut size={20} /> Logout
                    </DropdownMenuItem>
                  </>
                ) : null}
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
        </div>
      </header>

      {/* News Feed */}
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
