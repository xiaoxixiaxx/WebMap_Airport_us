# The Map of Airports in the United States

![Airport](http://127.0.0.1:49154/geog458/labs/lab03/1xia_map.html)

## [Description] (https://github.com/xiaoxixiaxx/WebMap_airports_us/blob/main/index.html)
#### The interactive map shows all airports in the United States. The Choropleth map counts the number of airports in each state in gradient purple. The lightest color represents states with 0-5 airports. The darkest purple represents states with more than 21 airports. The gradual color increases the number of airports from less to more. The legend contains detailed instructions. In addition, the legend also specifies which airports have air traffic control tower. They are clearly displayed on the map in indigo and green respectively. Green icons indicates the areport has air traddic control tower. Indigo plane icons indicate there is no air traffic control tower. The plane icon with the airport element makes the map more visual, highlighting the purpose and theme of the map. A suitable basemap makes the overall appearance of the map clear, and points out the location of the United States on the world map, such as the reference object-Canada. A simple basemap highlights the distribution of US airports and makes them different. Moreover, user can click on the airport icon to see each airport's name. Addition feature is that bindPopup window shows if airport has control tower or not. 

## Data Source
#### airports.geojson contains all the airports in the United States. This data is converted from a shapefile, which was downloaded and unzipped from https://catalog.data.gov/dataset/usgs-small-scale-dataset-airports-of-the-united-states-201207-shapefile.

#### us-states.geojson is a geojson data file containing all the states' boundaries of the United States. This data is acquired from Mike Bostock of D3. The count field indicates the number of airports within the boundary of the state under investigation.

## libraries
#### Leaflet, Font-Awesome for the plane icon, Google Fonts, Leaflet-ajax, CartoDB for basemap.

## Credit
####

## Ackmowledgment
####  The project instructions provid by Professor Bo Zhao.
