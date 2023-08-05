import React from "react"

import { Icons } from "./icons"

function SiteFooter() {
  return (
    <footer>
      <a
        href="mailto:sheikhsulaimansony@outlook.com"
        className="flex items-center justify-center gap-2 border-t p-4"
      >
        <Icons.mail className="h-5 w-5 " />
        <p>sheikhsulaimansony@outlook.com</p>
      </a>
    </footer>
  )
}

export default SiteFooter
