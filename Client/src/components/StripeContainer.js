import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51MaS2dSEhYzXAEm5fFIIGB3o8xAHgBUpDTYgXOitgevhkjDNd91fR6RvBgHyZKiwM7aP842Mhis9p9aaU2vh38Qg005Y2IaV0s"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}