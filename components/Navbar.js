"use client";

import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import { useToast } from "@/hooks/use-toast"; // Import useToast correctly
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/TogDark/ThemeToggle";

export default function Navbar() {
  const { toast } = useToast(); // Correct usage of toast
  const email = "jack@ya-ya.co.uk";

  // Function to copy email and show notification
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Email copied to clipboard!",
      description: email,
    });
  };

  return (
    <>
      {/* Desktop Navbar - Positioned at the top */}
      <nav className="hidden sm:flex w-full p-4 bg-background text-foreground border-b border-border justify-between items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <Button asChild variant="ghost">
                <a href="https://jack-robertson.co.uk" target="_blank" rel="noopener noreferrer" className="no-underline">
                  Main Website
                </a>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" onClick={handleCopyEmail}>
                Contact Me
              </Button>
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
              <Button asChild variant="ghost">
                <a href="https://jack-robertson.co.uk" target="_blank" rel="noopener noreferrer" className="no-underline">
                  🌍
                </a>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="ghost" onClick={handleCopyEmail}>📧</Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </nav>

      {/* Toaster Component (Ensures toasts are displayed) */}
      <Toaster />
    </>
  );
}