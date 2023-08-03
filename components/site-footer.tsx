import React from "react"

import { Icons } from "./icons"

function SiteFooter() {
  return (
    <footer className="p-4 mx-auto">
      <a
        href="mailto:sheikhsulaimansony@outlook.com"
        className="flex justify-center gap-2 items-center"
      >
        <Icons.mail className="h-5 w-5 " />
        <p>sheikhsulaimansony@outlook.com</p>
      </a>
    </footer>
  )
}

export default SiteFooter
