import React from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Home from "./homePage";
import Card from './cardValidatorAll';


const BannerUpper = () => (
<div className = "container">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="/">
	<Nav className="mr-auto">
		<NavItem to="/">Ex QA</NavItem>
	</Nav>
</Navbar.Brand>
</Navbar>
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/card">About</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/card" component={Card} />
      </div>
    </Router>
</div>
);

export default BannerUpper;