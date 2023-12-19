const { app, initializationPromise } = require("./app");
const serverConfig = require("./configs/server.config");

initializationPromise.then(() => {
  //Starting the server
  app.listen(serverConfig.PORT, () => {
    console.log(`Application started on the port no : ${serverConfig.PORT}`);
  });
});
