import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = ({ checkoutInfo }) => {
	const [payment, setPayment] = useState(null);
	const [paymentMassege, setPaymentMassege] = useState(null)
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async (event) => {
		// Block native form submission.
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}


		const cardElement = elements.getElement(CardElement);

		const { error } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement,
		});

		if (error) {
			setPaymentMassege(error.code);
			setPayment(false)
			console.log('[error]', error);
		} else if (checkoutInfo) {

			setPaymentMassege('Payment Success');
			setPayment(true)

			axios({
				method: 'POST',
				url: 'https://desolate-ravine-36439.herokuapp.com/checkout',
				data: checkoutInfo
			})


		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement />
			<button type="submit" className="btn btn-warning my-5 d-flex mx-auto">
				Make Payment
      </button>
			<p className="text-danger text-center">{paymentMassege}</p>

		</form>
	);
};

export default CheckoutForm;