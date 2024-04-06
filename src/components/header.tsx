import Link from "next/link";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center w-full flex-col sm:flex-row py-4 sm:py-0 gap-4">
      <Link className="flex items-center justify-center" href="#">
        NextGen Marketplaces
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About Jack
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Blog Posts
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          AI Resources
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};
