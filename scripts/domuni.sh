pgsql2shp election14 muni;
mapshaper muni.shp --keep-shapes -p 0.002600 -f shapefile -o muni-4.shp;
shp2pgsql -s 4326 muni-4.shp muni_4 | psql election14
psql election14 -c "insert into muni_geom(id, level, geom) select id, 4, geom from muni_4;";
psql election14 -c "drop table muni_4;";
mapshaper muni.shp --keep-shapes -p 0.004400 -f shapefile -o muni-5.shp;
shp2pgsql -s 4326 muni-5.shp muni_5 | psql election14
psql election14 -c "insert into muni_geom(id, level, geom) select id, 5, geom from muni_5;";
psql election14 -c "drop table muni_5;";
mapshaper muni.shp --keep-shapes -p 0.007500 -f shapefile -o muni-6.shp;
shp2pgsql -s 4326 muni-6.shp muni_6 | psql election14
psql election14 -c "insert into muni_geom(id, level, geom) select id, 6, geom from muni_6;";
psql election14 -c "drop table muni_6;";
mapshaper muni.shp --keep-shapes -p 0.012900 -f shapefile -o muni-7.shp;
shp2pgsql -s 4326 muni-7.shp muni_7 | psql election14
psql election14 -c "insert into muni_geom(id, level, geom) select id, 7, geom from muni_7;";
psql election14 -c "drop table muni_7;";
mapshaper muni.shp --keep-shapes -p 0.022100 -f shapefile -o muni-8.shp;
shp2pgsql -s 4326 muni-8.shp muni_8 | psql election14
psql election14 -c "insert into muni_geom(id, level, geom) select id, 8, geom from muni_8;";
psql election14 -c "drop table muni_8;";
mapshaper muni.shp --keep-shapes -p 0.037800 -f shapefile -o muni-9.shp;
shp2pgsql -s 4326 muni-9.shp muni_9 | psql election14
psql election14 -c "insert into muni_geom(id, level, geom) select id, 9, geom from muni_9;";
psql election14 -c "drop table muni_9;";
mapshaper muni.shp --keep-shapes -p 0.064800 -f shapefile -o muni-10.shp;
shp2pgsql -s 4326 muni-10.shp muni_10 | psql election14
psql election14 -c "insert into muni_geom(id, level, geom) select id, 10, geom from muni_10;";
psql election14 -c "drop table muni_10;";
mapshaper muni.shp --keep-shapes -p 0.110800 -f shapefile -o muni-11.shp;
shp2pgsql -s 4326 muni-11.shp muni_11 | psql election14
psql election14 -c "insert into muni_geom(id, level, geom) select id, 11, geom from muni_11;";
psql election14 -c "drop table muni_11;";
mapshaper muni.shp --keep-shapes -p 0.189700 -f shapefile -o muni-12.shp;
shp2pgsql -s 4326 muni-12.shp muni_12 | psql election14
psql election14 -c "insert into muni_geom(id, level, geom) select id, 12, geom from muni_12;";
psql election14 -c "drop table muni_12;";
mapshaper muni.shp --keep-shapes -p 0.324700 -f shapefile -o muni-13.shp;
shp2pgsql -s 4326 muni-13.shp muni_13 | psql election14
psql election14 -c "insert into muni_geom(id, level, geom) select id, 13, geom from muni_13;";
psql election14 -c "drop table muni_13;";
mapshaper muni.shp --keep-shapes -p 0.555900 -f shapefile -o muni-14.shp;
shp2pgsql -s 4326 muni-14.shp muni_14 | psql election14
psql election14 -c "insert into muni_geom(id, level, geom) select id, 14, geom from muni_14;";
psql election14 -c "drop table muni_14;";
mapshaper muni.shp --keep-shapes -p 0.951400 -f shapefile -o muni-15.shp;
shp2pgsql -s 4326 muni-15.shp muni_15 | psql election14
psql election14 -c "insert into muni_geom(id, level, geom) select id, 15, geom from muni_15;";
psql election14 -c "drop table muni_15;";
mapshaper muni.shp --keep-shapes -p 1.000000 -f shapefile -o muni-16.shp;
shp2pgsql -s 4326 muni-16.shp muni_16 | psql election14
psql election14 -c "insert into muni_geom(id, level, geom) select id, 16, geom from muni_16;";
psql election14 -c "drop table muni_16;";
