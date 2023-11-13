import Routers from "../Routers";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "../components/ui/dropdown-menu";

const Dashboard = () => {
  return (
    <main className="h-full">
      <header className="h-16 md:h-20 shadow-md px-4 sticky top-0">
        <div className="sm:container mx-auto flex items-center h-full justify-between">
          <h1 className="text-2xl md:text-4xl font-extrabold">
            Out
            <span className="text-rose-500">Burst</span>
          </h1>
          <span className="flex items-center gap-3">
            <p className="hidden md:inline-block font-medium">Guest User</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="h-8 md:h-10 w-8 md:w-10 bg-rose-500 rounded-full"></div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="relative right-2 md:right-0">
                <DropdownMenuItem className="md:text-base font-medium">Connect Wallet</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500 md:text-base font-medium">Logout</DropdownMenuItem>
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
