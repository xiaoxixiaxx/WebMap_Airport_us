# The Map of Airports in the United States 
###  The map generated from Atom live server [MapLink](http://127.0.0.1:49154/geog458/labs/lab03/1xia_map.html)

![Airport](https://user-images.githubusercontent.com/77243665/107839153-cbe3f600-6d5e-11eb-8b73-11692d1cc8a9.png)

## Description 
#### The interactive map shows all airports in the United States. The Choropleth map counts the number of airports in each state in gradient purple. The lightest color represents states with 0-5 airports. The darkest purple represents states with more than 21 airports. The gradual color increases the number of airports from less to more. The legend contains detailed instructions. In addition, the legend also specifies which airports have air traffic control tower. They are clearly displayed on the map in indigo and green respectively. Green icons indicates the areport has air traddic control tower. Indigo plane icons indicate there is no air traffic control tower. The plane icon with the airport element makes the map more visual, highlighting the purpose and theme of the map. A suitable basemap makes the overall appearance of the map clear, and points out the location of the United States on the world map, such as the reference object-Canada. A simple basemap highlights the distribution of US airports and makes them different. Moreover, user can click on the airport icon to see each airport's name. Addition feature is that bindPopup window shows if airport has control tower or not. 

## Data Source
#### airports.geojson contains all the airports in the United States. This data is converted from a shapefile, which was downloaded and unzipped from  [data.gov](https://catalog.data.gov/dataset/usgs-small-scale-dataset-airports-of-the-united-states-201207-shapefile).

#### us-states.geojson is a geojson data file containing all the states' boundaries of the United States. This data is acquired from [Mike Bostock](https://bost.ocks.org/mike/) of D3. The count field indicates the number of airports within the boundary of the state under investigation.

## libraries
#### Leaflet, Font-Awesome for the plane icon, Google Fonts, Leaflet-ajax, CartoDB for basemap.

## Credit and Ackmowledgment
####  The project instructions provid by UW Professor Bo Zhao.  I sincerely appreciate Prof. Zhao and his team.
