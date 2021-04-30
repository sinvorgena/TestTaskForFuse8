import {Api} from "../Dal/api";

let setCards = "SET_CARDS"
let setImgForCards = "SET_IMG_FOR_CARDS"


let AdsDefaulState = {
    cardsData: [],
    imgUrlData: [],
}

export const AdsReducer = (state = AdsDefaulState, action) => {
    let copyState;
    switch (action.type) {
        case setCards:
            copyState = {...state, cardsData: [...action.cardsData]}
            copyState.cardsData.forEach((el) => {
                el.img = ""
            })
            return copyState
        case setImgForCards:
            copyState = {...state}
            action.imgUrlData = action.imgUrlData.slice(0, (copyState.cardsData.length))
            copyState.imgUrlData = action.imgUrlData
            for (let i = 0; i < copyState.cardsData.length; i++) {
                copyState.cardsData[i].img = action.imgUrlData[i].urls.small
            }
            return copyState
    }
    return state
}

export let setCardsData = (cardsData) => ({
    type: setCards,
    cardsData
})
export let setImgForCardsSucsess = (imgUrlData) => ({
    type: setImgForCards,
    imgUrlData
})
export let getCards = () => async (dispatch) => {
    let response = await Api.getCardsData()
    dispatch(setCardsData(response.data))
}

export let getImgForCards = (count) => async (dispatch) => {
    let response = await Api.getImg(1)
    dispatch(setImgForCardsSucsess(response.data.results))


}
window.AdsDefaulState = AdsDefaulState