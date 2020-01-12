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
let db;

const getData = ( callback ) => {
    // where to implement firebase call 
    db = firebase.firestore();
    let query = db.collection('songs');
    let newData = [];
    query.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
            newData = [...newData, {...change.doc.data(), id: change.doc.id}];
            callback(newData)
        })
    })
}
const addData = (data) => {
    db.collection("songs").add(data)
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

export default {
    get: getData,
    add: addData
}