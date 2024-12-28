import SocialMedia from "@/components/navbar/social-media";

export default function NavigationIcons() {
  return (
    <div
      className={
        "items-center justify-center w-1/5 hidden sm:flex md:flex lg:flex xl:flex"
      }
    >
      <SocialMedia />
    </div>
  );
}
