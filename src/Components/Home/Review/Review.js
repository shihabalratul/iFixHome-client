import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import tomCruise from '../../../images/tomCruise.jpg';
import SharedCard from '../SharedCard/SharedCard';

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
const Review = () => {
	const reviews = [
		{
			_id: 1,
			name: 'Tom Cruise',
			img: tomCruise,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque fuga numquam sed quaerat molestias similique commodi accusamus architecto non.'
		},
		{
			_id: 2,
			name: 'Tom Cruise',
			img: tomCruise,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque fuga numquam sed quaerat molestias similique commodi accusamus architecto non.'
		},
		{
			_id: 3,
			name: 'Tom Cruise',
			img: tomCruise,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque fuga numquam sed quaerat molestias similique commodi accusamus architecto non.'
		},
		{
			_id: 4,
			name: 'Tom Cruise',
			img: tomCruise,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque fuga numquam sed quaerat molestias similique commodi accusamus architecto non.'
		},
		{
			_id: 5,
			name: 'Tom Cruise',
			img: tomCruise,
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque fuga numquam sed quaerat molestias similique commodi accusamus architecto non.'
		},
	]

	return (
		<div className="m-5">
			<h1 className="fw-bolder text-warning my-5 text-center">Customer Review</h1>

			<Carousel
				responsive={responsive}
			>
				{
					reviews.map(review => <SharedCard key={review._id} data={review} top={false} />)
				}
			</Carousel>
		</div>
	);
};

export default Review;