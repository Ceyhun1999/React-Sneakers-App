import {  useEffect, useState } from "react";

import Router from "./Routes/Router";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

import axios from "axios";
import { AppContext } from "./context";


function App() {
    const [openCart, setOpenCart] = useState(false);
    const [itemCarts, setItemCarts] = useState([]);
    const [items, setItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [isReady, setIsReady] = useState(true);

    const onShowDrawer = () => setOpenCart(true);
    const onCloseDrawer = () => setOpenCart(false);
    const onChangeSearchValue = (e) => setSearchValue(e.target.value);

    const onChangeAddToCart = (obj) => {
        try {
            if (itemCarts.find((item) => +item.id === +obj.id)) {
                setItemCarts((prev) => prev.filter((item) => +item.id !== +obj.id));
                axios.delete("https://64dc8522e64a8525a0f69fc5.mockapi.io/cart", obj);
            } else {
                axios.post("https://64dc8522e64a8525a0f69fc5.mockapi.io/cart", obj);
                setItemCarts((prev) => [...prev, obj]);
            }
        } catch (error) {
            alert(error);
        }
    };

    const onChangeRemoveFromCart = (id) => {
        axios.delete(`https://64dc8522e64a8525a0f69fc5.mockapi.io/cart/${id}`);
        setItemCarts(itemCarts.filter((item) => item.id !== id));
    };

    const onAddToFavorites = async (obj) => {
        if (favorites.find((item) => item.id === obj.id)) {
            setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
            axios.delete(`https://64dddf7c825d19d9bfb1a406.mockapi.io/favorite/${obj.id}`);
        } else {
            const { data } = await axios.post("https://64dddf7c825d19d9bfb1a406.mockapi.io/favorite", obj);
            setFavorites((prev) => [...prev, data]);
        }
    };

    useEffect(() => {
        async function fetchData() {
            const cartResponse = await axios.get("https://64dc8522e64a8525a0f69fc5.mockapi.io/cart");
            const favoritesResponse = await axios.get("https://64dddf7c825d19d9bfb1a406.mockapi.io/favorite");
            const itemsResponse = await axios.get("https://64dc8522e64a8525a0f69fc5.mockapi.io/items");
            setItemCarts(cartResponse.data);
            setFavorites(favoritesResponse.data);
            setItems(itemsResponse.data);
            setIsReady(false);
        }

        fetchData();
    }, []);

    return (
        <div className="wrapper clear">
            <AppContext.Provider value={{ items, itemCarts, favorites }}>
                <Header onShowDrawer={onShowDrawer} />
                <Drawer
                    openCart={openCart}
                    onCloseDrawer={onCloseDrawer}
                    itemCarts={itemCarts}
                    onChangeRemoveFromCart={onChangeRemoveFromCart}
                />
                <main>
                    <Router
                        isReady={isReady}
                        onAddToFavorites={onAddToFavorites}
                        items={items}
                        onChangeAddToCart={onChangeAddToCart}
                        searchValue={searchValue}
                        onChangeSearchValue={onChangeSearchValue}
                    />
                </main>
            </AppContext.Provider>
        </div>
    );
}

export default App;
