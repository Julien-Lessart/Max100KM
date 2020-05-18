function initContour(latitude, longitude) {
    // Pour les contours des départements

    // Déclarations des variables
    let urlrequest = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=contours-geographiques-des-departements-2019&q=&facet=nom_dep0&facet=insee_dep&facet=insee_reg&facet=nom_reg&facet=region0&facet=nom_dep&geofilter.distance=";
    let urlrequestRes = latitude + "2%2C%2B" + longitude;
    urlrequest += urlrequestRes;


    // Requete Ajax
    $.ajax({
        type: "GET",
        url: urlrequest,
        success: onGetCommuneSuccess,
        error: onGetCommuneError
    });

    // Si succes
    function onGetCommuneSuccess(reponse, status) {
        let polygone = reponse.records[0].fields.geo_shape.coordinates[0]; // On prend la valeur des coordonnées du départements
        initMap(latitude, longitude, polygone); // Puis on appel initMap pour créer la carte
    }

    // Si echec
    function onGetCommuneError(status) {
        alert(JSON.stringify(status)); // On affiche l'echec
    }

}