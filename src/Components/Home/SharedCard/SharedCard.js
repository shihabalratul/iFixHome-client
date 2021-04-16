import React from 'react';

const SharedCard = ({ data, topImage }) => {
	const { name, description, img } = data;
	return (
		<div className="m-3">
			<div className={`card border-0 shadow rounded-3 ${!topImage && 'bg-light'}`}>
				{
					topImage ? <img src={img} className="card-img-top" alt="..." />
						:
						<img className="profile-pic d-flex mx-auto mt-4 rounded-circle img-fluid" src={img} alt="" />
				}
				<div className="card-body mb-4">
					<h4 className="card-title text-center m-3">{name}</h4>
					<p className="card-text text-center text-secondary">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default SharedCard;