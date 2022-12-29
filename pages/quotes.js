import ListQuotes from "../components/quotes"

const Quotes = () => {
  return (
    <main className="h-full pb-16 overflow-y-auto">
      <div className="container grid px-6 pt-6 mx-auto">
        <ListQuotes />
      </div>
    </main>
  )
}

export default Quotes