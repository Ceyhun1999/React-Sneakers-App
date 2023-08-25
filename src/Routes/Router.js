import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";

import React from "react";

export default function Router({
    onAddToFavorites,
    items,
    onChangeAddToCart,
    searchValue,
    onChangeSearchValue,
    favorites,
    isReady,
}) {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            isReady={isReady}
                            onAddToFavorites={onAddToFavorites}
                            items={items}
                            onChangeAddToCart={onChangeAddToCart}
                            searchValue={searchValue}
                            onChangeSearchValue={onChangeSearchValue}
                        />
                    }
                />
                <Route
                    path="/favorites"
                    element={
                        <Favorites
                            favorites={favorites}
                            onAddToFavorites={onAddToFavorites}
                            onChangeAddToCart={onChangeAddToCart}
                        />
                    }
                />
            </Routes>
        </div>
    );
}
