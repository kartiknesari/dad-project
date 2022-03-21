import styled from "styled-components"

const Background = styled.div`
.sidebar {
	flex: 0.23;
	background-color: #002329;
	height: 100vh;
}

#brand {
	padding-top: 2rem;
	text-align: center;
	margin-bottom: 72px;
}

#brand > span {
	color: antiquewhite;
	font-size: 30px;
	font-family: "Saira", sans-serif;
	line-height: 24px;
	letter-spacing: 0.15px;
	height: auto;
}

.sidebar__menu {
	padding-left: 41px;
	display: flex;
	flex-direction: column;
}
`

export default Background
