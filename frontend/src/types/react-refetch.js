export type PromiseState<T> = {
    pending: boolean,
    fulfilled: boolean,
    rejected: boolean,
    value: T
};