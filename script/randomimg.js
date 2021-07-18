var imageURLs = [
    "img/droneicon1.png"
  , "img/droneicon2.png"
  , "img/droneicon3.png"
];
$('#droneicon').attr('src',imageURLs[Math.floor(Math.random() * imageURLs.length)]);
