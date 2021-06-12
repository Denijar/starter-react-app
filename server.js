// Import dependencies
const express = require("express");
const cors = require("cors");
const path = require("path");

// Import routes
import api from "./server/routes";

// Setup express
const app = express();
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
	console.log(`Request_Endpoint: ${req.method} ${req.url}`);
	next();
});

// Setup body-parser
app.use(express.json());

app.use("/", api);

// Configure the CORs middleware
app.use(cors());

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
	app.use(express.static(path.join(__dirname, "client/build")));

	app.get("*", function (req, res) {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

// Catch any bad requests
app.get("*", (req, res) => {
	res.sendStatus(404);
});

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));
