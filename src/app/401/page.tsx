"use client";

import { useRouter } from "next/navigation";

// Interfaces
import { I_OHeader } from "@/components/organism/o-header/o-header";
import { I_OFooter } from "@/components/organism/o-footer/o-footer";

// Pages
import { P_401 } from "@/components/pages/p-401/p-401";

export default function Page401() {
  const router = useRouter();

  // Organism: Header
  const o_headerProps: I_OHeader = {
    image: "/images/a-avatar.jpeg",
  };

  // P_401Props
  const t_401Props = {
    handleLogin: () => router.push("/"),
  };

  // Organism: Footer
  const o_footerProps: I_OFooter = {
    name: "matheusgomesdev",
    site: "https://matheusgomesdev.com.br",
    github: "https://github.com/matheusgrodrigues",
    linkedin: "https://www.linkedin.com/in/matheusgomes/",
  };

  return <P_401 o_headerProps={o_headerProps} t_401Props={t_401Props} o_footerProps={o_footerProps} />;
}
