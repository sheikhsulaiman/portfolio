"use client"

import React, { useEffect, useState } from "react"

import { Button } from "./ui/button"

export const Cv = () => {
  const [isMounted,setIsMounted]=useState(false);

  useEffect(()=>{
    setIsMounted(true)
  },[])

  if(!isMounted){
    return null
  }
  return (
    <Button onClick={() => window.open("cv.pdf")} variant="ghost">
      Download Resume
    </Button>
  )
}
