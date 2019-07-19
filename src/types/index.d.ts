import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import rootReducer from '../store/';
// import { AppAction } from 'store/app-typings';

// export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// export type maybe<T> = T | undefined;

export type AppState = ReturnType<typeof rootReducer>;

export type Dispatch = ThunkDispatch<AppState, undefined, AppAction>;

export type GetState = () => AppState;

// export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

// export type KeyExists<Object, Key> = Key extends keyof Object ? string : never;
