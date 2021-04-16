import React from 'react';
import SharedCard from '../SharedCard/SharedCard';
import roofFix from '../../../images/roofFix.jpg';
import tapFix from '../../../images/tapFix.jpg';
import homePainting from '../../../images/homePainting.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3 // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 751 },
		items: 2,
		slidesToSlide: 2 // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 750, min: 0 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	}
};

const RecentProject = () => {
	const projects = [
		{
			_id: 1,
			name: 'Tap Fixing',
			img: tapFix,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nulla sed vel, illo omnis praesentium nemo quod repudiandae, iusto sunt magni? Magnam voluptate iste nam quos exercitationem accusantium placeat soluta?'

		},
		{
			_id: 2,
			name: 'Roof Repairing',
			img: roofFix,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nulla sed vel, illo omnis praesentium nemo quod repudiandae, iusto sunt magni? Magnam voluptate iste nam quos exercitationem accusantium placeat soluta?'

		},
		{
			_id: 3,
			name: 'Home Painting',
			img: homePainting,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nulla sed vel, illo omnis praesentium nemo quod repudiandae, iusto sunt magni? Magnam voluptate iste nam quos exercitationem accusantium placeat soluta?'

		},
		{
			_id: 4,
			name: 'Electronics Repair',
			img: roofFix,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nulla sed vel, illo omnis praesentium nemo quod repudiandae, iusto sunt magni? Magnam voluptate iste nam quos exercitationem accusantium placeat soluta?'

		}
	]
	return (
		<section className="m-5 p-5" >
			<h1 className="fw-bolder text-warning text-center mb-5">Our Recent Project's</h1>
			<Carousel
				responsive={responsive}
			>
				{
					projects.map(project => <SharedCard data={project} key={project._id} topImage={true} />)
				}
			</Carousel>
		</section>
	);
};

export default RecentProject;