//get buttons by their elementsId, and add eventListeners

const startSearchBtn = document.getElementById("startSearchBtn");
startSearchBtn.addEventListener("click", function () {
  // console.log(currentPosition.nearestLocation.position);

  if (currentPosition.currentSearch == null) {
    alert("Please select a search Criteria");
  } else {
    transportationURL = getTransportationURL();

    fetch(transportationURL)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        getStepsToGetThere(data);
      })
      .catch((error) => alert("no route found with the given parameters"));
  }
});

function showRoutingSteps(transportationMethod) {
  if (transportationMethod == "public") {
    alert("Unable to show public transport routing on map");
    return;
  }

  let routingParameters = {
    routingMode: "fast",
    transportMode: `${transportationMethod}`,
    // The start point of the route:
    origin: `${currentPosition.lat},${currentPosition.lng}`,
    // The end point of the route:
    destination: `${currentPosition.nearestLocation.position.lat},${currentPosition.nearestLocation.position.lng}`,
    // Include the route shape in the response
    return: "polyline",
  };

  // Define a callback function to process the routing response:
  var onResult = function (result) {
    // ensure that at least one route was found
    if (result.routes.length) {
      result.routes[0].sections.forEach((section) => {
        // Create a linestring to use as a point source for the route line
        let linestring = H.geo.LineString.fromFlexiblePolyline(
          section.polyline
        );

        // Create a polyline to display the route:
        let routeLine = new H.map.Polyline(linestring, {
          style: { strokeColor: "blue", lineWidth: 3 },
        });

        // Create a marker for the start point:
        let startMarker = new H.map.Marker(section.departure.place.location);

        // Create a marker for the end point:
        let endMarker = new H.map.Marker(section.arrival.place.location);

        // Add the route polyline and the two markers to the map:
        map.addObjects([routeLine, startMarker, endMarker]);

        // Set the map's viewport to make the whole route visible:
        map
          .getViewModel()
          .setLookAtData({ bounds: routeLine.getBoundingBox() });
      });
    }
  };

  var router = platform.getRoutingService(null, 8);

  router.calculateRoute(routingParameters, onResult, function (error) {
    alert(error.message);
  });
}

function getTransportationURL() {
  let transportationMethods = document.getElementById("transportationMethod");
  let transportationMethod =
    transportationMethods.options[transportationMethods.selectedIndex].value;

  showRoutingSteps(transportationMethod);

  switch (transportationMethod) {
    case "car":
      return `https://route.ls.hereapi.com/routing/7.2/calculateroute.json?waypoint0=${currentPosition.lat}%2C${currentPosition.lng}&waypoint1=${currentPosition.nearestLocation.position.lat}%2C${currentPosition.nearestLocation.position.lng}&mode=fastest%3Bcar%3Btraffic%3Aenabled&departure=now&apiKey=${API_KEY}`;

    case "pedestrian":
      return `https://route.ls.hereapi.com/routing/7.2/calculateroute.json?waypoint0=${currentPosition.lat}%2C${currentPosition.lng}&waypoint1=${currentPosition.nearestLocation.position.lat}%2C${currentPosition.nearestLocation.position.lng}&mode=fastest%3Bpedestrian&apiKey=${API_KEY}`;

    case "public":
      return `https://route.ls.hereapi.com/routing/7.2/calculateroute.json?waypoint0=${currentPosition.lat}%2C${currentPosition.lng}&waypoint1=${currentPosition.nearestLocation.position.lat}%2C${currentPosition.nearestLocation.position.lng}&mode=fastest%3BpublicTransport&combineChange=true&apiKey=${API_KEY}`;
  }
}

