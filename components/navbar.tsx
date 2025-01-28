"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import LanguageToggle from "./language-toggle";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useMountedTheme } from "@/hooks/use-mounted-theme";
import Image from "next/image";
import { useServices } from "@/features/services/hooks";
import { Skeleton } from "./ui/skeleton";
import { useRouter } from "next/navigation";
import services from '@/db/services.json'

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/portfolio",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/portfolio",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/portfolio",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/portfolio",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/portfolio",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/portfolio",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Navbar = () => {
  const router = useRouter()
  const { theme, resolvedTheme, mounted } = useMountedTheme();
  // const [main, setMain] = useState<any>({})
  // const [rest, setRest] = useState<any>([])
  // const { data, isLoading }: any = useServices()

  // useEffect(() => {
  //   if (data) {
  //     const main = data.find((service: any) => service.main)
  //     const rest = data.filter((service: any) => !service.main)
  //     setRest(rest)
  //     setMain(main)
  //   }
  // }, [data])

  const logoSrc = `/assets/logo/unicorp${
    mounted && (theme || resolvedTheme) === "light" ? "-light" : "-dark"
  }.svg`;

  return (
    <div id="navbar" className="fixed w-full left-0 top-5 z-40 bg-background">
      <div className="container flex items-center justify-between py-5 px-10 gap-10 rounded-[30px]">
        <Link className="shrink-0" href="/">
          {mounted ? (
            <img className="w-[170px]" src={logoSrc} alt="Unicorp Logo" />
          ) : (
            <div className="w-[170px] h-[40px] bg-muted animate-pulse rounded-md" />
          )}
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-10">
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Abous us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    {[services.find((service: any) => service.main)].map((service: any, index: number) => (
                      <NavigationMenuLink key={index} asChild>
                      <a
                        className="flex h-full w-full select-none flex-col rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md"
                        href="/services"
                      >
                        <Image unoptimized className="w-full mix-h-[200px] h-full rounded-md object-cover" src={service?.image} width={0} height={0} alt="web development" />
                        <div className="mb-2 mt-4 text-lg font-medium leading-5">
                          {service.title?.en}
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          {service.short_description?.en}
                        </p>
                      </a>
                    </NavigationMenuLink>
                    ))}
                    
                  </li>
                      {/* {isLoading && Array.from({length: 3}).map((_, index) => <Skeleton key={index} className="h-20 w-full rounded-md" />)} */}
                    {services.filter((service: any) => !service.main).map((service: any, index: number) => (
                      <ListItem
                        key={index}
                        href={'/services'}
                        title={service.title.en}
                      >
                        {service.description.en}
                      </ListItem>
                    ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Separator className="h-6" orientation="vertical" />
          <LanguageToggle />
          <Separator className="h-6" orientation="vertical" />
          <Button onClick={() => router.push("/contact")}>Start your project</Button>
        </div>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
