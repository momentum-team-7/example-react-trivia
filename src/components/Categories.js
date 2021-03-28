import 'tachyons'
import '../App.css'

const Categories = ({ categories, setSelectedCategory }) => {
  return (
    <main className="categories ph3 mt4 cf pa2 flex flex-wrap">
      {categories.map((category) => {
        return (
          <div className="category " key={category.id}>
            <button
              className="f6 link hover-bg-light-pink hover-dark-pink b ba bg-dark-gray ph3 pv2 dib white square"
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </button>
          </div>
        )
      })}
    </main>
  )
}

export default Categories
