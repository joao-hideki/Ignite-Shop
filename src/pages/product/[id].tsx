import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { useRouter } from "next/router"

export default function Product() {
    const {query} = useRouter()

    return(
        <ProductContainer>
          <ImageContainer>
            imagem
          </ImageContainer>
          <ProductDetails>
            <h1>Camiseta X</h1>
            <span>R$ 79,90</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque laboriosam dolores inventore deleniti ipsa, vitae ratione accusamus odio tempore itaque voluptatibus velit quasi sint, animi a nesciunt, maiores consequatur.</p>
            <button>Comprar agora</button>
          </ProductDetails>
        </ProductContainer>
    )
}