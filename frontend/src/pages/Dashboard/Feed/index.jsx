import { useState, useEffect } from "react";
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
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { FcAddImage, FcLike } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { PostCard } from "../../../components/custom/post-card";
import { ModalBox } from "../../../components/custom/modal-box";
import { usePost } from "../../../hooks";
import { Textarea } from "../../../components/ui/textarea";

import { useWallet } from "@solana/wallet-adapter-react";
import { useBlog } from "../../../context/Blog";

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
  ] = usePost();

  const {
    user,
    posts,
    initialized,
    initUser,
    createPost,
    showModal,
    setShowModal,
  } = useBlog();
  const { connected, select } = useWallet();

  return (
    <section className="mx-auto sm:container p-4 md:p-6 flex">
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
                      <SelectItem value="Sad">Sad</SelectItem>
                      <SelectItem value="Happy">Happy</SelectItem>
                      <SelectItem value="Angry">Angry</SelectItem>
                      <SelectItem value="Scared">Scared</SelectItem>
                      <SelectItem value="Disgust">Disgusted</SelectItem>
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
              {(connected) ? "Feature is comming soon" : "Connect to Phantom Wallet"}
            </p>
            <RxCross1
              size={32}
              className="inline-block hover:bg-zinc-300 rounded-lg p-2"
              onClick={() => setShowSoonPost(false)}
            />
          </div>
        </CardHeader>
      </ModalBox>

      <section className="w-1/2 hidden sm:block p-4">
        {/* Still thinking */}
        <Card></Card>
      </section>
      <section className="w-full p-4">
        {/* Adding Blog Post here */}
        <Card className="mb-3">
          <CardHeader>
            <div className="flex items-center gap-3">
              <CardTitle>
                <img
                  src={
                    user?.avatar ??
                    "https://gravatar.com/avatar/$%7Bmd4(key)z?s=400&d=robohash&r=x"
                  }
                  alt="avatar"
                  className="h-8 md:h-10 w-8 md:w-10 bg-rose-400 rounded-full"
                />
              </CardTitle>
              <CardDescription
                className="border bg-zinc-50 w-full p-2 md:px-5 rounded-full md:text-base cursor-pointer"
                onClick={() => setShowAddPost(true)}
              >
                {"What's on your mind?"}
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
        <PostCard
          image={
            user?.avatar ??
            "https://gravatar.com/avatar/$%7Bmd4(key)z?s=400&d=robohash&r=x"
          }
          name={user?.name ?? "Guest User"}
          body="Hello world my name is lirae Hello world my name is liraeHello world my name is liraeHello world my name is liraeHello world my name is liraeHello world my name is liraeHello world my name is liraeHello world my name is liraeHello world my name is liraeHello world my name is liraeHello world my name is liraeHello world my name is liraeHello world my name is liraeHello world my name is liraeHello world my name is lirae"
          title="sad"
        />
      </section>
      <section className="w-1/2 hidden lg:block p-4">
        {/* GitHub Owner here */}
        <Card></Card>
      </section>
    </section>
  );
};

export default Feed;
