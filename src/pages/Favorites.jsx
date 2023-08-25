import Card from "../components/Card/Card";
import { AppContext } from "../context";
import { useContext } from "react";


export default function Favorites({ onAddToFavorites, onChangeAddToCart, addToCart }) {
    const { favorites } = useContext(AppContext)
    return (
        <>
            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>Мои закладки</h1>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {favorites.map((item, idx) => (
                    <Card favorited={true} onAddToFavorites={onAddToFavorites} key={idx} {...item} onChangeAddToCart={onChangeAddToCart} addToCart={addToCart} />
                ))}
            </div>
        </>
    )
}