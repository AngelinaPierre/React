import { useState } from "react";

export default function useTabelaOuForm() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const showTable = () => setVisivel('tabela')
    const showForm = () => setVisivel('form')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        showTable,
        showForm,
    }
}