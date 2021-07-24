/*
Orders resource
- ✔ A GET endpoint /orders to see all entered orders
- ✔ A POST endpoint /orders to send a new order to the kitchen: the body of the request should be of this form
{order_id : 1,
 items: [
    {hamburger_id: 1, quantity: 2},
    {hamburger_id: 3, quantity: 1},
    ],
status: "pending" or "served"
created_at: 1627020599070
}
order_id is a unique id for the newly entered order.
created_at is when the order has been created: you can use a datetime format or a timestamp. 
The items array contains a list of objects with the hamburger_id of the hamburger to be added to the order and the quantity ordered.

This endpoint does additional checks and replies with an error message if:
- the hamburger_id is not valid
- the quantity ordered is greater than the availability
The error message should be explicit in what caused the error (e.g Error: Chicken burger availability: 1 - ordered: 2)

- A DELETE endpoint /order/:id to delete an order

- A PATCH endpoint /order/:id that can only change the status of the order
 */

const express = require("express");
const ordersRouter = express.Router();

const exampleOrder = {
	order_id: 1,
	items: [
		{ hamburger_id: 1, quantity: 2 },
		{ hamburger_id: 3, quantity: 1 },
	],
	status: "pending",
	created_at: 1627020599070,
};
const orderKeys = Object.keys(exampleOrder);

let orders = [exampleOrder];

ordersRouter
	.route("/")
	.get((req, res) => {
		res.json(orders);
	})
	.post((req, res) => {
		//replies with an error message if:
		// - the hamburger_id is not valid
		// - the quantity ordered is greater than the availability
		// The error message should be explicit in what caused the error (e.g Error: Chicken burger availability: 1 - ordered: 2)
		let newOrder = req.body;
		let newOrderKeys = Object.keys(req.body);

		const correctKeys = newOrderKeys.every((key) =>
			orderKeys.includes(key)
		);

		if (correctKeys) {
			newOrder["creted_at"] = new Date().getTime();
			newOrder.id = orders.length + 1;

			orders = [...orders, newOrder];
			res.json(newOrder);
		} else {
			res.send(`You did not enter correct order format. Each order should have the following format:
            {
                items: [],
                status: "",
                created_at: new Date().getTime(),
            }
            `);
		}

		console.log(correctKeys);
	});

module.exports = ordersRouter;
