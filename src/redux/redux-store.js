import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMidlewarenk from 'redux-thunk';
import {AdsReducer} from "./AdsReducer";

let reducers = combineReducers({
    Ads: AdsReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMidlewarenk)))
window.store = store

export default store


// import logo from './logo.svg';
// import s from  './App.module.scss';
// import {useEffect, useState} from "react";
// import {connect} from "react-redux";
// import {compose} from "redux";
// import {getCards, getImgForCards} from "./redux/AdsReducer";
//
// function App(props) {
//     useEffect(() => {
//         async function getCards() {
//             await props.getCards()
//             await props.getImgForCards()
//         }
//     }, [])
//
//     let [filterInputValue, setFilterInputValue] = useState("")
//     let [cardsField, setCardsField] = useState(props.cardsData.map((el)=><Card {...el}/>))
//
//     useEffect(()=>{
//         props.getImgForCards()
//     },[props.cardsData.length])
//     useEffect(()=>{
//         setCardsField(props.cardsData.map((el)=><Card {...el}/>))
//     },[props.imgUrlData.length])
//     // useEffect(()=>{
//     //     setCardsField(props.cardsData.filter(el=>{if(el.title.includes(filterInputValue)){return el}}).map((el)=><Card {...el}/>))
//     // },[filterInputValue.length])
//
//     return (
//         <div className={s.App}>
//             <h1 className={s.mainTitle}>Our Latest Developments</h1>
//             <div className={s.filterBox}>
//                 <span className={s.filterBox__title}>Filter</span>
//                 <input className={s.filterBox__input} onInput={(e)=>{
//                     if(e.currentTarget.value.length>=3) {
//                         setFilterInputValue(e.currentTarget.value)
//                     }
//                 }} type="text"/>
//             </div>
//             <div className={s.cardsBox}>
//                 {cardsField}
//             </div>
//             <button className={s.seeMoreBtn}>See more</button>
//         </div>
//     );
// }
//
// let Card = (props)=>{
//     return(
//         <div className={s.card}>
//             <div className={s.card__img}><img src={`${props.img}`} alt=""/></div>
//             <div className={s.card__info}>
//                 <div className={s.card__title}>{props.title}</div>
//                 <div className={s.card__address}>{props.address}</div>
//                 <div className={s.card__priceFrom}>{props.price}</div>
//                 <div className={s.card__sharedOwnership}>Shared Ownership Available</div>
//                 <div className={s.card__sharedOwnership}>{props.type}</div>
//             </div>
//         </div>
//     )
// }
// let mapStateToProps = state=>{
//     return{
//         cardsData: state.Ads.cardsData,
//         imgUrlData: state.Ads.imgUrlData
//     }
// }
// export default  compose(
//     connect(mapStateToProps,{getImgForCards, getCards})
// )(App);
