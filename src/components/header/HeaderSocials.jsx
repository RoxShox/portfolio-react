import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiTelegram } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a href="https://github.com/RoxShox" target="_blank">
				<FaGithub />
			</a>
			<a href="https://t.me/tlaxaL" target="_blank">
				<SiTelegram />
			</a>
			<a href="https://instagram.com" target="_blank">
				<BsInstagram />
			</a>
		</div>
	)
}

export default HeaderSocials
