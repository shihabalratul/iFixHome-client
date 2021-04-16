import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import RecentProject from '../RecentProject/RecentProject';
import Review from '../Review/Review';
import Services from '../Services/Services';
import WhyChoseUs from '../WhyChooseUs/WhyChoseUs';

const Home = () => {
	return (
		<div>
			<Header />
			<RecentProject />
			<WhyChoseUs />
			<Services />
			<Review />
			<Footer />
		</div>
	);
};

export default Home;