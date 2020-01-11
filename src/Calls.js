const firebaseSampleData = [
    {
        info: {
            name: 'Demons',
            artist: 'Imagine Dragons'
        },
        lat: 34.42,
        lng: -119.8
    },
    {
        info: {
            name: 'Flemonds',
            artist: 'Lemon Rabbits'
        },
        lat: 34.43,
        lng: -119.85
    },
]

const getData = ( callback ) => {
    // where to implement firebase call
    callback(firebaseSampleData);
}
const addData = () => {
    return firebaseSampleData;
}

export default {
    get: getData,
    add: addData
}