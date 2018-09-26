export const FETCH_DATA = 'fetch_data';

export const fetchData = () => {
    return {
        type: FETCH_DATA,
        payload: {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
    };
}