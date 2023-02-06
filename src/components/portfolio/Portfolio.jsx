import React from "react"
import "./portfolio.css"
import IMG1 from "../../assets/img.png"
import IMG2 from "../../assets/img_1.png"
import IMG3 from "../../assets/img_2.png"
import IMG4 from "../../assets/img_3.png"
import IMG5 from "../../assets/christmas_trees.png"
import IMG6 from "../../assets/marvel.png"
import IMG7 from "../../assets/chat.PNG"
import IMG8 from "../../assets/dashboard.PNG"

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Cancreate",
		github: "https://github.com/RoxShox/Cantcreate",
		demo: "https://cantcreate.vercel.app/",
	},
	{
		id: 2,
		image: IMG2,
		title: "Bear-trip",
		github: "https://github.com/RoxShox/Bear-trip/tree/master/build",
		demo: "https://bear-trip.vercel.app/",
	},
	{
		id: 3,
		image: IMG3,
		title: "vr-soft",
		github: "https://github.com/RoxShox/vr-proj",
		demo: "https://vr-arsoft.com/about/",
	},
	{
		id: 4,
		image: IMG5,
		title: "Christmas tree",
		github: "",
		demo: "https://tree-show-vg2k-bmvncwb0y-roxshox.vercel.app/",
	},
	{
		id: 5,
		image: IMG4,
		title: "Hotel",
		github: "https://github.com/RoxShox/Hotel",
		demo: "https://hotel-pi-nine.vercel.app/",
	},
	{
		id: 6,
		image: IMG6,
		title: "Marvel",
		github: "https://github.com/RoxShox/Marvel-react",
		demo: "https://marvel-react-one.vercel.app/",
	},
	{
		id: 7,
		image: IMG7,
		title: "React-chat",
		github: "https://github.com/RoxShox/full-stack-chat-react",
		demo: "",
	},
	{
		id: 8,
		image: IMG8,
		title: "React-dashboard",
		github: "https://github.com/RoxShox/react-mui-dashboard",
		demo: "https://react-mui-dashboard-ebon.vercel.app/",
	},
]

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								{github === "" ? (
									""
								) : (
									<a href={github} className="btn" target="_blank">
										Github
									</a>
								)}
								{demo === "" ? (
									""
								) : (
									<a href={demo} className="btn btn-primary" target="_blank">
										Live Demo
									</a>
								)}
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}

export default Portfolio
