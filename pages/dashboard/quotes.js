import ListQuotes from "../../components/quotes"
import DashboardLayout from "../../components/layouts/dashboard"

const Quotes = () => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListQuotes />
      </div>
    </main>
  )
}

Quotes.Layout = DashboardLayout

export default Quotes