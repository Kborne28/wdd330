//retrieve data from star wars api using JSON
function getJSON(url) {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //declare functions
  function getShips(url) {
      return getJSON(url);
  }

  function getPlanets(url) {
      return getJSON(url);
  }
  //view retrieved code
  function renderShipList(ships, shipListElement) {
      const list = shipListElement.children[1];
      list.innerHTML = "";
      //loop through the ships retrieved in the list
      ships.forEach(function(ship) {
          let listItem = document.createElement("tr");
          listItem.innerHTML = `
          <td><a href="${ship.url}">${ship.name}</a></td>
          <td>${ship.length}</td>
          <td>${ship.crew}</td>
          `;

          listItem.addEventListener("click", function (event) {
              event.preventDefault();
              getShipDetails(ship.url);
          });

          list.appendChild(listItem);
      });
  }

  function renderShipDetails(shipData) {
      console.log(shipData);
  }

  function showShips(url = "https://swapi.dev/api/starships/") {
      getShips(url).then(function (data) {
          console.log(data);
          const results = data.results;

          //get the list element 
          const shipListElement = document.getElementById("shiplist");
          renderShipList(results, shipListElement);

        
          //enable the next and prev buttons
          if (data.next) {
              const next = document.getElementById("next");
              next.ontouchend = () => {
                  showShips(data.next);
              };
          }
          if (data.previous) {
              const prev = document.getElementById("prev");

              prev.ontouchend = () => {
                  showShips(data.previous);
              };
          }
      });
  }

  function getShipDetails(url){
      getShips(url).then(function (data) {
          renderShipDetails(data);
      });
  }

  showShips();
      
  //javascript for retreiving planets
  function renderPlanetList(planet, planetListElement){
      const list = planetListElement.children[1];
      list.innerHTML = "";
      //loop through list
      planet.forEach(function (planet) {
          let listItem = document.createElement("tr");
          listItem.innerHTML = `
          <td><a href="${planet.url}">${planet.name}</a></td>
          <td>${planet.population}</td>
          <td>${planet.gravity}</td>
          `;

          listItem.addEventListener("click", function (event) {
              event.preventDefault();
              getPlanetDetails(planet.url);
          });

          list.appendChild(listItem);
      });
  }

  function renderPlanetDetails(planetData) {
      console.log(planet);
  }
  
  function showPlanet(url = "https://swapi.dev/api/planets/1/"){
      getPlanets(url).then(function(data) {
          console.log(data);
          const results = data.results;

          const planetListElement = document.getElementById("planetlist");
          renderPlanetList(results, planetListElement);

          if (data.next) {
              const next = document.getElementById("next");
              next.ontouchend = () => {
                  showPlanet(data.next);
              };
          }
          if (data.previous){
              const prev = document.getElementById("prev");

              prev.ontouchend = () => {
                  showPlanet(data.previous);
              };
          }
      });
  }

  function getPlanetDetails(url){
      getPlanets(url).then(function (data) {
          renderPlanetDetails(data);
      });
  }
  showPlanet();