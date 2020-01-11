import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
    let db = firebase.firestore();
    // where to implement firebase call 
    let query = db.collection('songs');
    let newData = [];
    query.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            newData = [...newData, {...change.doc.data(), id: change.doc.id}];
            callback(newData)
        })
    })
}
const addData = () => {
    return firebaseSampleData;
}

export default {
    get: getData,
    add: addData
}