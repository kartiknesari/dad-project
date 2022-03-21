import React from "react";
//MUI imports
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "@mui/material";
//CSS import
import LinkStyle from "./style";

function MenuLink({ name }) {
	return (
    <LinkStyle>
      <div className="sidebar__menu_link">
			<Link href="#" color="inherit" underline="none">
				{name}
			</Link>
			<ExpandMoreIcon />
		</div>
    </LinkStyle>
		
	);
}

export default MenuLink;
