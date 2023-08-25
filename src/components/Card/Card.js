import { useState } from "react";
import styles from "./Card.module.scss";

function Card({ imageUrl, price, name, id, onChangeAddToCart, onAddToFavorites, favorited = false }) {
    const [btnChecked, setbtnChecked] = useState(false);
    const [btnLiked, setBtnLiked] = useState(favorited);

    const onChangeBtnLiked = () => setBtnLiked((prev) => !prev);
    const onChangeBtnChecked = () => setbtnChecked((prev) => !prev);

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img
                    onClick={() => {
                        onAddToFavorites({ imageUrl, price, name });
                        onChangeBtnLiked();
                    }}
                    src={!btnLiked ? "/img/heart-unliked.svg" : "/img/heart-liked.svg"}
                    alt="unLiked"
                />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{price} руб.</b>
                </div>
                <img
                    onClick={() => {
                        onChangeBtnChecked();
                        onChangeAddToCart({ imageUrl, price, name, id });
                    }}
                    className="cu-p"
                    width={30}
                    height={30}
                    src={btnChecked ? "/img/button-checked.svg" : "/img/button-plus.svg"}
                    alt="Plus"
                />
            </div>
        </div>
    );
}

export default Card;
