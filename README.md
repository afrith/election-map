election-map
============

This is a web app that displays an interactive 'slippy' map of South African election results. It uses a slightly modified version of [TileStache](http://tilestache.org/) to serve vector geography tiles (representing municipalities, wards, etc.); [see this commit for the necessary modification](https://github.com/afrith/TileStache/commit/5ddd229c3c8d6fe783a758edfe6b5b89be4a78ff). The front-end uses [Leaflet](http://leafletjs.com/) plus Glenn Robertson's [GeoJSON Tile Layer](https://github.com/glenrobertson/leaflet-tilelayer-geojson) to display the map.

Live version and data
---------------------

A live version of the app with results from the 2009 and 2014 elections can be seen at http://elections.adrianfrith.com/. The PostgreSQL databases containing the data can be downloaded from the following links: [2014](http://stuff.adrianfrith.com/election2014.sql.bz2), [2009](http://stuff.adrianfrith.com/election2009.sql.bz2). Those are 700MB files each, but if you just want the underlying data you can download:
* the election results by voting district: [2014](http://www.elections.org.za/content/Elections/Downloadable-results/2014-National-and-Provincial-Elections--Complete-results-data-(zipped-CSV)/), [2009](http://www.elections.org.za/content/uploadedfiles/2009%20NPE.zip)
* the link between voting districts and larger areas: [2014](http://stuff.adrianfrith.com/sa-admin-data-2014.tar.bz2), [2009](http://stuff.adrianfrith.com/sa-admin-data-2009.tar.bz2)
* the geography shapefiles: [2014](http://stuff.adrianfrith.com/sa-admin-boundaries-2014.tar.bz2), [2009](http://stuff.adrianfrith.com/sa-admin-boundaries-2009.tar.bz2)
