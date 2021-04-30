import s from './App.module.scss';
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getCards, getImgForCards} from "./redux/AdsReducer";
import {NavLink} from "react-router-dom";


function App(props) {
    let [filterInputValue, setFilterInputValue] = useState("")
    let [cardsField, setCardsField] = useState()
    useEffect(() => {
        async function getData() {
            await props.getCards()
            await props.getImgForCards()
        }
        getData()
    }, [])
    useEffect(() => {
        setCardsField(props.cardsData.filter(el => {
            if (el.title.toLowerCase().includes(filterInputValue.toLowerCase())) {
                return el
            }
        }).map((el) => <Card {...el}/>))
    }, [props.imgUrlData.length, filterInputValue])


    return (
        <div className={s.App}>
            <h1 className={s.mainTitle}>Our Latest Developments</h1>
            <div className={s.filterBox}>
                <span className={s.filterBox__title}>Filter</span>
                <input className={s.filterBox__input} onChange={(e) => {
                    if (e.currentTarget.value.length >= 3 || e.currentTarget.value.length == 0) {
                        setFilterInputValue(e.currentTarget.value)
                    }
                }} type="text"/>
            </div>
            <div className={s.cardsBox}>
                {cardsField}
            </div>
            <button className={s.seeMoreBtn}><span>See more</span></button>
        </div>
    );
}

let Card = (props) => {
    return (
        <NavLink to={`/details/${props.id}`}>
            <div className={s.card}>
                <div className={s.card__img}>
                    <img src={`${props.img}`} alt=""/>
                    <span className={props.type == "IndependentLiving"
                        ? `${s.card__typeOfHouse} 
                    ${s.card__typeOfHouse_Indepent}`
                        : `${s.card__typeOfHouse} 
                    ${s.card__typeOfHouse_Restaurant}`}>
                        {props.type == "IndependentLiving"
                            ? "Independent living"
                            : "Restaurant & Support available"}
                    </span>
                </div>
                <div className={s.card__info}>
                    <div className={s.card__title}>{props.title}</div>
                    <div className={s.card__address}>{props.address}</div>
                    <div className={s.card__priceFrom}>
                        New Properties for Sale from
                        <span>£{props.price}</span>
                    </div>
                    <div className={s.card__sharedOwnership}>
                        Shared Ownership Available
                    </div>
                </div>
            </div>
        </NavLink>
    )
}
let mapStateToProps = state => {
    return {
        cardsData: state.Ads.cardsData,
        imgUrlData: state.Ads.imgUrlData
    }
}
export default compose(
    connect(mapStateToProps, {getImgForCards, getCards})
)(App);
