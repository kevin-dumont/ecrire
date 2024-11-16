"use client";

import { usePathname } from "next/navigation";
import { PenSquare, Settings } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import Sidebar from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast({
        title: "Déconnexion réussie",
        description: "À bientôt !",
      });
    } catch {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la déconnexion.",
        variant: "destructive",
      });
    }
  };

  const navigation = [
    {
      name: "Nouveau Post",
      href: "/dashboard/post",
      icon: PenSquare,
    },
    {
      name: "Paramètres",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Sidebar
        navigation={navigation}
        pathname={pathname}
        handleSignOut={handleSignOut}
      />
      {/* Main content */}
      <main className="pl-64">
        <div className="min-h-screen">{children}</div>
      </main>
    </div>
  );
}
