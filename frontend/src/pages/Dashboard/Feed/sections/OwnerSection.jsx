import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { CardContent, CardHeader } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import {
  FaInstagram, // Instagram icon
  FaLinkedin,  // LinkedIn icon
} from "react-icons/fa";

const OwnerSection = () => {
  const NavigateToInstagram = () => {
    window.open("https://instagram.com/hahz5d", "_blank");
  };

  const NavigateToLinkedin = () => {
    window.open("https://linkedin.com/in/hahzterry", "_blank");
  };

  return (
    <>
      <CardHeader>
        <div className="flex gap-2">
          <Avatar
            className="bg-zinc-100 h-12 w-12 cursor-pointer"
            onClick={NavigateToInstagram}
          >
            <AvatarImage src="https://avatars.githubusercontent.com/u/71586774?v=4" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-medium">The Wizard of Hahz</p>
            <p className="text-xs text-zinc-400">Master Builder</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex justify-center flex-col gap-4">
        <Button
          className="rounded-full h-12 text-base"
          onClick={NavigateToInstagram}
        >
          <FaInstagram size={26} className="pr-2" />
          Follow me on Instagram
        </Button>

        <Button
          className="rounded-full h-12 text-base bg-blue-500 hover:bg-blue-600"
          onClick={NavigateToLinkedin}
        >
          <FaLinkedin size={26} className="pr-2" />
          Follow me on LinkedIn
        </Button>
      </CardContent>
    </>
  );
};

export default OwnerSection;
