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
  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        <Layout titulo="Cadastro Simples">
            <Tabela clientes={clientList}></Tabela>
        </Layout>
    </div>
  )
}
