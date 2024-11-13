import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key');

<Elements stripe={stripePromise}>
  <Payment amount={totalAmount} />
</Elements>
