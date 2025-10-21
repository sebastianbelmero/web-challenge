"use client";

import { Button } from "@/components/ui/button";
import { NavMain } from "./nav-main";
import { SidebarOptInForm } from "./sidebar-opt-in-form";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { LogOut } from "lucide-react";

export function AppSidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      Cookies.remove("accessToken");
      router.push("/login");
      router.refresh();
    }
  };

  return (
    <aside className="flex h-full flex-col gap-y-4 border-r p-4">
      <div className="flex flex-col gap-y-4">
        <SidebarOptInForm />
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
}