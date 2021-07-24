
/* 
- A GET endpoint /hamburgers to have a full list of hamburgers available. Every hamburger object should also include a "quantity" element specifying how many hamburger of that type can be served
- A POST endpoint /hamburgers to add a new hamburger to the menu.
- A PATCH endpoint to UPDATE info about your hamburgers: The body of the request should be one or multiple elements to be updated or added to an existing resource
*/
const express = require("express")
const hamburgerRouter = express.Router()


let hamburgers = [
	{
		id: 8,
		name: "Vegetarian Burger",
		restaurant: "Indian Burgers",
		web: "https://www.cookwithmanali.com/vegetarian-burger-indian-style/",
		description:
			"With summer around the corner, I had to share a vegetarian burger recipe with you guys. Actually I plan to share more in the next month but I thought I will start with this Indian style Vegetarian Burger aka Masala Burger!",
		ingredients: [
			"american cheese",
			"burger sauce",
			"french mustard",
			"pickes",
			"onion",
			"Veggies",
		],
	},
	{
		id: 9,
		name: "Fat Santa",
		restaurant: "Sky City Hamilton",
		web: "https://skycityhamilton.co.nz/eat-drink/eat-burger/",
		description: "A Christmas themed burger",
		ingredients: [
			"chicken thigh",
			"champagne ham",
			"sage and onion stuffing",
			"gravy mash",
			"lettuce",
			"tomato",
			"cranberry sauce",
		],
	},
	{
		id: 10,
		name: "Blondie",
		restaurant: "Yankys",
		web: "http://yankyslambton.co.za/menu/",
		description: "Delicious steak burger",
		ingredients: [
			"steak",
			"BBQ sauce",
			"bacon",
			"egg",
			"cheese",
			"lettuce",
			"tomato",
			"onion",
			"gerkins",
		],
	},
	{
		id: 11,
		name: "Monster Burger",
		restaurant: "Yankys",
		web: "http://yankyslambton.co.za/menu/",
		description: "Massive meaty burger - the size of a dinner plate",
		ingredients: [
			"250g patty",
			"bacon",
			"cheese",
			"2 eggs",
			"steak",
			"BBQ sauce",
			"lettuce",
			"tomato",
			"onion",
			"gerkins",
		],
	},
];