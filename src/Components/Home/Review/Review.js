import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		axios({
			method: 'get',
			url: 'https://desolate-ravine-36439.herokuapp.com/reviews'
		})
			.then(data => {
				setReviews(data.data)
			})

	}, [])

	return (
		<div className="m-5 pb-5">
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