import MenuLink from "../MenuLink";
import Background from "./style";

function Sidebar() {
	let linkNames = ["Capex", "Gatepass", "Management of Change", "Safety"];
	return (
		<Background><div className="sidebar">
		<div id="brand">
			<span>Gimate Solutions</span>
		</div>
		<div className="sidebar__menu">
			{linkNames.map((link) => (
				<MenuLink name={link} />
			))}
		</div>
	</div></Background>
		
	);
}

export default Sidebar;
