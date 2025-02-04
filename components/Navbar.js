"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/TogDark/ThemeToggle";

export default function Navbar() {
  return (
    <>
      {/* Desktop Navbar - Positioned at the top */}
      <nav className="hidden sm:flex w-full p-4 bg-background text-foreground border-b border-border justify-between items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <Button variant="ghost">Placeholder 1</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">Placeholder 2</Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </nav>

      {/* Mobile Navbar - Positioned at the bottom */}
      <nav className="sm:hidden fixed bottom-0 w-full p-4 bg-background text-foreground border-t border-border flex justify-between items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <Button variant="ghost">1</Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost">2</Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </nav>
    </>
  );
}