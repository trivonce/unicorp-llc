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
import React from "react";
import { ModeToggle } from "./mode-toggle";
import LanguageToggle from "./language-toggle";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useMountedTheme } from "@/hooks/use-mounted-theme";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";

// db
import services from '@/db/services.json'
import portfolio from '@/db/portfolio.json'
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n: { language } } = useTranslation()
  const router = useRouter()
  const { theme, resolvedTheme, mounted } = useMountedTheme();
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);

  const logoSrc = `/assets/logo/unicorp${
    mounted && (theme || resolvedTheme) === "light" ? "-light" : "-dark"
  }.svg`;

  return (
    <div id="navbar" className="fixed w-full left-0 top-0 z-40 bg-background">
      <div className="container flex items-center justify-between py-3 md:py-5 px-4 md:px-10 gap-4 md:gap-10 rounded-[30px]">
        <Link className="shrink-0" href="/">
          {mounted ? (
            <img className="w-[120px] md:w-[170px]" src={logoSrc} alt="Unicorp Logo" />
          ) : (
            <div className="w-[120px] md:w-[170px] h-[30px] md:h-[40px] bg-muted animate-pulse rounded-md" />
          )}
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-10">
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink active={pathname === "/about"} className={navigationMenuTriggerStyle()}>
                  {t("navbar.about")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('navbar.services')}</NavigationMenuTrigger>
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
                            {service.title[language]}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {service.short_description[language]}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    ))}
                  </li>
                  {services.map((service: any, index: number) => (
                    <ListItem
                      key={index}
                      href={'/services'}
                      title={service.title[language]}
                    >
                      {service.description[language]}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t('navbar.portfolio')}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {portfolio.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={'/portfolio'}
                    >
                      {component.description[language as 'en' | 'uz' | 'ru']}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink active={pathname === "/contact"} className={navigationMenuTriggerStyle()}>
                  {t("navbar.contact")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4 md:gap-10">
          <ModeToggle />
          <Separator className="h-6 hidden md:block" orientation="vertical" />
          <LanguageToggle />
          <Separator className="h-6 hidden md:block" orientation="vertical" />
          <Button onClick={() => router.push("/contact")} className="hidden md:block">
            {t('navbar.startYourProject')}
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-6">
                <Link 
                  href="/about" 
                  className="text-lg font-medium hover:text-brand"
                  onClick={() => setIsOpen(false)}
                >
                  {t("navbar.about")}
                </Link>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium">{t('navbar.services')}</h3>
                  {services.map((service: any, index: number) => (
                    <Link
                      key={index}
                      href="/services"
                      className="text-sm text-muted-foreground hover:text-brand pl-4"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title[language]}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium">{t('navbar.portfolio')}</h3>
                  {portfolio.map((project: any, index: number) => (
                    <Link
                      key={index}
                      href="/portfolio"
                      className="text-sm text-muted-foreground hover:text-brand pl-4"
                      onClick={() => setIsOpen(false)}
                    >
                      {project.title}
                    </Link>
                  ))}
                </div>

                <Link 
                  href="/contact" 
                  className="text-lg font-medium hover:text-brand"
                  onClick={() => setIsOpen(false)}
                >
                  {t("navbar.contact")}
                </Link>

                <Button
                  onClick={() => {
                    router.push("/contact");
                    setIsOpen(false);
                  }} 
                  className="mt-4"
                >
                  {t('navbar.startYourProject')}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
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
