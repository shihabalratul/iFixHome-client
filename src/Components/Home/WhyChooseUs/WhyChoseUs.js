import React from 'react';
import group from '../../../images/group.svg';
import shield from '../../../images/shield.svg';
import help from '../../../images/help.svg';
import WhyChooseUsCard from '../WhyChooseUsCard/WhyChooseUsCard';

const WhyChoseUs = () => {
	const reasons = [
		{
			id: 1,
			title: 'Lots of Technician',
			img: group,
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quisquam quaerat molestias?'
		},
		{
			id: 2,
			title: 'We are Trusted',
			img: shield,
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quisquam quaerat molestias?'
		},
		{
			id: 3,
			title: 'Best Support',
			img: group,
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quisquam quaerat molestias?'
		}
	]

	return (
		<section className="m-3">
			<h1 className="fw-bolder text-warning text-center my-3">Why Choose Us?</h1>
			<div className="row g-5 mx-5" >
				{
					reasons.map(reason => <WhyChooseUsCard key={reason.id} reason={reason} />)
				}
			</div>
		</section>
	);
};

export default WhyChoseUs;