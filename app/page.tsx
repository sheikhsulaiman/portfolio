import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Cv } from "@/components/Cv"
import Works from "@/components/Works"

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
            <h1 className=" w-auto text-center text-3xl font-extrabold leading-tight tracking-tighter  md:text-4xl">
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
            src="/avatar.jpg"
            alt="avatar"
            height={380}
            width={230}
            className="mx-auto mt-8 h-auto w-auto rounded-xl shadow-lg sm:mt-0 "
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
          <Cv />
        </div>
      </section>
      <hr className="container mx-auto" />
      <section
        id="skills"
        className="container mx-auto bg-slate-50 pb-8 pt-6 dark:bg-black md:py-10"
      >
        <h1 className="text-center text-2xl">Skills</h1>
        {siteConfig.skills ? (
          <div className="flex flex-wrap items-center justify-around gap-4 pb-8 pt-6 md:py-10">
            {siteConfig.skills.map((skill,index) => (
              <p key={index} className="border-input hover:text-accent-foreground flex justify-center rounded-md border p-2 text-center sm:w-96">
                {skill}
              </p>
            ))}
          </div>
        ) : null}
      </section>
      <hr className="container mx-auto" />
      <Works />
    </div>
  )
}
