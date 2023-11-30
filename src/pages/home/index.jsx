import { useRef, useState } from "react"
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton } from "./styles"

function App() {
  const [products, setProducts] = useState([])
  const inputRef = useRef()

  function addProduct() {
    setProducts([
      ...products,
      { id: v4(), name: inputRef.current.value }
    ])
  }

  function deleteProduct(id) {
    setProducts(products.filter(product => product.id !== id))
    inputRef.current.value = ""
  }

  return (
    <Container>
      <h1>Lista de compras</h1>
      <input placeholder="Liste aqui..." ref={inputRef} />
      <AddButton onClick={addProduct}>Adicionar</AddButton>
      {products.map(product => (
        <Product key={product.id}>
          <p>{product.name}</p>
          <TrashButton onClick={() => deleteProduct(product.id)}>🗑️</TrashButton>
        </Product>
      ))}
    </Container>
  )
}

export default App
