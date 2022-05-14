import { useEffect, useState } from "react";
import { CardProduct } from "../Components/CardProduct";
import { Header } from "../Components/Header";
import { getProducts, getUserByUsername } from "../Helpers/fetchApi";
import '../Styles/Home.css'


export function Home() {
  const [products, setProducts] = useState([]);

  async function listProducts() {
    const localStorageItem = JSON.parse(localStorage.getItem('user'));
    const data = await getProducts(localStorageItem.token);
    setProducts(data);
  }

  useEffect(() => {
    listProducts();
  }, []);



  return (
    <div className="home-container">
      <Header />
      <main className="home-contents">
        { products.length > 0 && products.map((product) => {
          return (
            <CardProduct 
              key={product.id}
              image={product.imagem}
              name={product.nome}
              moedas={product.preco}
              pontos={product.pontos}
              user={product.user}
            />
          )
        })}
      </main>
    </div>
  )
}