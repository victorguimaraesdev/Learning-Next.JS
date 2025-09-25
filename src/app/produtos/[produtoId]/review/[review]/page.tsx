
interface ReviewProps {
    params: {
        review: number
        produtoId: number
    }
}

export default function Review ({params}:ReviewProps) {
    return(
        <div>
            <h1>Review: {params.review} </h1>
            <h1>Produto: {params.produtoId}</h1>
        </div>
    )
}