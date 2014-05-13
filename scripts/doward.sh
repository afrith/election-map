pgsql2shp election14 ward;
mapshaper ward.shp --keep-shapes -p 0.022100 -f shapefile -o ward-8.shp;
shp2pgsql -s 4326 ward-8.shp ward_8 | psql election14
psql election14 -c "insert into ward_geom(id, level, geom) select id, 8, geom from ward_8;";
psql election14 -c "drop table ward_8;";
mapshaper ward.shp --keep-shapes -p 0.037800 -f shapefile -o ward-9.shp;
shp2pgsql -s 4326 ward-9.shp ward_9 | psql election14
psql election14 -c "insert into ward_geom(id, level, geom) select id, 9, geom from ward_9;";
psql election14 -c "drop table ward_9;";
mapshaper ward.shp --keep-shapes -p 0.064800 -f shapefile -o ward-10.shp;
shp2pgsql -s 4326 ward-10.shp ward_10 | psql election14
psql election14 -c "insert into ward_geom(id, level, geom) select id, 10, geom from ward_10;";
psql election14 -c "drop table ward_10;";
mapshaper ward.shp --keep-shapes -p 0.110800 -f shapefile -o ward-11.shp;
shp2pgsql -s 4326 ward-11.shp ward_11 | psql election14
psql election14 -c "insert into ward_geom(id, level, geom) select id, 11, geom from ward_11;";
psql election14 -c "drop table ward_11;";
mapshaper ward.shp --keep-shapes -p 0.189700 -f shapefile -o ward-12.shp;
shp2pgsql -s 4326 ward-12.shp ward_12 | psql election14
psql election14 -c "insert into ward_geom(id, level, geom) select id, 12, geom from ward_12;";
psql election14 -c "drop table ward_12;";
mapshaper ward.shp --keep-shapes -p 0.324700 -f shapefile -o ward-13.shp;
shp2pgsql -s 4326 ward-13.shp ward_13 | psql election14
psql election14 -c "insert into ward_geom(id, level, geom) select id, 13, geom from ward_13;";
psql election14 -c "drop table ward_13;";
mapshaper ward.shp --keep-shapes -p 0.555900 -f shapefile -o ward-14.shp;
shp2pgsql -s 4326 ward-14.shp ward_14 | psql election14
psql election14 -c "insert into ward_geom(id, level, geom) select id, 14, geom from ward_14;";
psql election14 -c "drop table ward_14;";
mapshaper ward.shp --keep-shapes -p 0.951400 -f shapefile -o ward-15.shp;
shp2pgsql -s 4326 ward-15.shp ward_15 | psql election14
psql election14 -c "insert into ward_geom(id, level, geom) select id, 15, geom from ward_15;";
psql election14 -c "drop table ward_15;";
mapshaper ward.shp --keep-shapes -p 1.000000 -f shapefile -o ward-16.shp;
shp2pgsql -s 4326 ward-16.shp ward_16 | psql election14
psql election14 -c "insert into ward_geom(id, level, geom) select id, 16, geom from ward_16;";
psql election14 -c "drop table ward_16;";
