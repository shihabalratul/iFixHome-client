import React from 'react';
import carousel1 from '../../.../../../images/carousel1.png';
import carousel2 from '../../.../../../images/carousel2.png';
import Carousel from 'react-bootstrap/Carousel';

const HeaderMain = () => {
	const carouselItems = [
		{
			key: 1,
			img: carousel1,
			heading1: 'We Do The Best',
			heading2: 'Work For You',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt facilis tenetur, modi sed sapiente repudiandae earum ipsum delectus vel dolore, explicabo voluptatum repellendus ullam? Adipisci rem fuga aperiam consequatur aut..'
		},
		{
			key: 2,
			img: carousel2,
			heading1: 'We Take Care of',
			heading2: 'Your Home',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt facilis tenetur, modi sed sapiente repudiandae earum ipsum delectus vel dolore, explicabo voluptatum repellendus ullam? Adipisci rem fuga aperiam consequatur aut.'
		}
	]


	return (
		<main>
			<Carousel
				className="w-100"
				pause={false}
				interval={3000}
				controls={false}
			>
				{

					carouselItems.map(item => <Carousel.Item key={item.key}>
						<div style={{ backgroundImage: `url(${item.img})` }} className="row carousel d-flex align-items-center text-start ps-5">
							<div className="col-md-6"></div>
							<div className="col-md-6 px-5">
								<h1 className="fs-1 fw-bold text-warning">{item.heading1}</h1>
								<h1 className="fs-1 fw-bold text-warning">{item.heading2}</h1>
								<p className=" my-3">{item.description}</p>
								{/* <Link to={window.location.pathname} hash="/#why" className="btn btn-warning" >Get Appointment</Link> */}

							</div>
						</div>
					</Carousel.Item>)
				}
			</Carousel>
		</main>
	);
};

export default HeaderMain;