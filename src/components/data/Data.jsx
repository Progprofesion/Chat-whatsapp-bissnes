import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dataSubmith from "../../hooks/dataSubmith";
import getMessage from "../../hooks/getMessage";
import { setMessage, setName, setVisibleChat } from "../../store/reducer/dataSlice";
import "./data.scss";

const Data = () => {

    const dispatch = useDispatch();

    const [id, setId] = useState("");
    const [token, setToken] = useState("");
    const [phone, setPhone] = useState("");
    // const [message, setMessage] = useState("");
    // const [visibleChat, setVisibleChat] = useState(false);

    const message = useSelector((state) => state.dataSlice.message)
    // console.log(message);
    const handleId = (event) => {
        setId(event.target.value)
    }

    const handleToken = (event) => {
        setToken(event.target.value)
    }

    const handlePhone = (event) => {
        setPhone(event.target.value)
    }

    const handleMessage = (event) => {
        setMessage(event.target.value)
    }

    const handleSubmit = () => {
        dataSubmith(id, token, phone, message);
        // setTimeout(() => {
        getMessage(id, token);
        // }, 2000) 

        // -5
    }

    const createChat = (e) => {
        dispatch(setName(e.target.value))
    }
    // console.log(visibleChat);


    return (
        <div className="dataTest">

            <div className="data">
                <img src="" alt="Аватар" className="data__avatar" />
                <input onChange={handleId} placeholder="idInstance" type="text" className="data__id" />
                <input onChange={handleToken} placeholder="apiTokenInstance" type="text" className="data__token" />
                <div className="data__createChat">
                    <button onClick={() => dispatch(setVisibleChat(true))} className="data__createChat">Создать чат</button>
                </div>
            </div>
            <div className="data__wrappPhone">
                <input onChange={(e) => dispatch(setName(e.target.value))} placeholder="Введите номер телефон" type="text" className="data__phone" />
            </div>
            {/* <div className="data__wrappPhone">
                <input onChange={handleMessage} placeholder="Текст сообщения" type="text" className="data__phone" />
            </div> */}
        </div>
    )
}

export default Data