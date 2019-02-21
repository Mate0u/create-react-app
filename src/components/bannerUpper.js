import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const BannerUpper = () => (
<div className = "container">
<Navbar bg="dark" variant="dark">
		<Navbar.Brand href="#home">
			<img
				alt=""
				src="https://bcassetcdn.com/asset/logo/0fa296a8-522e-4f65-8def-e53554b80db7/logo?v=4&text=Mate0u"
				width="30"
				height="30"
				className="d-inline-block align-top"
			/>
			{'Ex QA'}
		</Navbar.Brand>
		<Nav className="mr-auto">
			<Nav.Link href="">Home</Nav.Link>
			<Nav.Link href="./cardValidatorAll.js">Credit card validation</Nav.Link>
		</Nav>
	</Navbar>
</div>
);

export default BannerUpper;