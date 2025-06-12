const stripe = Stripe('pk_test_51RWqI6FZFt9Lu5O3RAtoWKKGyBHpCAsgmXOSjdVrCfStZbKVc5bqMUQ1F3OuyhIYlNXMXvSIPZ93yIm9wqn8amF600dclqHMSv');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});