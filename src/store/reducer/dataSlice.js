import { createSlice } from '@reduxjs/toolkit';

const initialState = ({
    id: "",
    token: "",
    phone: "",
    message: "",
    currentMessage: "",
    name: "",
    visibleChat: false,
    submith: false,
})

const data = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setPhone: (state, action) => {
            state.phone = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        },
        setCurrentMessage: (state, action) => {
            state.currentMessage = action.payload
        },
        setVisibleChat: (state, action) => {
            state.visibleChat = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setSubmith: (state, action) => {
            state.submith = action.payload
            state.message = ""
        }

    }
});

export const {
    setId,
    setToken,
    setPhone,
    setMessage,
    setCurrentMessage,
    setVisibleChat,
    setName,
    setSubmith
} = data.actions;


export default data.reducer;