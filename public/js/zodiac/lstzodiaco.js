var db = firebase.apps[0].firestore();

const tabla = document.querySelector('#tabla');

db.collection("datosZodiaco").orderBy('posic', 'asc').get().then(function(query){
    tabla.innerHTML="";
    var salida = "";
    query.forEach(function(doc){
        salida += '<a href="modificar.html?uid='+doc.id+'"> <div class="divAnuncio m-3">'
            salida += '<div class="imgBlock"><img src="' + doc.data().url +'" width="100%" /></div>'
            salida += '<div>'+ doc.data().signo + '<br/>'+ doc.data().rango + '<br/>' + doc.data().elemen + '<br/>' + doc.data().astro + '<br/>' + doc.data().piedra + '</div><br/>'
        salida += '</div> </a>'
    })
    tabla.innerHTML = salida;
})