import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "./ui/tooltip";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TooltipProvider>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </TooltipProvider>
    </>
  );
}
