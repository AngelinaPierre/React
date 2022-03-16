import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ColecaoCliente from "../firebaseBKND/db/ColecaoCliente";

export default function Home() {
    // const clientList = [
    //     new Cliente('Ana',34,'1'),
    //     new Cliente('Bia',45,'2'),
    //     new Cliente('Clara',65,'3'),
    //     new Cliente('Giulia',12,'4'),
    // ]
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const repo: ColecaoCliente = new ColecaoCliente()

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.fetchAll().then(clientes => {
            setClientes(clientes)
            setVisivel('tabela')
        })
    }

    function selectClient(client: Cliente){
        console.log(client.nome)
        setCliente(client)
        setVisivel('form')
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
        setVisivel('form')
    }
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            {visivel === 'tabela' ? (
                <>
                    <div className="flex justify-end">
                        <Botao 
                            className='mb-4'
                            cor="green"
                            onClick={newClient}
                        >Novo CLiente</Botao>
                    </div>
                    <Tabela 
                        clientes={clientes} 
                        clientSelect={selectClient}
                        clientDelete={deleteClient}
                    />
                </>
            ) : (
                <Formulario 
                    client={cliente} 
                    cancelado={
                        () => setVisivel('tabela')
                    }
                    clientChange={saveClient}
                />
            )}
        </Layout>
    </div>
  )
}
