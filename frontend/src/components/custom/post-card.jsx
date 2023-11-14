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

import { Badge } from "../ui/badge";

export const PostCard = ({ image, name, title, body }) => {
  return (
    <Card className="mb-2">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>
            <img
              src={image}
              alt="avatar"
              className="h-8 md:h-10 w-8 md:w-10 bg-rose-400 rounded-full"
            />
          </CardTitle>
          <CardDescription className="text-black md:text-base font-medium">
            {name}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-blue-50 p-2 rounded-md md:p-4 mb-2">
          <p>{body}</p>
          <div className="float-right">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Badge className="rounded-full bg-blue-500 hover:bg-blue-600">
                    {title}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent className="bg-blue-500 text-white">
                  <p>
                    {name} is feeling {title}
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
