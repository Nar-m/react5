import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        user: JSON.parse(localStorage.getItem('uservalue')) || {
            username: "",
            email: "",
            password: "",
            tel: "",
            autuser: false
        },
        error: {
            usererror: "",
            emailerror: "",
            passworderror: "",
            phonerror: "",
        }
    },
    reducers: {
        Loginform: (state, action) => {
            const userid = action.payload.value
            const phonnumber = action.payload.phonenumber
            const emailvalidation = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/i.test(userid.email)
            const passvalidation = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(userid.password)
            const phonevalidation = /^\d{10}$/
            state.user.tel = phonnumber
            state.user = userid
            if (userid.username === "") {
                state.error.usererror = 'Username is not empty'
                state.user.autuser = false
            }
            if (!emailvalidation) {
                state.error.emailerror = 'Not email error try again'
                state.user.autuser = false
            }
            if (!passvalidation) {
                state.error.passworderror = 'not Password password is {a, Z, 1, [!@#$%&]} simvol'
                state.user.autuser = false
            }
             if (!phonevalidation.test(phonnumber)) {
                state.error.phonerror = 'Not telphone try agayn'
            }
            else {
                state.user.autuser = true
                state.error = {
                    usererror: "",
                    emailerror: "",
                    passworderror: "",
                    phonerror: "",
                }
                localStorage.setItem('uservalue', JSON.stringify(userid))
            }
        },
        Logaout: (state, action) => {
            state.user = {
                username: "",
                email: "",
                password: "",
                tel: "",
                autuser: false
            }
            localStorage.clear()
        }
    }

})

export const { Loginform, Logaout } = LoginSlice.actions
export default LoginSlice.reducer