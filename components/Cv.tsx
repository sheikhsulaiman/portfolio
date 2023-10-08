"use client"

import React from "react"

import { Button } from "./ui/button"

export const Cv = () => {
  return (
    <Button onClick={() => window.open("cv.pdf")} variant="ghost">
      Download Resume
    </Button>
  )
}
