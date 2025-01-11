// store.ts
import { createStore } from 'redux';
import authReducer from './reducer';

const store = createStore(authReducer);

export type RootState = ReturnType<typeof store.getState>; // 상태 타입 추론

export default store;
