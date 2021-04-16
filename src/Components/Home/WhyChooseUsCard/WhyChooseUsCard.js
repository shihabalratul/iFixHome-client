import React from 'react';

const WhyChooseUsCard = ({ reason }) => {
	const { title, img, description } = reason;
	return (
		<div id="why" className="col-lg-4 col-md-12">
			<div className=" p-3">
				<img style={{ height: '50px' }} className="my-5 d-flex mx-auto" src={img} alt="" />
				<div className="text-center">
					<h4>{title}</h4>
					<p className="text-secondary">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUsCard;