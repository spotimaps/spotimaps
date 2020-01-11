import Swal from 'sweetalert2';

const locationPermissionError = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to give location permissions!',
        footer: '<a href="https://support.google.com/chrome/answer/114662">Why do I have this issue?</a>'
    });
}


export {
    locationPermissionError
}