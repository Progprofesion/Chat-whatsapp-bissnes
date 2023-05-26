import { useSelector } from "react-redux";
import Data from "../data/Data";
import ChatList from "../chatList/ChatList";
import WindowChat from "../windowChat/WindowChat";
import './app.scss'

const App = () => {
    const name = useSelector(state => state.dataSlice.name);
    const messages = useSelector((state) => state.dataSlice.message)
    const visibleChat = useSelector((state) => state.dataSlice.visibleChat)
    // console.log(name);
    return (
        <main className='app'>
            <div className="container">
                <Data />
                {/* <ChatList /> */}
                {visibleChat ? <WindowChat /> : null}
            </div>
        </main>
    )
}

export default App