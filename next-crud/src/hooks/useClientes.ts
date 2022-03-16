import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import ColecaoCliente from "../firebaseBKND/db/ColecaoCliente"
import useTabelaOuForm from "./useTabelaOuForm"


export default function useClientes() {
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const repo: ColecaoCliente = new ColecaoCliente()

    const {
        tabelaVisivel,
        formularioVisivel,
        showForm,
        showTable,
    } = useTabelaOuForm()

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.fetchAll().then(clientes => {
            setClientes(clientes)
            showTable()
        })
    }

    function selectClient(client: Cliente){
        console.log(client.nome)
        setCliente(client)
        showForm()
    }
    async function deleteClient(client: Cliente){
        await repo.delete(client)
        obterTodos()
    }
    async function saveClient(client: Cliente){
        console.log(client)
        await repo.save(client)
        obterTodos()
    }
    function newClient(client:Cliente){
        console.log(client)
        setCliente(Cliente.vazio())
        showForm()
    }

    return {
        cliente,
        clientes,
        newClient,
        saveClient,
        deleteClient,
        selectClient,
        obterTodos,
        tabelaVisivel,
        showTable,
    }
}