# api-gateway
A simple API gateway / reverse proxy, which can be used along with microservices / apis in NodeJS

Sample configuration in config.js


```javascript
module.exports = {
	port:8081,
	routes:  [
		{
			path:"books",
			port:"3001"
		},
		{
			path:"remote-books", 
			server:"http://remotehost"
		},
		{
			path:"custombooks",
			port:"3001",
			server:"http://localhost",
			remotePath:"138.23.44.2"
		}
	]

}
```


Send me a thank you mail if you are using this ;) 
Reach me @: jinujosephdaniel@gmail.com

