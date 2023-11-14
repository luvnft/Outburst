import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { FaGithub , FaFacebook} from "react-icons/fa";
const OwnerSection = () => {
  const NavigateToGithub = () => {
    window.open("https://github.com/WannaCry081", "_blank");
  };
  const NavigateToFacebook = () => {
    window.open("https://facebook.com/lirae-que-data", "_blank");
  };

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex gap-2">
          <Avatar
            className="bg-zinc-100 h-12 w-12 cursor-pointer"
            onClick={NavigateToGithub}
          >
            <AvatarImage src="https://avatars.githubusercontent.com/u/71586774?v=4" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-medium">WannaCry081</p>
            <p className="text-xs text-zinc-400">BS Computer Engineer</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex justify-center flex-col gap-4">
        <Button className="rounded-full h-12 text-base" onClick={NavigateToGithub}>
          <FaGithub size={26} className="pr-2"/>
          Follow me on GitHub
        </Button>

        <Button className="rounded-full h-12 text-base bg-blue-500 hover:bg-blue-600" onClick={NavigateToFacebook}>
          <FaFacebook size={26} className="pr-2"/>
          Follow me on Facebook
        </Button>
      </CardContent>
    </Card>
  );
};

export default OwnerSection;
