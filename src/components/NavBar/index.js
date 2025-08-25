import { useEffect, useState } from "react";
import { MagicMotion } from "react-magic-motion";
import { StickyNav } from "./StickyNav";
import MobileNav from "./MobileNav";

export default function NavBar({ sticky = false }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024); 
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "SOBRE", href: "/#sobre" },
    { name: "CONTEÚDO", href: "/#conteudo" },
    { name: "PATROCÍNIO", href: "/#patrocinadores" },
    // { name: "EQUIPE", href: "/equipe" },
    { name: "FAQ", href: "/#faq" },
    { name: "CONTATO", href: "/#contato" },
  ];

  return (
    <>
      {isMobile ? (
        <MagicMotion transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}>
          <MobileNav links={navLinks} />
        </MagicMotion>
      ) : (
        <StickyNav links={navLinks} sticky={sticky} />
      )}
    </>
  );
}
