import ListProducts from "../components/products"

const Products = () => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListProducts />
      </div>
    </main>
  )
}

export default Products