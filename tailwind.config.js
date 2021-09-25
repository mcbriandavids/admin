module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			Poppins: ["Poppins", "san-serif"],
		},
		animation: {
			spin: "spin 8s linear infinite",
			bounce: "bounce 6s infinite",
		},
	},

	variants: {
		extend: {},
	},

	plugins: [],
};
