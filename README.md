election-map
============

This is a web app that displays an interactive 'slippy' map of South African election results. It uses [TileStache](http://tilestache.org/) to serve vector geography tiles (representing municipalities, wards, etc.) and [Leaflet](http://leafletjs.com/) plus Glenn Robertson's [GeoJSON Tile Layer](https://github.com/glenrobertson/leaflet-tilelayer-geojson) to display the map.

A live version of the app with results from the 2014 election can be seen at http://election2014.adrianfrith.com/. The PostgreSQL database containing the data can be downloaded [here](http://stuff.adrianfrith.com/election2014.sql.bz2). That's a 700MB file, but if you just want the raw election results per voting district, you can download [this file](http://stuff.adrianfrith.com/2014-results.tar.gz) which is only 5MB.
