import { ReactNode } from "react";
import { MdEmail } from "react-icons/md";

export default function MailLink({ href, children }: { href: string, children: ReactNode }) {
    return (
        <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
        >
        <div style={{display: "flex", padding: "5px", paddingBottom: "20px"}}>
        <MdEmail className="github-icon" />
        <div style={{paddingLeft: "5px"}}>{children}</div>
        </div>
        </a>
    );
}
