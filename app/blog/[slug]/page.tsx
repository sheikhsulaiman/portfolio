import { BlogWithBody, getBlog } from "@/sanity/sanity-utils";
import Image from "next/image";
import React, { Suspense } from "react";
import Loading from "./loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import slugify from "slugify";

import { ChevronLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { RichText } from "@/components/RichText";

export const revalidate = 30; // revalidate at most every 30 seconds

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const data: BlogWithBody = await getBlog(params.slug);
  const filteredItems = data.body.filter((item: any) => item.style === "h2");
  const rawTocs = filteredItems.map((element: any) =>
    element.children.map((e: any) => e.text)
  );
  const tocs = flattenAndExtractStrings(rawTocs);
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-6 py-4 md:py-8 xl:py-16 sm:px-16 xl:px-20">
        <div className="grid grid-cols-12 gap-4">
          <div className="hidden col-span-12 xl:block lg:col-span-2">
            <Link
              href={"/blog"}
              className="text-foreground-lighter font-semibold hover:text-foreground flex cursor-pointer items-center text-sm transition"
            >
              <ChevronLeft />
              Back
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-12 xl:col-span-10">
            <div className="mb-6 lg:mb-12 max-w-5xl space-y-8">
              <div className="space-y-4">
                <Link href={"/blog"} className="text-green-500 hidden lg:inline">
                  Blog
                </Link>
                <h1 className="text-2xl sm:text-4xl">{data.title}</h1>
                <div>
                  <div className="flex space-x-3 text-sm text-muted-foreground">
                    <p>
                      {Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }).format(new Date(data._createdAt))}
                    </p>
                    <p>•</p>
                    <p>{data.readtime} minutes read</p>
                  </div>
                  <div className="hidden lg:flex justify-between">
                    <div className="flex-1 flex flex-col gap-3 pt-6 md:flex-row md:gap-0 lg:gap-3">
                      {data.authors.map((author) => (
                        <div key={author._id} className=" flex  w-max gap-2">
                          <div className="flex -space-x-3 ">
                            <Avatar className="z-10">
                              <AvatarImage src={urlForImage(author.image)} />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-foreground font-semibold m-0 text-sm">
                              {author.name}
                            </span>
                            <span className="text-muted-foreground m-0 text-xs">
                              {author.jobTitle}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 lg:gap-16 xl:gap-8">
                <div className="col-span-12 lg:col-span-7 xl:col-span-7">
                  <Suspense fallback={<Loading />}>
                    <Image
                      alt={data.alt}
                      src={urlForImage(data.mainImage)}
                      height={700}
                      width={900}
                      className="w-full h-auto rounded-lg"
                    />
                  </Suspense>
                  <article>
                    <div className=" mt-16 prose dark:prose-invert ">
                      <PortableText value={data.body} components={RichText} />
                    </div>
                  </article>
                </div>
                <div className="col-span-12 relative  h-min  space-y-8 lg:col-span-5 xl:col-span-3 xl:col-start-9">
                  <div className="space-y-6 lg:sticky  lg:top-24 lg:mb-48">
                    <div className="hidden  lg:block">
                      <div className="space-y-8 py-8 lg:py-0">
                        <div>
                          <div className="flex flex-wrap gap-2">
                            {data.tags.map((tag) => (
                              <Badge key={tag.tagname} variant="outline">{tag.tagname}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="space-y-2">
                            <p className="text-xl  mb-4">On this page</p>
                            {tocs.map((toc: string) => (
                              <Link
                                className="block text-muted-foreground hover:text-primary"
                                key={slugify(toc)}
                                href={"#" + slugify(toc).toLowerCase()}
                              >
                                {toc}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-4">
                        <div className="text-foreground text-sm">
                          <h1 className="text-xl mb-4">Related Blogs</h1>
                          {data.relatedblogs &&
                            data.relatedblogs.map((relatedBlog) => (
                              <Link
                                key={relatedBlog._id}
                                href={`/blog/${relatedBlog.slug}`}
                              >
                                <p className="text-muted-foreground hover:text-primary">
                                  {relatedBlog.title}
                                </p>
                              </Link>
                            ))}
                        </div>
                      </div>
                      <div className="space-y-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="border p-2 rounded-sm my-2 w-full">
          <h1 className="sm:text-2xl md:text-3xl font-extrabold text-center my-1">
            {data.title}
          </h1>
          <hr />
          <div className="flex flex-col gap-2 md:flex-row justify-between items-center my-1">
            <div className="flex justify-center items-center gap-x-2">
              <div className="my-auto">
                <CalendarIcon className="h-4 w-4" />
              </div>
              <p>
                {Intl.DateTimeFormat("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(data._createdAt))}
              </p>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <p>
                {Intl.DateTimeFormat("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(data._createdAt))}
              </p>
              <div className="my-auto">
                <CalendarClockIcon className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-16 prose prose-stone dark:prose-invert">
          <PortableText value={data.body} />
        </div> */}
      </div>
    </main>
  );
};

// Function to flatten nested arrays and extract strings
const flattenAndExtractStrings = (arr: any) => {
  return arr.reduce((result: any, current: any) => {
    if (Array.isArray(current)) {
      // Recursively flatten nested arrays
      result = result.concat(flattenAndExtractStrings(current));
    } else if (typeof current === "string") {
      // If the current element is a string, add it to the result array
      result.push(current);
    }
    return result;
  }, []);
};

export default BlogPage;
