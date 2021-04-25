import { Router } from "express";
import { SettingsController } from "./src/controllers/SettingsController";
import {UsersController} from "./src/controllers/UsersController";
import {MessagesController} from "./src/controllers/MessagesController";

const routes = Router();

//chama as classes no controller
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();


// usa o método create para tratar as requisiçoes
routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);


export { routes };
