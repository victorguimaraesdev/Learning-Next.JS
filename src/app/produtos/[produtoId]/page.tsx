
interface ProdutoProps {
    params: {
        produtoId: string
    }
}

export default function Produto({params}: ProdutoProps) {
    return(
        <div>
            <h1>Informações do produto {params.produtoId}?</h1>
        </div>

    )
}