import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Payment = ({ checkoutInfo }) => {
	const stripePromise = loadStripe('pk_test_51IhBYSJq1bdN1DDn7yc6bUgE24nNdvBAujbNiZ5BD4rHvPFBAOgMxdFiE45uF8pay2qb9F7WpH1TQWarNT0WWvxY00QGCvC8ME');
	return (
		<Elements
			stripe={stripePromise}>
			<div style={{ width: '400px' }}>
				<CheckoutForm checkoutInfo={checkoutInfo} />
			</div>
		</Elements>
	);
};

export default Payment;