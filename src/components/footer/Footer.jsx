import React from 'react'
import './footer.css'
import { BsTelegram } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">
				Logo
			</a>

			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#"></a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experiece">Experience</a>
				</li>
				<li>
					<a href="#servicec">Services</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Testimonials</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a href="https://gmail.com" target="_blank">
					<SiGmail />
				</a>
				<a href="https://t.me/tlaxaL" target="_blank">
					<BsTelegram />
				</a>
				<a href="https://instagram.com" target="_blank">
					<BsInstagram />
				</a>
			</div>

			<div className="footer__copyright">
				<small>&copy; EGATOR Tutorials. All rights reserved</small>
			</div>
		</footer>
	)
}

export default Footer
