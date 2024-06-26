"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/const";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@repo/ui/components/ui/sheet";
import { cn } from "@repo/ui/lib/utils";
import { Menu } from "lucide-react";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="md:hidden w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild className="cursor-pointer">
          <Menu className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <Link href="/" className="flex items-center gap-1">
              <p className="text-[26px] font-extrabold">Fuse</p>
            </Link>
          </SheetHeader>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-muted": isActive,
                          },
                        )}
                      >
                        {<item.icon />}
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
