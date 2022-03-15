import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
    const clientList = [
        new Cliente('Ana',34,'1'),
        new Cliente('Bia',45,'2'),
        new Cliente('Clara',65,'3'),
        new Cliente('Giulia',12,'4'),
    ]
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    function selectClient(cliente: Cliente){
        console.log(cliente.nome)
        setCliente(cliente)
        setVisivel('form')
    }
    function deleteClient(cliente: Cliente){
        console.log(`Excluindo...${cliente.nome}`)
    }
    function saveClient(client: Cliente){
        console.log(client)
        setVisivel('tabela')
    }
    function newClient(cliente:Cliente){
        console.log(cliente)
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
                        clientes={clientList} 
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
