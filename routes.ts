import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./src/repositories/SettingsRepository";
const routes = Router();

routes.post("/settings", async (request, response) => {
  const settingsRepository = getCustomRepository(SettingsRepository);
  const { chat, username } = request.body;
  const settings = settingsRepository.create({
    chat,
    username,
  });

  await settingsRepository.save(settings);

  return response.json(settings);
});

export { routes };
