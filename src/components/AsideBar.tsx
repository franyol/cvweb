import MoreButton from "./MoreButton"
import { ReactNode, useState } from "react";

function AsideBar({ onMore }: {onMore: () => void;}) {
    return (
		<aside>
            <MoreButton onClick={onMore} />
			<blockquote>
				<a className="navitems" href="#About me">&raquo; About me</a>
                <blockquote>
                    <a className="navitems" href="#Profession">
                        &raquo; Profession
                    </a>
                </blockquote>
                <blockquote>
                    <a className="navitems" href="#Hobbies">&raquo; Hobbies</a>
                </blockquote>
                <blockquote>
                    <a className="navitems" href="#Media">&raquo; Media</a>
                </blockquote>
                <blockquote>
                    <a className="navitems" href="#ContactMe">&raquo; Contact Me</a>
                </blockquote>
			</blockquote>

			<blockquote>
				<a className="navitems" href="#Projects">&raquo; Projects</a>
                <blockquote>
                    <a className="navitems" href="#Ongoing">&raquo; Ongoing</a>
                        <blockquote>
                            <a className="navitems" href="#Fedeanco">&raquo; Web Registry</a>
                        </blockquote>
                        <blockquote>
                            <a className="navitems" href="#Lambda Engine">&raquo; Game Engine</a>
                        </blockquote>
                </blockquote>
                <blockquote>
                    <a className="navitems" href="#Completed">&raquo; Completed</a>
                </blockquote>
            </blockquote>
		</aside>
    )
}

export default function AsideBarHidable({ children }: { children: ReactNode; }) {
    const [showAside, setShowAside] = useState(
        window.innerWidth >= 768
    );

    const toggleShowAside = () => {
        setShowAside(!showAside);
    }

    return (
        <div style={{display: "flex"}}>
        {showAside ? (
            <AsideBar onMore={toggleShowAside} />
        ) : (
            <div style={{
                position: "fixed",
                top: "151px",
                left: "-22px",
                background: "#1f2d39",
                borderRadius: "12px",
                paddingLeft: "20px",
                paddingRight: "10px"
            }}>
            <MoreButton onClick={toggleShowAside} />
            </div>
        )}
        <main>
            {children}
        </main>
        </div>
    )
}

