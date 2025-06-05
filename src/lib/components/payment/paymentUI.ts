import type { BaseStripeElementsOptions } from "@stripe/stripe-js"

const black = "#4e2c14"
const white = "#fff"
const accent = "#6faf64"
const error = " #f44336"
const primary = "#2b4f81"
const fontFamily = "Montserrat, sans-serif"
const shadowSoft = " rgba(149, 157, 165, 0.2) 0px 8px 24px"

export const customStripeUI: BaseStripeElementsOptions = {
	appearance: {
		theme: "flat",
		labels: "floating",
		variables: {
			colorText: black,
			colorPrimary: accent,
			colorBackground: white,
			colorTextSecondary: primary,
			fontFamily: fontFamily,
			colorDanger: error,
			spacingUnit: "6px",
			gridRowSpacing: "8px",
			gridColumnSpacing: "8px"
		},

		rules: {
			".Tab": {
				boxShadow: shadowSoft
			},
			".Input": {
				boxShadow: shadowSoft
			},
			".Label": {
				opacity: "0.5"
			},

			".Label--floating": {
				opacity: "0.3"
			}
		}
	}
}
