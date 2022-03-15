import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClientRepo";

export default class ColecaoCliente implements ClienteRepositorio {
    async save(client: Cliente): Promise<Cliente> {
        return null
    } 
    async delete(client: Cliente): Promise<void>{
        return null
    }
    async fetchAll(client: Cliente): Promise<Cliente[]> {
        return null
    }
}