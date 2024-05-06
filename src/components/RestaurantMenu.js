import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utlis/constants";
import AddToCartButton from './AddToCartButton';
import Cart from './Cart';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const params = useParams();
    const resId = params.resid;

    useEffect(() => {
        fetchMenu();
    }, []);

    const addToCart = (itemId, itemName, itemPrice) => {
        setCartItems(prevCartItems => [...prevCartItems, { id: itemId, name: itemName, price: itemPrice }]);
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== itemId));
    };

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    if (resInfo === null)
        return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu list-group m-5">
            <h1 className="m-1">{name}</h1>
            <h2 className="m-1">{cuisines.join(", ")} -- {costForTwoMessage}</h2>
            
            <table class="table table-striped">
                <ul className="table m-5 px-2">
                    {itemCards.map((item) => (
                        <li key={item.card.info.id} className="px-2">
                            {item.card.info.name} - 💲 Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                            <AddToCartButton
                                itemId={item.card.info.id}
                                itemName={item.card.info.name}
                                itemPrice={item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                addToCart={addToCart}
                                removeFromCart={removeFromCart}
                                isInCart={cartItems !== null && cartItems.some(cartItem => cartItem.id === item.card.info.id)}
                                
                            />
                        </li>
                    ))}
                </ul>
            </table>

            {cartItems !== null && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        </div>
    );
}

export default RestaurantMenu;
