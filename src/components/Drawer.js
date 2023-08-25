function Drawer({ openCart, onCloseDrawer, itemCarts, onChangeRemoveFromCart }) {
    return (
        <div className="overlay" style={openCart ? { display: "block" } : { display: "none" }}>
            <div className="drawer d-flex flex-column">
                <h2 className="mb-20 d-flex justify-between">
                    Корзина
                    <img onClick={onCloseDrawer} className="removeBtn cu-p" src="/img/button-remove.svg" alt="Remove" />
                </h2>
                {itemCarts.length > 0 ? (
                    <div className="items">
                        {itemCarts.map((obj,index) => (
                            <div key={index} className="cartItem d-flex align-center mb-20">
                                <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>
                                <div className="mr-20 flex">
                                    <p className="mb-5">{obj.name}</p>
                                    <b>{obj.price} руб.</b>
                                </div>
                                <img
                                    onClick={() => onChangeRemoveFromCart(obj.id)}
                                    className="removeBtn"
                                    src="/img/button-remove.svg"
                                    alt="Remove"
                                />
                            </div>
                        ))}
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>21 498 руб. </b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>1074 руб. </b>
                                </li>
                            </ul>
                            <button>Оформить заказ</button>
                        </div>
                    </div>
                ) : (
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width={120} height={120} src="/img/korzina.png" alt="Korzina" />
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button className="greenButton">Вернуться назад</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Drawer;
