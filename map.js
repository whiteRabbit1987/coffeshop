function initMap() {

  const map = new google.maps.Map(document.getElementById("map"), {

    center: { lat: -34.397, lng: 150.644 },

    zoom: 8,

  });


  const icon = {

    url: "img/map.webp", // replace with the path to your icon file

    scaledSize: new google.maps.Size(50, 50), // set the size of the icon

  };


  const marker = new google.maps.Marker({

    position: { lat: -34.397, lng: 150.644 },

    map: map,

    title: "Hello World!",

    icon: icon,

  });

}