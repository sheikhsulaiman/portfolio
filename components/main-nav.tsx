import * as React from "react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex grow  gap-6 md:gap-10 ">
      <a
        href="/"
        className="mx-auto flex items-center space-x-2 self-start text-xl font-bold sm:self-center"
      >
        SULAIMAN
        {/* <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span> */}
      </a>

      {items?.length ? (
        <nav className="hidden grow items-center justify-center gap-6 sm:flex ">
          {items?.map(
            (item, index) =>
              item.href && (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </a>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
