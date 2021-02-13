    // 1. Create a map object.
    var mymap = L.map('map', {
        center: [51.08924838947091, -109.55627296232038],
        zoom: 4,
        maxZoom: 10,
        minZoom: 3,
        detectRetina: true});

    // 2. Add a appropriate base map.
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(mymap);

    // 3. Add airports GeoJSON Data
    // Null variable that will hold airports data
    var airports = null;
		
	// 4. build up a set of colors from colorbrewer's dark2 category
    var colors = chroma.scale('dark2').mode('lch').colors(4);
	
	// 5. dynamically append style classes to this page. This style classes will be used for colorize the markers.
    for (i = 0; i < 4; i++) {
        $('head').append($("<style> .marker-color-" + (i + 1).toString() + " { color: " + colors[i] + "; font-size: 15px; text-shadow: 0 0 3px #ffffff;} </style>"));
    }
		
    // Get GeoJSON and put on it on the map when it loads
    airports= L.geoJson.ajax("assets/airports.geojson",{
	
        // assign a function to the onEachFeature parameter of the airports object.
        // Then each (point) feature will bind a popup window.
        // The content of the popup window is the value of `feature.properties.AIRPT_NAME`
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Airport Name: " + feature.properties.AIRPT_NAME + "<br>" + "Control Tower (Y/N)? " + feature.properties.CNTL_TWR);
        },
        pointToLayer: function (feature, latlng) {
            var id = 0;
            if (feature.properties.CNTL_TWR == "Y") { id = 0; }    //"If there is a tower, the value is 'Y'"
            else{ 
			id = 1;    // "otherwise, 'N'"
			}
           		   
            return L.marker(latlng, {icon: L.divIcon({className: 'fa fa-plane marker-color-' + (id + 1).toString() })});
        },
		
		attribution: 'Airports Data &copy; catalog.data.gov | U.S. Counties &copy; Mike Bostock of D3 | Base Map &copy; CartoDB | Made By Xiaoxi Xia'
	}).addTo(mymap);
		
	// 6. Set function for color ramp
    colors = chroma.scale('BuPu').colors(5); //colors = chroma.scale('BuPu').colors(5);

    function setColor(count) {
        var id = 0;
        if (count > 21) { id = 4; }
        else if (count > 16 && count <= 20) { id = 3; }
        else if (count > 11 && count <= 15) { id = 2; }
        else if (count > 6 &&  count <= 10) { id = 1; }
        else  { id = 0; }
        return colors[id];
    }

    // 7. Set style function that sets fill color.md property equal to airports density
    function style(feature) {
        return {
            fillColor: setColor(feature.properties.count),
            fillOpacity: 0.4,
            weight: 2,
            opacity: 1,
            color: '#b4b4b4',
            dashArray: '4'
        };
    }

    // 8. Add us-states polygons
    // create us-states variable, and assign null to it.
    var states = null;
    states = L.geoJson.ajax("assets/us-states.geojson", {
        style: style
    }).addTo(mymap);
		
	// 9. Create Leaflet Control Object for Legend
    var legend = L.control({position: 'topright'});

    // 10. Function that runs when legend is added to map
    legend.onAdd = function () {

        // Create Div Element and Populate it with HTML
        var div = L.DomUtil.create('div', 'legend');
        div.innerHTML += '<b>U.S. Airports</b><br />';
        div.innerHTML += '<i style="background: ' + colors[4] + '; opacity: 0.5"></i><p>21+</p>';
        div.innerHTML += '<i style="background: ' + colors[3] + '; opacity: 0.5"></i><p>16-20</p>';
        div.innerHTML += '<i style="background: ' + colors[2] + '; opacity: 0.5"></i><p>11-15</p>';
        div.innerHTML += '<i style="background: ' + colors[1] + '; opacity: 0.5"></i><p> 6-10</p>';
        div.innerHTML += '<i style="background: ' + colors[0] + '; opacity: 0.5"></i><p> 0- 5</p>';
        
		div.innerHTML += '<hr><b>Airport has an air traffic control tower or not<b><br />';
        div.innerHTML += '<i class="fa fa-plane marker-color-1"></i><p> Yes</p>';
        div.innerHTML += '<i class="fa fa-plane marker-color-2"></i><p> No</p>';
       
        // Return the Legend div containing the HTML content
        return div;
    };

    // 11. Add a legend to map
    legend.addTo(mymap);

    // 12. Add a scale bar to map
    L.control.scale({position: 'bottomleft'}).addTo(mymap);
