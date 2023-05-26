import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessage, setSubmith } from "../../store/reducer/dataSlice";
import "./windowChat.scss";


const WindowChat = ({ messaged, enterText, menu }) => {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.dataSlice.name)
    const message = useSelector((state) => state.dataSlice.message)
    const submithddd = useSelector((state) => state.dataSlice.submith)

    const [currentMessage, setCurrentMessage] = useState("");
    const [arr, setArr] = useState([]);
    // console.log(message);
    // setCurrentMessage(message)


    // let arr = [];
    const submith = () => {

        dispatch(setSubmith(true))
        setCurrentMessage(message);
        setArr([...arr, currentMessage]);
        console.log(arr);
    }

    return (
        <div className="windowChat">
            <div className="windowChat__header">
                <div className="windowChat__name">{name}</div>
            </div>

            <div className="windowChat__window">{submith ? arr : null}</div>
            <div className="windowChat__enterData">
                <img src="" alt="emojy" className="windowChat__emojy" />
                <input value={message} onChange={(e) => dispatch(setMessage(e.target.value))} type="text" className="windowChat__enterText" />
                <button onClick={submith} className="windowChat__submith">Отправить</button>
            </div>
        </div>
    )
}

export default WindowChat