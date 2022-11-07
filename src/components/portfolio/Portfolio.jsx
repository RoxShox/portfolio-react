import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img.png'
import IMG2 from '../../assets/img_1.png'
import IMG3 from '../../assets/img_2.png'
import IMG4 from '../../assets/img_3.png'
import IMG5 from '../../assets/christmas_trees.png'
import IMG6 from '../../assets/marvel.png'

const data = [
	{
		id: 1,
		image: IMG1,
		title: 'Cancreate',
		github: 'https://github.com/RoxShox/Cantcreate',
		demo: 'https://cantcreate.vercel.app/',
	},
	{
		id: 2,
		image: IMG2,
		title: 'Bear-trip',
		github: 'https://github.com/RoxShox/Bear-trip/tree/master/build',
		demo: 'https://bear-trip.vercel.app/',
	},
	{
		id: 3,
		image: IMG3,
		title: 'vr-soft',
		github: 'https://github.com/RoxShox/vr-proj',
		demo: 'https://vr-arsoft.com/about/',
	},
	{
		id: 4,
		image: IMG5,
		title: 'Christmas tree',
		github: 'https://github.com/RoxShox/christmas-trees',
		demo: '',
	},
	{
		id: 5,
		image: IMG4,
		title: 'Hotel',
		github: 'https://github.com/RoxShox/Hotel',
		demo: 'https://hotel-pi-nine.vercel.app/',
	},
	{
		id: 6,
		image: IMG6,
		title: 'Marvel',
		github: 'https://github.com/RoxShox/Marvel-react',
		demo: 'https://marvel-react-one.vercel.app/',
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
								<a href={github} className="btn">
									Github
								</a>
								{demo === '' ? (
									''
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
