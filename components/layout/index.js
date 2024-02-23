import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../context";
import { MoonIcon, SunIcon } from "../icons";

const name = "Yunus Bahtiar";
const githubURL = "https://github.com/yunusbahtiar22";
const twitterURL = "https://twitter.com/amanofordinary";
export const siteTitle = "Yunus Blog";

export default function Layout({ children, home }) {
  const [darkMode, toggleDarkMode] = useContext(Context);
  return (
    <div className="w-100 md:w-[65%] mx-auto px-4 pb-7">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <nav className="h-[4rem] p-4 pt-5 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-extrabold leading-5 hover:text-blue-900"
          >
            yBlog
          </Link>
          <button
            className="bg-inherit text-gray-600 font-lg p-2 rounded-md border border-geay-300 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-900"
            onClick={() => {
              toggleDarkMode(!darkMode);
            }}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
        {home && (
          <div className="flex gap-4 py-6">
            <section>
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full"
                width={64}
                height={64}
                alt=""
              />
            </section>
            <section className="p-3">
              <p className="text-sm md:text-lg">
                Personal Blog by{" "}
                <a href={twitterURL} target="_blank">
                  {name}
                </a>
              </p>
              <p className="text-sm md:text-lg">
                Hello, I am a web developer 👋
              </p>
            </section>
          </div>
        )}
      </header>
      <main className="min-h-[65vh] pt-4 pb-12">{children}</main>
      {!home && (
        <>
          <div className="mt-4">
            <Link
              href="/"
              className="text-2xl font-extrabold leading-5 hover:text-blue-900"
            >
              yBlog
            </Link>
            <div className="flex gap-4 pt-4">
              <section>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className="rounded-full"
                  width={64}
                  height={64}
                  alt=""
                />
              </section>
              <section className="p-3">
                <p className="text-sm md:text-lg">
                  Personal Blog by{" "}
                  <a href="https://twitter.com/amanofordinary" target="_blank">
                    {name}
                  </a>
                </p>
                <p className="text-sm md:text-lg">
                  Hello, I am a web developer 👋
                </p>
              </section>
            </div>
          </div>
          <div className="mt-[4rem] mb-4">
            <Link href="/">← Back to home</Link>
          </div>
        </>
      )}
      <footer className="p-4">
        <div className="flex gap-3 items-center justify-center">
          <a href={githubURL}>
            <svg width="28" height="28" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
              />
            </svg>
          </a>
          <a href={twitterURL}>
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.62-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101a4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732a11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9c0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
              />
            </svg>
          </a>
          <a href="instagram.com">
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058c.782-.037 1.309-.142 1.797-.331a2.92 2.92 0 0 0 1.08-.702c.337-.337.538-.65.704-1.08c.19-.493.296-1.02.332-1.8c.052-1.104.058-1.49.058-4.029c0-2.474-.007-2.878-.058-4.029c-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06c1.065.05 1.79.217 2.428.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465c-1.066.047-1.405.06-4.122.06c-2.717 0-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153a4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
