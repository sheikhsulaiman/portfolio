import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 min-h-screen">
      <div className="flex w-auto flex-col sm:flex-row align-middle justify-between items-center sm:items-start gap-2">
        <div className="flex w-auto flex-col items-center sm:items-start gap-2">
          <h1 className="  w-auto text-3xl font-extrabold leading-tight tracking-tighter  md:text-4xl">
            Hi, I am
          </h1>
          <h1 className=" w-auto text-3xl font-extrabold leading-tight tracking-tighter  md:text-4xl">
            Sheikh Sulaiman Sony.
          </h1>
          <p className="  text-lg text-muted-foreground ">
            Web and App developer.
          </p>
          <p className="text-lg text-muted-foreground text-center mt-4">
            I am passionate about creating innovative digital solutions.
          </p>
        </div>
        <Image
          src="/../public/avatar.jpg"
          alt="avatar"
          height={400}
          width={200}
          className="rounded-xl mx-auto shadow-lg"
        />
      </div>
      <div className="flex gap-4 w-auto justify-center sm:justify-start">
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
  )
}
