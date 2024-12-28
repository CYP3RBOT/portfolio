"use client";

import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import ThemeSwitcher from "@/components/navbar/theme-switcher";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function SocialMedia() {
  return (
    <ul className={"flex items-center gap-1"}>
      <li className={"flex"}>
        <Tooltip>
          <TooltipTrigger asChild>
            <ThemeSwitcher />
          </TooltipTrigger>
          <TooltipContent>
            <p>Switch Theme</p>
          </TooltipContent>
        </Tooltip>
      </li>
      <li className={"flex"}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              className={"w-8 h-8 hover:cursor-pointer"}
            >
              <InstagramLogoIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>View Instagram</p>
          </TooltipContent>
        </Tooltip>
      </li>
      <li className={"flex"}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              className={"w-8 h-8 hover:cursor-pointer"}
            >
              <TwitterLogoIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>View Twitter</p>
          </TooltipContent>
        </Tooltip>
      </li>
    </ul>
  );
}
