import { RxCross1 } from "react-icons/rx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { CardHeader, CardContent } from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";
import { ModalBox } from "../../../../components/custom/modal-box";
import { Button } from "../../../../components/ui/button";

const CreatePost = ({
  connected,
  onExit,
  isShowAddPost,
  isLoading,
  formik,
}) => {
  const {
    errors,
    values,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldValue,
  } = formik;

  return (
    <ModalBox isVisible={isShowAddPost} onExit={onExit}>
      {connected ? (
        <>
          <CardHeader>
            <div className="font-medium flex items-center justify-between">
              <p className="text-lg font-medium">Share Something...</p>
              <RxCross1
                size={32}
                className="inline-block hover:bg-zinc-300 rounded-lg p-2"
                onClick={onExit}
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
                  <SelectTrigger className="w-full h-10 md:h-12 bg-zinc-100 md:text-base">
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
                  className="bg-zinc-100 h-52 max-h-52 md:text-base"
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
                onClick={onExit}
              />
            </div>
          </CardHeader>
        </>
      )}
    </ModalBox>
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

export default CreatePost;
