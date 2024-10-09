
import { MagicMotion } from "react-magic-motion";
import { StickyNav } from "./StickyNav";
import MobileNav from "./MobileNav";

export default function NavBar({sticky = false}) {

    const navLinks = [
        {name: 'HOME', href: '/'},
        {name: 'SOBRE', href: '/#sobre'},
        {name: 'CONTEÚDO', href: '/#conteudo'},
        {name: 'PATROCÍNIO', href: '/#patrocinadores'},
        {name: 'EQUIPE', href: '/equipe'},
        {name: 'CONTATO', href: '/#contato'},
        {name: 'FAQ', href: '/#faq'},
    ]

    return (
    <>
        <StickyNav links={navLinks} sticky={sticky} />
        <MagicMotion transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}>
            <MobileNav links={navLinks}/>
        </MagicMotion>
    </>
    );
}
