/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/FGCWSeIVEL7
 */
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Metadata } from "next";


export function BlogHome() {
  return (
    <div className="flex flex-col min-h-[100dvh] items-center max-w-[100rem] mx-auto">
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
      <main className="flex-1">
        <section className="w-full pt-12 md:py-24 lg:py-32 border-b">
          <div className="container grid items-center gap-4 px-4 sm:px-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/relaxed">
                Empowering the Next Generation of AI-Enabled Marketplaces
              </h1>
              <Link
                className="inline-flex h-9 items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm gap-1 hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                <ArrowRightIcon className="w-4 h-4" />
                Learn More{"\n"}
              </Link>
            </div>
            <div className="mx-auto  max-h-[300px] aspect-video overflow-clip rounded-xl  object-cover object-center">
              <Image
                alt="Image"
                className="aspect-[16/9]"
                height="310"
                src="/header.webp"
                width="550"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 sm:px-6 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Latest Blog Posts
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="space-y-2">
                <Link
                  className="font-semibold underline underline-offset-2"
                  href="#"
                >
                  <h3 className="text-2xl font-bold">
                    Introducing AI in Marketplaces
                  </h3>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  AI has the potential to transform marketplaces, and in this
                  post, we explore the various ways AI can be integrated to
                  enhance user experience.
                </p>
                <Link
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-gray-300"
                  href="#"
                >
                  Read More
                </Link>
              </div>
              <div className="space-y-2">
                <Link
                  className="font-semibold underline underline-offset-2"
                  href="#"
                >
                  <h3 className="text-2xl font-bold">
                    The Future of E-Commerce: AI-Driven Personalization
                  </h3>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  In this article, we discuss the impact of AI-driven
                  personalization on the future of e-commerce and how businesses
                  can leverage this technology to provide hyper-personalized
                  experiences to their customers.
                </p>
                <Link
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-gray-300"
                  href="#"
                >
                  Read More
                </Link>
              </div>
              <div className="space-y-2">
                <Link
                  className="font-semibold underline underline-offset-2"
                  href="#"
                >
                  <h3 className="text-2xl font-bold">
                    Leveraging AI for Smarter Recommendations
                  </h3>
                </Link>
                <p className="text-gray-500 dark:text-gray-400">
                  This post was last modified on August 25, 2023 and provides
                  insights into the latest trends in AI-enabled marketplace
                  innovations.
                </p>
                <Link
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-gray-300"
                  href="#"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 sm:px-6 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Resources</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Curated resources to help you learn more about AI-enabled marketplaces.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Infinite scalability, zero config</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Real-time insights and controls</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get granular, first-party, real-user metrics on site performance per deployment.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Personalization at the edge</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Deliver dynamic, personalized content, while ensuring users only see the best version of your site.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Real-time insights and controls</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get granular, first-party, real-user metrics on site performance per deployment.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Personalization at the edge</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Deliver dynamic, personalized content, while ensuring users only see the best version of your site.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Infinite scalability, zero config</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enable code to run on-demand without needing to manage your own infrastructure or upgrade hardware.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid max-w-5xl items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:py-12 mx-auto">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contact Jack
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Have a question about AI-enabled marketplaces? Reach out to Jack
                using the form below.
              </p>
            </div>
            <div className="space-y-4">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    required
                    type="email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="min-h-[150px] resize-y"
                    id="message"
                    placeholder="Enter your message"
                    required
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 sm:px-6 lg:gap-10">
            <div className="mx-auto max-w-5xl space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Jack
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Jack is a full-stack developer with a passion for AI in
                  marketplaces.
                </p>
              </div>
              <div className="space-y-4">
                <Image
                  alt="Jack"
                  className="mx-auto rounded-full"
                  height="400"
                  src="/profile.jpeg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 NextGen Marketplaces by Jack. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
