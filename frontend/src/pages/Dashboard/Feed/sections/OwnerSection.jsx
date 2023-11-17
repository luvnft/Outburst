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
    window.open("https://instagram.com/luvnft", "_blank");
  };

  const NavigateToLinkedin = () => {
    window.open("https://www.linkedin.com/company/71955818", "_blank");
  };

  return (
    <>
      <CardHeader>
        <div className="flex gap-2">
          <Avatar
            className="bg-zinc-100 h-12 w-12 cursor-pointer"
            onClick={NavigateToInstagram}
          >
            <AvatarImage src="https://ibb.co/30HyCDX" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-medium">Hahz & Candy</p>
            <p className="text-xs text-zinc-400">What is your Web5 purpose? <a href="https://tipluvnft.com">Tips</a> are welcome.</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex justify-center flex-col gap-4">
        <Button
          className="rounded-full h-12 text-base"
          onClick={NavigateToInstagram}
        >
          <FaInstagram size={26} className="pr-2" />
          Follow us on Instagram
        </Button>

        <Button
          className="rounded-full h-12 text-base bg-blue-500 hover:bg-blue-600"
          onClick={NavigateToLinkedin}
        >
          <FaLinkedin size={26} className="pr-2" />
          Follow us on LinkedIn
        </Button>
      </CardContent>
    </>
  );
};

export default OwnerSection;
