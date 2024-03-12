// JavaScript Document
var db = firebase.apps[0].firestore();
var container = firebase.apps[0].storage().ref();

const txtUid = document.querySelector('#txtUid');
const txtPosic = document.querySelector('#txtPosic');
const txtSigno = document.querySelector('#txtSigno');
const txtRango = document.querySelector('#txtRango');
const txtArchi = document.querySelector('#txtArchi');
const btnSave = document.querySelector('#btnSave');
const txtElemento = document.querySelector('#txtElemento');
const txtAstro = document.querySelector('#txtAstro');
const txtPiedra = document.querySelector('#txtPiedra');

// Cargamos los datos al cargar la página
db.collection("datosZodiaco").doc(txtUid.value).get().then(function (doc) {
    txtPosic.value = doc.data().posic;
    txtSigno.value = doc.data().signo;
    txtRango.value = doc.data().rango;
    txtElemento.value = doc.data().elemen;
    txtAstro.value = doc.data().astro;
    txtPiedra.value = doc.data().piedra;
});

// Modificamos el evento de clic del botón btnLoad
btnSave.addEventListener('click', function () {
    // Actualizamos los datos en Firebase
    db.collection("datosZodiaco").doc(txtUid.value).update({
        posic: txtPosic.value,
        signo: txtSigno.value,
        rango: txtRango.value,
        elemen: txtElemento.value,
        astro: txtAstro.value,
        piedra: txtPiedra.value
    })
        .then(function () {
            alert("Document successfully updated!");
            // Puedes agregar aquí cualquier lógica adicional después de la actualización exitosa
        })
        .catch(function (error) {
            alert("Error updating document: ", error);
            // Puedes manejar errores aquí, por ejemplo, mostrar un mensaje al usuario
        });
});

