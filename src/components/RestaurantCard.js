import { RES_LOGO } from "../utlis/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, sla, avgRating } = resData.info;

    return(
        <div className="res-card card">
            <img id = "res-logo" alt="res logo" 
            src={ RES_LOGO + cloudinaryImageId} />
            <p className="card-title"> { name } </p>
            <div className="card-text">
                <p> { cuisines.join(", ") } </p>
                <p> { sla.slaString } </p>
                <p> { avgRating } ⭐</p>
            </div>
        </div>
    );
}   


export default RestaurantCard;