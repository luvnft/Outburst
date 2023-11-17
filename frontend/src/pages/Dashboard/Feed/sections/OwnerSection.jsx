import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { CardContent, CardHeader } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import {
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const OwnerSection = () => {
  const NavigateToInstagram = () => {
    window.open("https://instagram.com/luvnft", "_blank");
  };

  const NavigateToLinkedin = () => {
    window.open("https://www.linkedin.com/company/71955818", "_blank");
  };

  const NavigateToTip = () => {
    window.open("https://tip.luvnft.com", "_blank");
  };

  return (
    <>
      <CardHeader>
        <div className="flex gap-2">
          <Avatar
            className="bg-zinc-100 h-12 w-12 cursor-pointer"
            onClick={NavigateToInstagram}
          >
            <AvatarImage src="https://i.ibb.co/NLz6y8h/IMG-8674-2.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-medium">Hahz & Candy: Creators </p>
           <p className="text-xs text-zinc-400">We've built a worldwide united social media platform free from algorithms,
              designed with a higher purpose of helping others. Get paid for showing the world your higher self, 
              you don't have to sell your $SOL to the 😈. Tip with link as evidence of your LUV. 
             "<span className="italic">IN LUV WE TRUST</span>"</p>
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

        <Button
          className="rounded-full h-12 text-base bg-green-500 hover:bg-green-600"
          onClick={NavigateToTip}
        >
          Tip!
        </Button>
      </CardContent>
    </>
  );
};

export default OwnerSection;
