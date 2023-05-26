
import { useDispatch } from 'react-redux';
// import { setActors } from '../store/reducer/dataSlice';
import axios from "axios";
import { setMessage } from "../hooks/getMessage";

const getMessage = (id, token) => {

    axios.get(`https://api.green-api.com/waInstance${id}/receiveNotification/${token}`)
        .then(function (response) {
            console.log(response.data.body);
            // if(response.data.body.messageData)
            // dispatch(setMessage)

            axios.delete(`https://api.green-api.com/waInstance${id}/deleteNotification/${token}/${response.data.receiptId}`)
                .then(function (response) {
                    // console.log(response.data.result);
                })
                .catch(function (error) {
                    // console.log(error);
                });


        })
        .catch(function (error) {
            // console.log(error);
        });
}

export default getMessage