function getStepsToGetThere(data) {
  let stepsToGetThere = document.getElementById("stepsToGetThereTextArea");
  // console.log(data.response.route[0].summary.text);
  let modifiedSummary = data.response.route[0].summary.text;
  modifiedSummary = modifiedSummary.replaceAll('<span class="length">', "");
  modifiedSummary = modifiedSummary.replaceAll("</span>", "");
  modifiedSummary = modifiedSummary.replaceAll('<span class="time">', "");
  modifiedSummary = modifiedSummary.replaceAll("</span>", "");
  stepsToGetThere.innerText = modifiedSummary;

  let maneuvers = data.response.route[0].leg[0].maneuver;
  // console.log (maneuvers);

  for (i = 0; i < maneuvers.length; i++) {
    let maneuver = maneuvers[i];
    let modifiedInstruction =
      "\n step " + (i + 1) + ": " + maneuver.instruction;
    modifiedInstruction = modifiedInstruction.replaceAll(
      '<span class="toward_street">',
      ""
    );
    modifiedInstruction = modifiedInstruction.replaceAll("</span>", "");
    modifiedInstruction = modifiedInstruction.replaceAll(
      '<span class="street">',
      ""
    );
    modifiedInstruction = modifiedInstruction.replaceAll(
      '<span class="distance-description">',
      ""
    );
    modifiedInstruction = modifiedInstruction.replaceAll(
      '<span class="length">',
      ""
    );
    modifiedInstruction = modifiedInstruction.replaceAll(
      '<span class="heading">',
      ""
    );
    modifiedInstruction = modifiedInstruction.replaceAll(
      '<span class="direction">',
      ""
    );
    modifiedInstruction = modifiedInstruction.replaceAll(
      '<span class="sign">',
      ""
    );
    modifiedInstruction = modifiedInstruction.replaceAll(
      '<span class="number">',
      ""
    );
    modifiedInstruction = modifiedInstruction.replaceAll(
      '<span class="exit">',
      ""
    );
    modifiedInstruction = modifiedInstruction.replaceAll(
      '<span class="next-street">',
      ""
    );

    stepsToGetThere.innerHTML += modifiedInstruction;
  }

  // data.response.route[0].leg[0].maneuver.instruction;
}

const findMyLocation = document.getElementById("findMyLocationBtn");
findMyLocation.addEventListener("click", getLocation);
const facilitiesHospitalsBtn = document.getElementById(
  "facilitiesHospitalsBtn"
);
facilitiesHospitalsBtn.addEventListener("click", function () {
  console.log("search for Hospitals");
  currentPosition.currentSearch = "Hospitals";

  fetch(
    `https://discover.search.hereapi.com/v1/discover?in=circle:${currentPosition.lat},${currentPosition.lng};r=${currentPosition.radius}&q=hospitals&lang=en-US&apiKey=${API_KEY}`
  )
    .then((result) => result.json())
    .then((data) => onSearchSuccess(data))
    .catch((e) => console.error(e));
});
const facilitiesParksBtn = document.getElementById("facilitiesParksBtn");
facilitiesParksBtn.addEventListener("click", function () {
  console.log("search for Parks");
  currentPosition.currentSearch = "Parks";

  fetch(
    `https://discover.search.hereapi.com/v1/discover?in=circle:${currentPosition.lat},${currentPosition.lng};r=${currentPosition.radius}&q=parks&lang=en-US&apiKey=${API_KEY}`
  )
    .then((result) => result.json())
    .then((data) => onSearchSuccess(data))
    .catch((e) => console.error(e));
});
const facilitiesRestaurantsBtn = document.getElementById(
  "facilitiesRestaurantsBtn"
);
facilitiesRestaurantsBtn.addEventListener("click", function () {
  console.log("search for Restaurants");
  currentPosition.currentSearch = "Restaurants";

  fetch(
    `https://discover.search.hereapi.com/v1/discover?in=circle:${currentPosition.lat},${currentPosition.lng};r=${currentPosition.radius}&q=restaurants&lang=en-US&apiKey=${API_KEY}`
  )
    .then((result) => result.json())
    .then((data) => onSearchSuccess(data))
    .catch((e) => console.error(e));
});
const facilitiesBarsBtn = document.getElementById("facilitiesBarsBtn");
facilitiesBarsBtn.addEventListener("click", function () {
  console.log("search for Bars");
  currentPosition.currentSearch = "Bars";

  fetch(
    `https://discover.search.hereapi.com/v1/discover?in=circle:${currentPosition.lat},${currentPosition.lng};r=${currentPosition.radius}&q=bars&lang=en-US&apiKey=${API_KEY}`
  )
    .then((result) => result.json())
    .then((data) => onSearchSuccess(data))
    .catch((e) => console.error(e));
});
const facilitiesBanksBtn = document.getElementById("facilitiesBanksBtn");
facilitiesBanksBtn.addEventListener("click", function () {
  console.log("search for Banks");
  currentPosition.currentSearch = "Banks";

  fetch(
    `https://discover.search.hereapi.com/v1/discover?in=circle:${currentPosition.lat},${currentPosition.lng};r=${currentPosition.radius}&q=banks&lang=en-US&apiKey=${API_KEY}`
  )
    .then((result) => result.json())
    .then((data) => onSearchSuccess(data))
    .catch((e) => console.error(e));
});

