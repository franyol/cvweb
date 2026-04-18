import MoreButton from "./MoreButton";
import { ReactNode, useEffect, useState } from "react";

function AsideBar({ onMore }: { onMore: () => void }) {
	return (
		<aside style={{ lineHeight: "1.5" }}>
			<MoreButton onClick={onMore} />

			{/* ABOUT */}
			<div style={{ marginBottom: "18px" }}>
				<h4
					style={{
						margin: "10px 0 6px",
						fontSize: "0.85rem",
						color: "#8fa0ad",
						fontWeight: 600,
						letterSpacing: "0.08em",
					}}
				>
					ABOUT
				</h4>

				<a className="navitems" href="#About-me">› About me</a>

				<div style={{ paddingLeft: "12px", marginTop: "6px" }}>
					<a className="navitems" href="#Profession">› Profession</a><br />
					<a className="navitems" href="#Hobbies">› Hobbies</a><br />
					<a className="navitems" href="#Media">› Media</a><br />
					<a className="navitems" href="#ContactMe">› Contact</a>
				</div>
			</div>

			{/* PROJECTS */}
			<div style={{ marginBottom: "18px" }}>
				<h4
					style={{
						margin: "10px 0 6px",
						fontSize: "0.85rem",
						color: "#8fa0ad",
						fontWeight: 600,
						letterSpacing: "0.08em",
					}}
				>
					PROJECTS
				</h4>

				<a className="navitems" href="#Projects">› Overview</a>

				<div style={{ paddingLeft: "12px", marginTop: "6px" }}>
					<a className="navitems" href="#Systems">› Systems & Robotics</a>
					<div style={{ paddingLeft: "12px" }}>
						<a className="navitems" href="#MARS">› MARS</a><br />
						<a className="navitems" href="#Kiwibot">› Kiwibot</a>
					</div>

					<br />

					<a className="navitems" href="#Backend">› Full Stack Web Dev</a>
					<div style={{ paddingLeft: "12px" }}>
						<a className="navitems" href="#Fedeanco">› Web Registry</a>
					</div>

					<br />

					<a className="navitems" href="#Game">› Software / Game Dev</a>
					<div style={{ paddingLeft: "12px" }}>
						<a className="navitems" href="#LambdaEngine">› Lambda Engine</a><br />
						<a className="navitems" href="#SlipperyHands">› Slippery Hands</a>
					</div>
				</div>
			</div>
		</aside>
	);
}

export default function AsideBarHidable({
	children,
}: {
	children: ReactNode;
}) {
	const [showAside, setShowAside] = useState(false);

	useEffect(() => {
		setShowAside(window.innerWidth >= 768);
	}, []);

	const toggleShowAside = () => {
		setShowAside(prev => !prev);
	};

	return (
		<div style={{ display: "flex" }}>

			{showAside && <AsideBar onMore={toggleShowAside} />}

			{!showAside && (
				<div
					style={{
						position: "fixed",
						top: "120px",
						left: "0px",
						background: "#1f2d39",
						borderRadius: "0 12px 12px 0",
						padding: "10px 12px",
						cursor: "pointer",
						border: "1px solid rgba(255,255,255,0.08)"
					}}
				>
					<MoreButton onClick={toggleShowAside} />
				</div>
			)}

			<main className="scroll-container" style={{ flex: 1 }}>
				{children}
			</main>

		</div>
	);
}
