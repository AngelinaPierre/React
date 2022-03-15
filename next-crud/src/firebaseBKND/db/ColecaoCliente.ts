import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClientRepo";
import firebase from '../config'

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(client: Cliente){
            return {
                nome: client.nome,
                idade: client.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions){
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot?.id)
        }
    }
    async save(client: Cliente): Promise<Cliente> {
        if(client?.id) {
            await this.colecao().doc(client.id).set(client)
            return client
        } else {
            const docRef = await this.colecao().add(client)
            const doc = await docRef.get()
            return doc.data()
        }
    } 
    async delete(client: Cliente): Promise<void>{
        return this.colecao().doc(client.id).delete()
    }
    async fetchAll(client: Cliente): Promise<Cliente[]> {
        return null
    }
    private colecao(){
        return firebase
            .firestore()
            .collection('clientes')
            .withConverter(this.#conversor)
    }
}