const js = require("json-server");
const server = js.create();

const router = js.router("db.json");
const middlewares = js.defaults();

const port = process.env.PORT || 80

server.use(middlewares);
server.use(router)

server.listen(port)