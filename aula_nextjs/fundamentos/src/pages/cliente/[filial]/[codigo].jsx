import Layout from '../../../components/Layout'
import {useRouter} from 'next/router'
// import {useEffect} from 'react'
export default function ClientePorCodigo(){
    const router = useRouter()

    // useEffect(()=>{
    //     console.log(router.query.codigo)
    // }, [])

    return (
        <Layout titulo="Navegação Dinamica #01">
            <div>
                <span>|Filial = {router.query.filial} | Código = {router.query.codigo}|</span>
            </div>
        </Layout>
    )
}