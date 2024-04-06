let map;


function initMap() {

  const position = { lat: -34.397, lng: 150.644 };


  map = new google.maps.Map(document.getElementById("map"), {

    center: position,

    zoom: 8,

  });


  const marker = new google.maps.Marker({

    position: position,

    map: map,

    title: "Hello World!",

  });

}