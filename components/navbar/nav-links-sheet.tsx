"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import NavigationLinks from "@/components/navbar/nav-links";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ListBulletIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { useState } from "react";

export default function NavigationLinksSheet() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={"align-center flex sm:hidden"}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              className="w-8 h-8 hover:cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <ListBulletIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Toggle navigation links</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription></SheetDescription>
            <ul className={"flex flex-col items-start gap-4 text-lg"}>
              <NavigationLinks />
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
