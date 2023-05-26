import React from 'react'

const MainPage = () => {
    return (
        <>
            <div className="data__wrappPhone">
                <input onChange={handlePhone} placeholder="Введите номер телефон" type="text" className="data__phone" />
            </div>
            <div className="data__wrappPhone">
                <input onChange={handleMessage} placeholder="Текст сообщения" type="text" className="data__phone" />
            </div>
            <div className="data__wrappPhone">
                <textarea name="" id="" cols="30" rows="10" className="data__phone"></textarea>
            </div>
        </>
    )
}

export default MainPage