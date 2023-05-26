
import { useDispatch } from 'react-redux';
import { setActors } from '../store/reducer/dataSlice';
import axios from "axios";

const deleteData = (id, token, receiptId) => {
    axios.get(`https://api.green-api.com/waInstance${id}/deleteNotification/${token}/${receiptId}`)
        .then(function (response) {
            // dispatch(setActors(response.data));
            console.log(response);
        })
        .catch(function (error) {
            // console.log(error);
        });

}

export default deleteData