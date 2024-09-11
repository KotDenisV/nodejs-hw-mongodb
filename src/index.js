import { setupServer } from "./server.js";
import { initMongoConnection } from "./db/initMongoConnection.js";

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
  console.log('Запуск сервера'); 
};

bootstrap();