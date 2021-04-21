import { getCustomRepository,Repository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import {Setting} from "../entities/Settings"

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {

  private settingsRepository: Repository<Setting>;

  constructor(){
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create({chat, username}: ISettingsCreate){

    // verificar se o usuario existe
    const userAlreadyExists = await this.settingsRepository.findOne({username});
     // se existir retornar uma mensagem
    if(userAlreadyExists) {
      throw new Error("userAlreadyExists")
    }
    
    // se não exitir salva no Banco de dados
    const settings = this.settingsRepository.create({
      chat,
      username,
    });

    await this.settingsRepository.save(settings);

    return settings;
  }
}

export {SettingsService}