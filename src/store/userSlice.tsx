import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    idx: string;
    loginId: string;
    role: string;
    userName: string;
    exp: number;
}

interface UserState {
    token: string | null;
    user: {
        idx: string;
        loginId: string;
        role: string;
        userName: string;
    } | null;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    token: null,
    user: null,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | null>) => {
            const newToken = action.payload;
            state.token = newToken;

            if (newToken) {
                const userInfo = extractUserInfoFromToken(newToken);
                if (userInfo) {
                    state.user = userInfo;
                    state.isLoggedIn = true;
                    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
                } else {
                    state.user = null;
                    state.isLoggedIn = false;
                }
            } else {
                state.token = null;
                state.user = null;
                state.isLoggedIn = false;
                sessionStorage.removeItem('userInfo');
            }
        },
        setUser: (state, action: PayloadAction<UserState['user']>) => {
            state.user = action.payload;
            if (action.payload) {
                sessionStorage.setItem('userInfo', JSON.stringify(action.payload));
            } else {
                console.error('userInfo is null or undefined');
            }
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.isLoggedIn = false;
            sessionStorage.removeItem('userInfo');
        },
    },
});

export const { setToken, setUser, logout } = userSlice.actions;

export default userSlice.reducer;

const extractUserInfoFromToken = (token: string): UserState['user'] | null => {
    try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedToken.exp < currentTime) {
            throw new Error('Token has expired');
        }

        return {
            idx: decodedToken.idx,
            loginId: decodedToken.loginId,
            role: decodedToken.role,
            userName: decodedToken.userName,
        };
    } catch (error) {
        console.error('Failed to decode token:', error);
        return null;
    }
};