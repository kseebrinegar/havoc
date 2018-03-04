import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<div className="left-side-footer">
				<h3>HAVOC</h3>
				<div></div>
				<p>Make something you love.</p>
			</div>
			<div className="right-side-footer">
				<ul>
					<li><NavLink to="/">Hello</NavLink></li>
					<li><NavLink to="/work">Work</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/careers">Careers</NavLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
				</ul>
				<p>{String.fromCharCode(169) + ' 2018 Havoc'}</p>
			</div>
		</footer>
	)
};

export default Footer;