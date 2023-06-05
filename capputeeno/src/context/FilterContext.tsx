import { createContext, useState } from "react"

enum filterCategory {
  'ALL',
  'SHIRT',
  'MUG'
}

const FilterContext = createContext({
  search: '',
  page: 0,
  category: filterCategory.ALL
})

export default function filterContext() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [category, setCategory] = useState(filterCategory.ALL)

  return (
    <FilterContext.Provider value={{search, page, category}}>

    </FilterContext.Provider>
  )
}