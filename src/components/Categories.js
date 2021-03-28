import 'tachyons'

const Categories = ({ categories, setSelectedCategory }) => {
  return (
    <div className="categories ph3 mt4">
      {categories.map((category) => {
        return (
          <div className="category" key={category.id}>
            <button
              className="f6 link dim ba ph3 pv2 mb2 dib black"
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Categories
