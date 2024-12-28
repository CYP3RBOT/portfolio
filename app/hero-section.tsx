import { Button } from "@/components/ui/button";
import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full h-[70vh] flex flex-col justify-center px-10 sm:px-18 md:px-24 lg:px-30 xl:px-36 gap-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Hi, I&apos;m Mateo Sand
        </h1>
        <h1 className="text-2xl md:text-3xl font-extrabold">Tech Student</h1>
      </div>
      <div className="w-full sm:w-2/3 lg:w-1/2 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga tempora
        beatae, inventore atque modi fugiat sapiente alias consectetur autem,
        iste natus? Earum rem accusantium possimus, beatae dolores molestias
        officiis aliquam?
      </div>

      <div className="flex gap-3">
        <Button>Hire Me</Button>
        <Button variant="outline">Let&apos;s Talk</Button>
      </div>
    </div>
  );
}
