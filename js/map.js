function initMap(latitude, longitude, polygone) { // Créer l'objet "map" et l'insèrer dans l'élément HTML qui a l'ID "map" 

    // Déclarations des variables

    var carte = L.map('macarte').setView([latitude, longitude], 7), // Pour la carte
        influence = L.circle([latitude, longitude], 100000, { // Pour le cercle de 100km autour du marker
            'color': '#FF7F00', // Couleur du cercle
            'fill': false, // Non remplit
        }).addTo(carte); // On l'ajoute a la carte

    // Pour le layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(carte); // On l'ajoute a la carte

    // Pour les contours

    let dataPolygon = [];
    let point = [];
    //en fait il me semble juste que les latitude longitude sont inversées
    polygone[0].forEach(function(item, index) {
        point[0] = item[1];
        point[1] = item[0];
        dataPolygon.push(L.LatLng(point[0], point[1]));
        //dataPolygon.push((item[1], item[0]));
    });
    //L.polygon(dataPolygon).addTo(carte);
    var polygon = L.polygon(dataPolygon, { color: 'red' }).addTo(carte);

    // Pour le marqueur
    L.marker([latitude, longitude]).addTo(carte) // Pour le marqueur
        .bindPopup("[" + latitude + "] [" + longitude + "]") // Il écrit dans un popup les coordonnées
        .openPopup(); // Puis il ouvre le popup

}