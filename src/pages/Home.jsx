import Card from '../components/Card/Card'

export default function Home({ items, onChangeAddToCart, addToCart, onChangeSearchValue, searchValue, onAddToFavorites, isReady }) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>{!searchValue ? 'Все кроссовки' : 'Поиск по запросу   Все кроссовки'}</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search" />
                    <input
                        onChange={(e) => onChangeSearchValue(e)}
                        type="text"
                        placeholder="Поиск..."
                    />
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {isReady ? "Идет загрузка" : items
                    .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item) => (
                        <Card onAddToFavorites={onAddToFavorites} key={item.id} {...item} onChangeAddToCart={onChangeAddToCart} addToCart={addToCart} />
                    ))}
            </div>
        </div>
    )
}