//Sets the radius to be searched, by default this is 250km
const radiusText = document.getElementById("radiusText");
radiusText.addEventListener("change", function () {
  if (radiusText.value > 250) radiusText.value = 250;
  if (radiusText.value < 1) radiusText.value = 1;

  currentPosition.radius = radiusText.value * 1000;
});

const customSearch = document.getElementById("customSearch");
customSearch.addEventListener("input", function (e) {
  var a,
    val = this.value;
  closeAllLists();

  if (!val || val.length < 3) return false;
  currentFocus = -1;

  a = document.createElement("div");
  a.setAttribute("id", this.id + "autocomplete-list");
  a.setAttribute("class", "autocomplete-items");

  this.parentNode.appendChild(a);

  getArraySuggestions();
});

//variables to be used in code
var areMarkersToBeRemoved = false;
var userPositionFound = false;

let currentPosition = {
  lat: 31.951026,
  lng: 35.923897,
  radius: 250000,
  zoom: 11,
  nearestLocation: "",
  currentSearch: null,
};

let currentMarkers = [];

//gets the element that notifies the user when they have blocked the maps API
const alertLocationBlocked = document.getElementById("alertLocationBlocked");
alertLocationBlocked.classList.add("ninja");

//boiler plate code
const API_KEY = "Ha47FpZb8I-KRSf17lKZYp-mKsQy2xnG-rGrNEoKeRw";
var platform = new H.service.Platform({
  apikey: API_KEY,
});
var defaulLayers = platform.createDefaultLayers();
var map = new H.Map(
  document.getElementById("mapContainer"),
  defaulLayers.vector.normal.map,
  {
    center: { lat: currentPosition.lat, lng: currentPosition.lng },
    zoom: currentPosition.zoom,
    pixelRatio: window.devicePixelRatio || 1,
  }
);
window.addEventListener("resize", () => map.getViewPort().resize());
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
var ui = H.ui.UI.createDefault(map, defaulLayers);

//functions that ask users for their location, and gets it. then calls other functions to show the position on the map and center the map on it.
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, askAgainForPosition);
    userPositionFound = true;
  } else {
  }
}
function askAgainForPosition() {
  var position = {
    coords: { latitude: currentPosition.lat, longitude: currentPosition.lng },
  };
  showPosition(position);
  alertLocationBlocked.classList.remove("ninja");
  areMarkersToBeRemoved = true;
}
function showPosition(position) {
  alertLocationBlocked.classList.add("ninja");
  if (areMarkersToBeRemoved) {
    map.removeObjects(map.getObjects());
    areMarkersToBeRemoved = false;
  }
  currentPosition.lat = position.coords.latitude;
  currentPosition.lng = position.coords.longitude;
  console.log(
    "My location lat: " + currentPosition.lat,
    "My location lng: " + currentPosition.lng
  );
  moveMapToUserLocation(map, currentPosition.lat, currentPosition.lng);

  {
    var svgMarkup =
      '<svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" overflow="inherit"><path d="M25.015 2.4c-7.8 0-14.121 6.204-14.121 13.854 0 7.652 14.121 32.746 14.121 32.746s14.122-25.094 14.122-32.746c0-7.65-6.325-13.854-14.122-13.854z"/></svg>';
  }

  var myMarkerIcon = new H.map.Icon(svgMarkup);

  var myPositionMarker = new H.map.Marker(
    { lat: currentPosition.lat, lng: currentPosition.lng },
    { icon: myMarkerIcon }
  );
  map.addObject(myPositionMarker);
}

