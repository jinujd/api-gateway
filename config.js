module.exports = {
	port:8081,
	routes:  [
		{
			path:"test",
			port:"8085"
		},
		{
			path:"test2", 
			server:"8086"
		},
		{
			path:"custombooks",
			port:"3001",
			server:"http://localhost",
			remotePath:"138.23.44.2"
		}
	]

}