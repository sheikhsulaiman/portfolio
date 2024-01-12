"use client";
import React ,{useEffect, useState} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Combobox } from "@/components/combo-box";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "./Card";
import { Blog } from "@/sanity/sanity-utils";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { cn } from "@/lib/utils";


const AllBlog = ({
  blogs,
  categories,
}: {
  blogs: Blog[];
  categories: string[];
}) => {
  const router = useRouter();

  const [isMounted,setIsMounted]=useState(false);
  
  const [searchString,setSearchString] = useState<string>('');
  const isMobile = useBreakpoint(1023)
  const is2XL = useBreakpoint(1535)
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false)

  useEffect(() => {
    setShowSearchInput(!isMobile)
  }, [isMobile])

  
  
  const searchParams = useSearchParams();
  const selectedCategory= categories.includes(
    searchParams.get("category") as string
    )
    ? searchParams.get("category")
    : categories[0];
    
    useEffect(()=>{
      setIsMounted(true)
    },[])

    if(!isMounted){
      return null
    }
   

  return (
    <div className="w-full">
      <div className="container mt-6 mx-auto flex w-full items-center justify-between">
      { !showSearchInput && <div className="lg:hidden">
          <Combobox categories={categories} />
        </div>}
        <div className="hidden lg:flex items-center flex-grow gap-x-2">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category ? "default" : "outline"}
              size={"sm"}
              className="capitalize "
              onClick={() => {
                router.replace(
                  category === "all" ? "/blog" : `/blog?category=${category}`,
                  { scroll: false }
                );
              }}
            >
              {category}
            </Button>
          ))}
        </div>
        {showSearchInput && <form className="flex-grow lg:flex-grow-0">
          <div className="relative flex items-center -space-x-6">
          { !isMobile && <Search className="w-4 h-4 text-muted-foreground" />}

            <Input
              onChange={(e)=>{
                setSearchString(e.target.value)
              }}
              className={cn(
                "peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm leading-4 px-3 py-2 ",
              isMobile ? 'pl-2':'pl-10'
              )}placeholder="Search"
            />
            {isMobile && <button  type="button" onClick={() => {
                      setSearchString('')
                      setShowSearchInput(false)
                    }}>
              <X className="w-4 h-4 text-muted-foreground hover:text-red-400 hover:cursor-pointer"/>
            </button>}
          </div>
        </form>}
        {!showSearchInput && (
          <Button
            variant={"ghost"}
            size={'icon'}
            onClick={() => setShowSearchInput(true)}
          >
            <Search  className="w-4 h-4 text-muted-foreground" />
          </Button>
        )}
      </div>
      {blogs.length === 0 && (
        <div className="container mx-auto w-full h-40 flex items-center justify-center border rounded-md my-6 bg-slate-100 dark:bg-slate-900">
          <p className="font-semibold text-muted-foreground">No blogs found!</p>
        </div>
      )}
      {blogs.length > 0 && (
        <ol className="container mx-auto grid grid-cols-12 py-10 lg:py-16 lg:gap-16">
          {blogs.filter((blog)=>{return searchString.toLowerCase()===''?blog:blog.title.toLowerCase().includes(searchString) || blog.subtitle.toLowerCase().includes(searchString) }).map((blog) => (
            <Card blog={blog} key={blog._id} />
          ))}
        </ol>
      )}
    </div>
  );
};

export default AllBlog;