function moveMapToUserLocation(map, lat, long) {
  map.setCenter({ lat: lat, lng: long });
  map.setZoom(map.getZoom());
}

function onSearchSuccess(result) {
  var locations = result.items;
  currentPosition.nearestLocation = locations[0];

  if (areMarkersToBeRemoved) {
    map.removeObjects(map.getObjects());
    areMarkersToBeRemoved = false;
    currentMarkers = [];
  }

  var position = {
    coords: { latitude: currentPosition.lat, longitude: currentPosition.lng },
  };
  showPosition(position);

  if (!userPositionFound) {
    alertLocationBlocked.classList.remove("ninja");
  }

  locations.forEach((location) => {
    // console.log(location.position.lat, location.position.lng);
    let itemMarker = new H.map.Marker({
      lat: location.position.lat,
      lng: location.position.lng,
    });
    map.addObject(itemMarker);
    currentMarkers.push({
      lat: location.position.lat,
      lng: location.position.lng,
    });
  });

  areMarkersToBeRemoved = true;
}

function onSearchError(error) {
  alert("Can't reach the remote server");
}

//Stopped here, restart by opening these 2 links
// https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics/endpoint-browse-brief.html

// https://developer.here.com/documentation/geocoding-search-api/dev_guide/topics-api/code-autosuggest-incomplete-category-query.html

// https://developer.here.com/documentation/examples/rest/routing

async function getArraySuggestions() {
  str = customSearch.value;

  if (str.length < 3) return;

  let suggestionsFull = [];
  let suggestions = [];

  fetch(
    `https://autosuggest.search.hereapi.com/v1/autosuggest?at=${currentPosition.lat},${currentPosition.lng}&limit=5&lang=en&q=${str}&apiKey=${API_KEY}`
  )
    .then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      suggestionsFull = data.items;
      testingThis();
    })
    .catch((error) => {
      console.log(error);
    });

  function testingThis() {
    suggestionsFull.forEach((item) => {
      suggestions.push(item.title);
    });

    val = document.getElementById("customSearch").value;

    for (i = 0; i < suggestions.length; i++) {
      b = document.createElement("div");
      b.innerHTML =
        "<strong>" + suggestions[i].substr(0, val.length) + "</strong>";
      b.innerHTML += suggestions[i].substr(val.length);

      b.innerHTML += "<input type = 'hidden' value = '" + suggestions[i] + "'>";

      b.addEventListener("click", function (e) {
        customSearch.value = this.getElementsByTagName("input")[0].value;
        currentPosition.currentSearch = "Custom";

        fetch(
          `https://discover.search.hereapi.com/v1/discover?in=circle:${currentPosition.lat},${currentPosition.lng};r=${currentPosition.radius}&q=${customSearch.value}&lang=en-US&apiKey=${API_KEY}`
        )
          .then((result) => result.json())
          .then((data) => onSearchSuccess(data))
          .catch((e) => console.error(e));

        closeAllLists();
      });

      let a = document.getElementById("customSearchautocomplete-list");

      a.appendChild(b);
    }
  }
}

function autoComplete() {
  let currentFocus;

  customSearch.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus - 1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;

    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
}

function closeAllLists(elmnt) {
  var x = document.getElementsByClassName("autocomplete-items");
  for (var i = 0; i < x.length; i++) {
    if (elmnt != x[i] && elmnt != customSearch) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

document.addEventListener("click", function (e) {
  closeAllLists(e.target);
});

autoComplete();
