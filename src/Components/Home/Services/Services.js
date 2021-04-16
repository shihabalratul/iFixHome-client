import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import roofRepairing from '../../../images/roofRepairing.jpg';
import painting from '../../../images/painting.jpg';
import plumbing from '../../../images/plumbing.jpg';
import windowRepair from '../../../images/windowRepair.jpg';
import electrician from '../../../images/electrician.jpg';
import floorRepair from '../../../images/floorRepair.jpg';
const Services = () => {
	const services = [
		{
			_id: 1,
			name: 'Home Painting',
			img: painting,
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut natus consequatur quae molestiae incidunt dicta hic magni vel adipisci nemo.',
			price: 100,
		},
		{
			_id: 2,
			name: 'Plumbing',
			img: plumbing,
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut natus consequatur quae molestiae incidunt dicta hic magni vel adipisci nemo.',
			price: 100,
		},
		{
			_id: 3,
			name: 'Electrician',
			img: electrician,
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut natus consequatur quae molestiae incidunt dicta hic magni vel adipisci nemo.',
			price: 100,
		},
		{
			_id: 4,
			name: 'Roof Repairing',
			img: roofRepairing,
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut natus consequatur quae molestiae incidunt dicta hic magni vel adipisci nemo.',
			price: 100,
		},
		{
			_id: 5,
			name: 'Floor Repairing',
			img: floorRepair,
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut natus consequatur quae molestiae incidunt dicta hic magni vel adipisci nemo.',
			price: 100,
		},
		{
			_id: 6,
			name: 'Door and Window Repairing',
			img: windowRepair,
			description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut natus consequatur quae molestiae incidunt dicta hic magni vel adipisci nemo.',
			price: 100,
		},

	]
	return (
		<main className="m-5">
			<h1 className="fw-bold text-warning text-center">Our Services</h1>
			<div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 my-4">
				{
					services.map(service => <ServiceCard key={service._id} service={service} />)
				}
			</div>
		</main>
	);
};

export default Services;