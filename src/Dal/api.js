import * as axios from "axios";


export const Api = {
    getCardsData(){
        return  axios.get("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
    },
    getImg(page){
        return axios.get(`https://api.unsplash.com/search/photos?per_page=30&page=${page}&query=house&client_id=RtqGDPtKbP8aX0Ujn_cR_Vp8EBGXaT0v1zaazNr8YF4`)
    }
}





