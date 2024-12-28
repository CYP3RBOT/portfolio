import Header from "@/components/navbar/header";
import NavigationIcons from "@/components/navbar/nav-icons";
import NavigationLinks from "@/components/navbar/nav-links";
import NavigationLinksSheet from "@/components/navbar/nav-links-sheet";

export default function Navbar() {
  return (
    <nav
      className={
        "flex h-20 w-full items-center justify-between px-10 shadow-md sm:px-18 md:px-24 lg:px-30 xl:px-36"
      }
    >
      <Header />

      <ul className={"hidden justify-center gap-6 sm:flex"}>
        <NavigationLinks />
      </ul>

      <div className="flex items-center justify-center gap-4">
        <NavigationLinksSheet />
        <NavigationIcons />
      </div>
    </nav>
  );
}
