import React from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const BannerUpper = () => (
<div className = "container">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="/">
	<Nav className="mr-auto">
    <NavItem to="/">Ex QA is now learning react</NavItem>
	</Nav>
</Navbar.Brand>
</Navbar>
</div>
);

export default BannerUpper;