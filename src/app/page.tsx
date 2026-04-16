import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col justify-center items-center font-mono">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative text-center px-6">
        {/* Profile Picture */}
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 rounded-full border border-green-500/40 scale-110" />
          <Image
            src="/profile.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-32 h-32 rounded-full border-2 border-green-500/60 object-cover"
          />
        </div>

        {/* Handler */}
        <p className="text-green-500 text-xs tracking-widest uppercase mb-1">&#47;&#47; software engineer</p>
        <h2 className="text-3xl font-bold text-white">@jd29</h2>

        {/* Quote */}
        <p className="text-zinc-500 text-sm italic mt-3 max-w-sm mx-auto leading-relaxed">
          {`"I'm not a great programmer; I'm just a good programmer with great habits."`}
          <span className="block text-zinc-600 not-italic mt-1">— Kent Beck</span>
        </p>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6 max-w-xs mx-auto">
          <div className="flex-1 h-px bg-green-700/30" />
          <span className="text-green-700/60 text-xs">&#47;&#47;</span>
          <div className="flex-1 h-px bg-green-700/30" />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="https://medium.com/@jackdriscoll_90855"
            target="_blank"
            className="p-2 border border-green-700/30 rounded-sm text-zinc-500 hover:text-green-500 hover:border-green-500/60 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" width={18} height={18}>
              <path d="M180.5 74.3C80.8 74.3 0 155.6 0 256S80.8 437.7 180.5 437.7 361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1H559C559 161.5 518.6 84.9 468.8 84.9zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256C640 171.4 625.8 102.7 608.3 102.7z" />
            </svg>
          </Link>
          <Link
            href="https://twitter.com/JKDRISC"
            className="p-2 border border-green-700/30 rounded-sm text-zinc-500 hover:text-green-500 hover:border-green-500/60 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" width={18} height={18}>
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </Link>
          <Link
            href="https://github.com/jdriscoll98"
            className="p-2 border border-green-700/30 rounded-sm text-zinc-500 hover:text-green-500 hover:border-green-500/60 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" width={18} height={18}>
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jack-driscoll-453718164/"
            className="p-2 border border-green-700/30 rounded-sm text-zinc-500 hover:text-green-500 hover:border-green-500/60 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width={18} height={18}>
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 items-center">
          <Link
            href="/resume.html"
            className="text-sm px-6 py-2 border border-green-700/40 text-green-500 rounded-sm hover:bg-green-500/10 hover:border-green-500 transition-colors tracking-wider"
          >
            view_resume
          </Link>
          <Link
            href="/about"
            className="text-sm px-6 py-2 border border-green-700/40 text-green-500 rounded-sm hover:bg-green-500/10 hover:border-green-500 transition-colors tracking-wider"
          >
            about_me
          </Link>
          <Link
            href="/interests"
            className="text-sm px-6 py-2 border border-green-700/40 text-green-500 rounded-sm hover:bg-green-500/10 hover:border-green-500 transition-colors tracking-wider"
          >
            my_interests
          </Link>
          <Link
            href="/blog"
            className="text-sm px-6 py-2 border border-green-700/40 text-green-500 rounded-sm hover:bg-green-500/10 hover:border-green-500 transition-colors tracking-wider"
          >
            blog
          </Link>
          <Link
            href="/contact"
            className="text-sm px-6 py-2 border border-green-700/40 text-green-500 rounded-sm hover:bg-green-500/10 hover:border-green-500 transition-colors tracking-wider"
          >
            contact_me
          </Link>
        </div>
      </div>
    </div>
  );
}
