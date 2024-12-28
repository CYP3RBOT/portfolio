import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavigationLinks from "@/components/navbar/nav-links";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { ListBulletIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export default function NavigationLinksSheet() {
  return (
    <Sheet>
      <SheetTrigger className={"align-center flex sm:hidden"}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              className={"w-8 h-8 hover:cursor-pointer"}
            >
              <ListBulletIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>View Twitter</p>
          </TooltipContent>
        </Tooltip>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <ul className={"flex flex-col items-start gap-4 text-2xl"}>
              <NavigationLinks />
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
