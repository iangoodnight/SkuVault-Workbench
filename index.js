const axios = require("axios");
require('dotenv').config();

// Successful instance of API call
const tenantToken = process.env.TENANT_TOKEN;
const userToken = process.env.USER_TOKEN;

const url = "https://app.skuvault.com/api/inventory/getInventoryByLocation";
const data = {
	"IsReturnByCodes": false,
	"PageNumber": 0,
	"ProductCodes": [],
	"ProductSKUs": [],
	"TenantToken": tenantToken,
	"UserToken": userToken
};

function testAPI(url, data) {
	axios.post(url, data)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

testAPI(url, data);