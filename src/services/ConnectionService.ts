import { getCustomRepository, Repository } from "typeorm";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";
import { Connection } from "../entities/Connection";

interface IConnectionCreate {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}
class ConnectionService {
  private connectionsRepository: Repository<Connection>;
  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository);
  }
  async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
    const connection = this.connectionsRepository.create({
      socket_id,
      user_id,
      admin_id,
      id,
    });

    await this.connectionsRepository.save(connection);
    
    return connection;
  }

  async findByUserId(user_id: string){
    const connection = this.connectionsRepository.findOne({
      user_id,
    });

    return connection;
  }


}

export { ConnectionService };
