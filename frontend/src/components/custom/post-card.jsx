import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

import { getAvatarUrl } from "../../functions/getAvatarUrl";
import { getRandomName } from "../../functions/getRandomName";
import { capitalizeString } from "../../functions/capitalizeString";
import { useEffect, useState } from "react";

const colors = {
  Happy: ["bg-yellow-50", "bg-yellow-500", "bg-yellow-600"],
  Sad: ["bg-blue-50", "bg-blue-500", "bg-blue-600"],
  Angry: ["bg-red-50", "bg-red-500", "bg-red-600"],
  Scared: ["bg-violet-50", "bg-violet-500", "bg-violet-600"],
  Disgust: ["bg-green-50", "bg-green-500", "bg-green-600"],
};

export const PostCard = ({ title, body }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const gname = getRandomName();
    const gimage = getAvatarUrl(name);

    setName(capitalizeString(gname));
    setImage(gimage);
  }, []);

  return (
    <Card className="mb-2">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>
            <Avatar className="bg-zinc-100 border">
              <AvatarImage src={image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </CardTitle>
          <CardDescription className="text-black md:text-base font-medium">
            {name}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className={`${colors[title][0]} p-2 rounded-md md:p-4 mb-2`}>
          <p>{body}</p>
          <div className="float-right">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge
                    className={`${colors[title][1]} hover:${colors[title][1]} rounded-full `}
                  >
                    {title}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent className={` ${colors[title][2]} text-white`}>
                  <p className="font-bold">
                    {name} <span className="font-normal">is feeling</span>{" "}
                    {title}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
