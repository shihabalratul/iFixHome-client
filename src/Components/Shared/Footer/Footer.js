
import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	const noNamed = [
		{ name: "0000/Gushan 1,", link: "/gulshan" },
		{ name: "Dhaka,Bangladesh", link: "/dhaka" },

	]
	const ourAddress = [
		{ name: "New York - 101010 Hudson", link: "//google.com/map" },
		{ name: "Yards", link: "//google.com/map" },

	]
	const quickLinks = [
		{ name: "Home Painting", link: "/homey" },
		{ name: "Plumbing", link: "/plumbing" },
		{ name: "Electrician", link: "/Electrician" },
		{ name: "Roof Repairing", link: "/RoofRepairingt" },
		{ name: "Floor Repairing", link: "/FloorRepairing" },
		{ name: "Door and Window Repairing", link: "/door" },
	]
	const services = [
		{ name: "Home Painting", link: "/homey" },
		{ name: "Plumbing", link: "/plumbing" },
		{ name: "Electrician", link: "/Electrician" },
		{ name: "Roof Repairing", link: "/RoofRepairingt" },
		{ name: "Floor Repairing", link: "/FloorRepairing" },
		{ name: "Door and Window Repairing", link: "/door" },
	]
	return (
		<footer className="footer-area clear-both bg-dark">
			<div className="container pt-5">
				<div className="row py-5">
					<FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
					<FooterCol key={2} menuTitle="Services" menuItems={services} />
					<FooterCol key={3} menuTitle="Quick Links" menuItems={quickLinks} />
					<FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
						<ul className="social-media list-inline">
							<li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
							<li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
							<li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
						</ul>
						<div className="mt-5">
							<h6>Call now</h6>
							<button className="btn back-gradient ">+2025550295</button>
						</div>
					</FooterCol>
				</div>
				<div className="copyRight text-center">
					<p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
				</div>
			</div>
		</footer>

	);
};

export default Footer;