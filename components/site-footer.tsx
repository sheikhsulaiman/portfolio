import React from "react"

import { Icons } from "./icons"

function SiteFooter() {
  return (
    <footer className="mx-auto p-4">
      <a
        href="mailto:sheikhsulaimansony@outlook.com"
        className="flex items-center justify-center gap-2"
      >
        <Icons.mail className="h-5 w-5 " />
        <p>sheikhsulaimansony@outlook.com</p>
      </a>
    </footer>
  )
}

export default SiteFooter
