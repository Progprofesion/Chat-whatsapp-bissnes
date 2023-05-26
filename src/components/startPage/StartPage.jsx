import React from 'react'

const StartPage = () => {
    return (
        <div className="dataTest">

            <div className="data">
                <img src="" alt="Аватар" className="data__avatar" />
                <input onChange={handleId} placeholder="idInstance" type="text" className="data__id" />
                <input onChange={handleToken} placeholder="apiTokenInstance" type="text" className="data__token" />
                <div className="data__createChat">
                    <button onClick={() => { handleSubmit(); setVisibleChat(true); }} className="data__createChat">Создать чат</button>
                </div>
            </div>
        </div>
    )
}

export default StartPage