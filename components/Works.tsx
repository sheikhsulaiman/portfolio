import React from "react"
import Link from "next/link"

import { Icons } from "./icons"

let repos: any
async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/sheikhsulaiman/repos"
  )
  repos = await response.json()
  // return repos
}

fetchRepos()
const Works = () => {
  // const repos = await fetchRepos()
  return (
    <section id="works" className="container mx-auto  pb-8 pt-6 md:py-10">
      <h1 className="text-center text-2xl">Works</h1>
      {repos ? (
        <div className="flex flex-col flex-wrap items-center justify-around  gap-4 pb-8 pt-6 sm:flex-row md:py-10">
          {repos.map((repo: any) => (
            <div className="w-72 rounded-md border border-input bg-slate-50 p-2 dark:bg-background sm:w-96">
              <h1 className="flex justify-center p-2  text-center font-bold hover:text-accent-foreground ">
                {repo.name}
              </h1>
              <hr className="my-2" />
              <div className="flex justify-between">
                <p>Language: {repo.language}</p>
                <Link
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons.gitHub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  )
}

export default Works
