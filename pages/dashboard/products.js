import ListProducts from "../../components/products"
import DashboardLayout from "../../components/layouts/dashboard"

const Products = () => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListProducts />
      </div>
    </main>
  )
}

Products.Layout = DashboardLayout

export default Products