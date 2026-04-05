import { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa";

export default function LinkedinLink({ href, children }: { href: string, children: ReactNode }) {
    return (
        <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
        >
        <div style={{display: "flex", padding: "5px", paddingBottom: "20px"}}>
        <FaLinkedin className="github-icon" />
        <div style={{paddingLeft: "5px"}}>{children}</div>
        </div>
        </a>
    );
}
