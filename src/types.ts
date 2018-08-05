export type A0 = () => void;

export type A1<T> = (b: T) => void;

export type A2<T, U> = (b: T, c: U) => void;

export type F0<T> = () => T;

export type F1<T, U> = (b: T) => U;

export type F2<T, U, V> = (b: T, c: U) => V;

export type View = HTMLElement;

export type Either<T> = T | F0<T>;

export const ENTER_KEY = 13;

export const ESCAPE_KEY = 27;

export const notNullOrWhiteSpace = (s: string | null): s is string => !!s && s.trim().length > 0;
