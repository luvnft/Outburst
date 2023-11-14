import { CardContent, CardHeader } from "../../../../components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { capitalizeString } from "../../../../functions/capitalizeString";

const ProfileSection = ({ image, name, publicKey }) => {
  return (
    <>
      <CardHeader className="rounded-lg">
        <Avatar className="h-20 w-20 bg-zinc-100 mx-auto">
          <AvatarImage src={image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-xl font-bold mb-2">{capitalizeString(name)}</p>
        <p className="text-xs text-zinc-400">{publicKey}</p>
      </CardContent>
    </>
  );
};

export default ProfileSection;
