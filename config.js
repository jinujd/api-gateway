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