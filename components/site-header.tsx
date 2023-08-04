"use client"

import { useState } from "react"
import Link from "next/link"
import { AlignJustify, X } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-4">
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-96% sm:hidden"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                {isOpen ? <X /> : <AlignJustify className="h-4 w-4" />}
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
        </Collapsible>
        <div className="flex grow">
          <MainNav items={siteConfig.mainNav} />
        </div>

        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href={siteConfig.links.mail} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.mail className="h-5 w-5" />
                <span className="sr-only">sheikhsulaimansony@outlook.com</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>{" "}
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-96% mx-2  space-y-2 sm:hidden"
      >
        <CollapsibleContent className="space-y-2 flex flex-col">
          {siteConfig.mainNav?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className="text-center border border-input hover:bg-accent hover:text-accent-foreground py-2"
                >
                  {item.title}
                </Link>
              )
          )}
        </CollapsibleContent>
      </Collapsible>
    </header>
  )
}
