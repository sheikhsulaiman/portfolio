import Image from "next/image"
import Link from "next/link"
import { BiLogoTypescript } from "react-icons/bi"
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <div>
      <section
        id="home"
        className="container grid min-h-screen items-center gap-6 pb-8 pt-6 md:py-10"
      >
        <div className="my-auto flex w-auto flex-col items-center justify-between  gap-2 align-middle   sm:flex-row sm:items-start">
          <div className="flex w-auto flex-col items-center justify-center gap-2 self-stretch align-middle sm:items-start">
            <h1 className="  w-auto text-3xl font-extrabold leading-tight tracking-tighter  md:text-4xl">
              Hi, I am
            </h1>
            <h1 className=" w-auto text-3xl font-extrabold leading-tight tracking-tighter  md:text-4xl">
              Sheikh Sulaiman Sony.
            </h1>
            <p className="  text-lg text-muted-foreground ">
              Web and App developer.
            </p>
            <p className="mt-4 text-center text-lg text-muted-foreground">
              I am passionate about creating innovative digital solutions.
            </p>
          </div>
          <Image
            src="/../public/avatar.jpg"
            alt="avatar"
            height={400}
            width={230}
            className="mx-auto mt-8 rounded-xl shadow-lg sm:mt-0"
          />
        </div>
        <div className="flex w-auto justify-center gap-4 sm:justify-start">
          <Link
            href={siteConfig.links.mail}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Contact
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.resume}
            className={buttonVariants({ variant: "outline" })}
          >
            Download Resume
          </Link>
        </div>
      </section>
      <hr className="container mx-auto" />
      <section
        id="skills"
        className="container mx-auto pb-8 pt-6 md:py-10 bg-slate-50 dark:bg-black"
      >
        <h1 className="text-center text-2xl">Skills</h1>
        {siteConfig.skills ? (
          <div className="flex flex-wrap items-center justify-around gap-4 pb-8 pt-6 md:py-10">
            {siteConfig.skills.map((skill) => (
              <p className="flex justify-center rounded-md border border-input p-2 text-center hover:text-accent-foreground sm:w-96">
                {skill}
              </p>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  )
}
