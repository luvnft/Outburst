import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { FcAddImage, FcLike } from "react-icons/fc";

const Feed = () => {
  return (
    <section className="mx-auto sm:container p-4 md:p-6 flex">
      <section className="w-1/2 hidden sm:block p-4">
        <Card></Card>
      </section>
      <section className="w-full  p-4">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <CardTitle>
                <div className="h-10 w-10 bg-rose-500 rounded-full"></div>
              </CardTitle>
              <CardDescription className="border bg-zinc-100 w-full p-2 md:px-5 rounded-full md:text-base">
                {"What's on your mind?"}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button className="hover:bg-zinc-100 text-base rounded-full flex-grow bg-white shadow-none text-black ">
              <FcAddImage size={28} className="mr-2" />Photo/Video
            </Button>
            <Button className="hover:bg-zinc-100 text-base rounded-full flex-grow bg-white shadow-none text-black ">
              <FcLike size={28} className="mr-2" />Feelings/Activity
            </Button>
          </CardContent>
        </Card>
      </section>
      <section className="w-1/2 hidden lg:block p-4">
        <Card></Card>
      </section>
    </section>
  );
};

export default Feed;
