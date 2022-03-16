import Cliente from './Cliente'


export default interface ClienteRepositorio {
    save(client: Cliente): Promise<Cliente>
    delete(client: Cliente): Promise<void>
    fetchAll(): Promise<Cliente[]>
}