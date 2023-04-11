import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="nav-div">
				<ul className="nav-links">
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/projects">
						<li>Projects</li>
					</Link>
					{/* <Link to="/contact-me">
						<li>Contact Me</li>
					</Link> */}
				</ul>
				<div className="social-icons">
					<a href="https://github.com/Airix2/">
						<AiFillGithub />
					</a>
					<a href="https://www.linkedin.com/in/alexsoto1/">
						<AiFillLinkedin />
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
