import { useState } from "react"
import Aside from "./components/Aside"
import Header from "./components/Header"
import MainDefault from "./components/MainDefault"
import MainSearch from "./components/MainSearch"
import data from './services/data'

const { customers } = data

function App() {
  const [search, setSearch] = useState('')

  const searchResults: Array<Object> = customers.filter(item => item.name === search)

  return (
    <>
      <Header setSearch={setSearch} />
      <Aside />
      <main>
        {search ?
          <MainSearch searchResults={searchResults} />
          :
          <MainDefault />
        }
      </main>
    </>
  )
}

export default App
