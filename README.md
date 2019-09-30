# api-gateway
A simple API gateway / reverse proxy, which can be used along with microservices / apis in NodeJS

Sample configuration in config.js


```javascript
module.exports = {
	port:8081,
	routes:  [
		{
			path:"local-service",
			port:"3001"
		},
		{
			path:"remote-service-with-port", 
			server:"http://remotehost",
			port:"3002"
		},
		{
			path:"remote-service-without-port", 
			server:"http://remotehost"
		},
		{
			path:"custom-service", 
			remotePath:"138.23.44.2"
		}
	]

}
```


Send me a thank you mail if you are using this ;) 
Reach me @: jinujosephdaniel@gmail.com

