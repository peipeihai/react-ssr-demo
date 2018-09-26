export const FETCH_DATA = 'fetch_data';

export const fetchData = () => {
    return {
        type: FETCH_DATA,
        payload: {
            data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
        },
    };
}