import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setActors } from '../store/reducer/dataSlice';
import axios from "axios";


const dataSubmith = (id, token, phone, message) => {

    axios.post(`https://api.green-api.com/waInstance${id}/sendMessage/${token}`, {
        "chatId": `${phone}@c.us`,
        "message": `${message}`
    })
        .then(function (response) {
            // dispatch(setActors(response.data));
            // console.log(response);
            // console.log(response);
        })
        .catch(function (error) {
            // console.log(error);
        });
}

export default dataSubmith