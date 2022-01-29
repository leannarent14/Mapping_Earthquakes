// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
    console.log(city)
   });
  
  // Loop through the cities array and create one marker for each city.
  cities.forEach(function(city) {
    console.log(city)
    L.marker(city.location).addTo(map);
  });