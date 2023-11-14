import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { FcAddImage, FcLike } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { PostCard } from "../../../components/custom/post-card";
import { ModalBox } from "../../../components/custom/modal-box";
import { useCreatePost, usePhantom } from "../../../hooks";
import { Textarea } from "../../../components/ui/textarea";

import { MainSection, OwnerSection, ProfileSection } from "./sections";

const Feed = () => {
  const [isShowAddPost, setShowAddPost] = useState(false);
  const [isShowSoonPost, setShowSoonPost] = useState(false);
  const [
    isLoading,
    {
      errors,
      values,
      touched,
      handleSubmit,
      handleBlur,
      handleChange,
      setFieldValue,
    },
  ] = useCreatePost();

  const { user, posts, connected, publicKey } = usePhantom();

  return (
    <section className="mx-auto sm:container flex">
      {/* Modal Box for Creating Post */}
      <ModalBox isVisible={isShowAddPost} onExit={() => setShowAddPost(false)}>
        {connected ? (
          <>
            <CardHeader>
              <div className="font-medium flex items-center justify-between">
                <p className="text-lg font-medium">Share Something...</p>
                <RxCross1
                  size={32}
                  className="inline-block hover:bg-zinc-300 rounded-lg p-2"
                  onClick={() => setShowAddPost(false)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 space-y-2">
                  <Label htmlFor="title">
                    {"What are you feeling right now?"}
                  </Label>

                  <Select
                    value={values.title}
                    onValueChange={(value) => setFieldValue("title", value)}
                    name="title"
                    id="title"
                  >
                    <SelectTrigger className="w-full h-10 md:h-12 bg-zinc-100">
                      <SelectValue placeholder="Mix Emotions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Happy">
                        <SelectItemStyle name="Happy" color="bg-yellow-500" />
                      </SelectItem>
                      <SelectItem value="Sad">
                        <SelectItemStyle name="Sad" color="bg-blue-500" />
                      </SelectItem>
                      <SelectItem value="Angry">
                        <SelectItemStyle name="Angry" color="bg-red-500" />
                      </SelectItem>
                      <SelectItem value="Scared">
                        <SelectItemStyle name="Scared" color="bg-violet-500" />
                      </SelectItem>
                      <SelectItem value="Disgust">
                        <SelectItemStyle name="Disgust" color="bg-green-500" />
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <span className="text-red-500 text-sm font-medium ">
                    {errors.title && touched.title && errors.title}
                  </span>
                </div>
                <div className="mb-8 space-y-2">
                  <Label htmlFor="content" className="2">
                    {"We're here to listen..."}
                  </Label>
                  <Textarea
                    name="content"
                    id="content"
                    values={values.content}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="bg-zinc-100 h-52 max-h-52"
                    placeholder="Keep holding up"
                  />
                  <span className="text-red-500 text-sm font-medium ">
                    {errors.content && touched.content && errors.content}
                  </span>
                </div>
                <Button
                  type="submit"
                  className="bg-rose-500 h-10 md:h-12 w-full rounded-full md:text-base hover:bg-rose-600"
                >
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 rounded-full border-2 border-white border-t-transparent animate-spin inline-block mr-2"></div>
                      Loading...
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </CardContent>
          </>
        ) : (
          <>
            <CardHeader>
              <div className="font-medium flex items-center justify-between">
                <p className="text-lg">Connect to Phantom Wallet</p>
                <RxCross1
                  size={32}
                  className="inline-block hover:bg-zinc-300 rounded-lg p-2"
                  onClick={() => setShowAddPost(false)}
                />
              </div>
            </CardHeader>
          </>
        )}
      </ModalBox>

      {/* Modal Box for Uploading Pictures */}
      <ModalBox
        isVisible={isShowSoonPost}
        onExit={() => setShowSoonPost(false)}
      >
        <CardHeader>
          <div className="font-medium flex items-center justify-between">
            <p className="text-lg">
              {connected
                ? "Feature is comming soon"
                : "Connect to Phantom Wallet"}
            </p>
            <RxCross1
              size={32}
              className="inline-block hover:bg-zinc-300 rounded-lg p-2"
              onClick={() => setShowSoonPost(false)}
            />
          </div>
        </CardHeader>
      </ModalBox>

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

const SelectItemStyle = ({ color, name }) => {
  return (
    <span className="flex items-center gap-2 font-medium">
      <div className={`${color} w-2 h-2 rounded-full`}></div>
      {name}
    </span>
  );
};

export default Feed;
