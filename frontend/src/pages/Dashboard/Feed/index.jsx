import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { FcAddImage, FcLike } from "react-icons/fc";
import { PostCard } from "../../../components/custom/post-card";
import { useCreatePost, usePhantom } from "../../../hooks";
import { CreatePost, ConnectWallet} from "./components";
import { OwnerSection, ProfileSection } from "./sections";

const Feed = () => {
  const [isShowAddPost, setShowAddPost] = useState(false);
  const [isShowSoonPost, setShowSoonPost] = useState(false);
  const [isLoading, formik] = useCreatePost();

  const { user, posts, connected, publicKey, transactionPending } = usePhantom();

  useEffect(() => {
    if (!transactionPending) {
      setShowAddPost(false);
    }
  }, [transactionPending])

  return (
    <section className="mx-auto sm:container flex">
      {/* Modal Box for Creating Post */}
      <CreatePost
        transactionPending={transactionPending}
        isLoading={isLoading}
        formik={formik}
        connected={connected}
        onExit={() => setShowAddPost(false)}
        isShowAddPost={isShowAddPost}
      />

      {/* Modal Box for Uploading Pictures */}
      <ConnectWallet
        isShowSoonPost={isShowSoonPost}
        connected={connected}
        onExit={() => setShowSoonPost(false)}
      />

      <section className="w-1/2 hidden sm:block p-4 relative">
        {/* Profile Card here */}
        <Card className="sticky top-20 lg:top-24">
          <ProfileSection
            image={
              user?.avatar ??
              "https://gravatar.com/avatar/$%7Bmd4(key)z?s=400&d=robohash&r=x"
            }
            name={user?.name ?? "John Doe"}
            publicKey={publicKey?.toBase58().substring(0, 24) ?? null}
          />
        </Card>
      </section>
      <section className="w-full p-4">
        {/* Adding Blog Post here */}
        <Card className="mb-3">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CardTitle>
                <Avatar className="bg-zinc-100 border w-12 h-12">
                  <AvatarImage
                    src={
                      user?.avatar ??
                      "https://gravatar.com/avatar/$%7Bmd4(key)z?s=400&d=robohash&r=x"
                    }
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </CardTitle>
              <CardDescription
                className=" w-full p-2 rounded-lg h-10 md:h-12 flex px-4 border items-center md:text-base cursor-pointer bg-zinc-100 "
                onClick={() => setShowAddPost(true)}
              >
                What's on your mind?
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button
              className="hover:bg-zinc-100 h-10 md:h-12 md:text-base rounded-full flex-grow bg-white shadow-none text-black border"
              onClick={() => setShowSoonPost(true)}
            >
              <FcAddImage size={24} className="mr-2" />
              Images
            </Button>
            <Button
              className="hover:bg-zinc-100 h-10 md:h-12 md:text-base rounded-full flex-grow bg-white shadow-none text-black border"
              onClick={() => setShowAddPost(true)}
            >
              <FcLike size={24} className="mr-2" />
              Feelings
            </Button>
          </CardContent>
        </Card>

        {/* List of Blog Post */}
        {posts.map((item) => (
          <PostCard
            key={item.account.id}
            body={item.account.content}
            title={item.account.title}
          />
        ))}

        {connected ? null : (
          <p className="text-center font-medium p-8">No Available Posts</p>
        )}
      </section>
      <section className="w-1/2 hidden lg:block p-4">
        {/* GitHub Owner Card here */}
        <Card className="sticky top-24">
          <OwnerSection />
        </Card>
      </section>
    </section>
  );
};

export default Feed;
