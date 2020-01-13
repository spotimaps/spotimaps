import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Swal from 'sweetalert2';

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
    // fetch(`https://d223092c.ngrok.io/sentiment/${data.info.name}/${data.name.artist}`).then(res => {
    //     return res.text();
    // }).then(res => {
        // data.info.color = res;
        db.collection("songs").add(data)
        .then(function() {
            console.log("Song Added!", data); // add swal here
            Swal.fire({
                icon: 'success',
                title: 'Song Added!',
                text: 'Thanks for joining Spotimaps. You have added ' + 
                `${data.info.name} by ${data.info.artist}`,
            });
        })
        .catch(function(error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something seems to have gone wrong :(',
            });
            console.error("Error writing document: ", error);
        });
    // }).catch(err => {
    //     db.collection("songs").add(data)
    //     .then(function() {
    //         console.log("Song Added!", data); // add swal here
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Song Added!',
    //             text: 'Thanks for joining Spotimaps.',
    //         });
    //     })
    //     .catch(function(error) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Error',
    //             text: 'Something seems to have gone wrong :(',
    //         });
    //         console.error("Error writing document: ", error);
    //     });
    // });
    
}

export default {
    get: getData,
    add: addData
}