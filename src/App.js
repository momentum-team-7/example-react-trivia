import Categories from './components/Categories'
import Questions from './components/Questions'
import { useEffect, useState } from 'react'
import { getCategoryList } from './ajaxRequests'

const App = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const categories = getCategoryList()
    setCategories(categories)
    // getCategoryList().then((data) => setCategories(data))
  }, [])

  return (
    <main>
      <h1>Trivia</h1>
      {selectedCategory ? (
        <Questions selectedCategory={selectedCategory} />
      ) : (
        <Categories
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
      )}
    </main>
  )
}

export default App
