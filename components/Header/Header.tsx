import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const Header = ({ className = "" }: { className?: string }) => {
  interface INavItem {
    label: string;
    href: string;
  }
  const navItems: INavItem[] = [
    {
      label: "home",
      href: "/",
    },
    {
      label: "about",
      href: "/about",
    },
    {
      label: "contact",
      href: "/contact",
    },
  ];
  return (
    <header className="flex justify-between py-8 text-white">
      <img
        className="max-w-xs rounded-full"
        src="https://picsum.photos/50/50"
        alt="logo"
      />
      <nav>
        {navItems.map((navItem) => (
          <Link className="p-4 text-2xl" key={navItem.href} href={navItem.href}>
            {navItem.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
