pgsql2shp election14 prov;
mapshaper prov.shp --keep-shapes -p 0.002600 -f shapefile -o prov-4.shp;
shp2pgsql -s 4326 prov-4.shp prov_4 | psql election14
psql election14 -c "insert into prov_geom(id, level, geom) select id, 4, geom from prov_4;";
psql election14 -c "drop table prov_4;";
mapshaper prov.shp --keep-shapes -p 0.004400 -f shapefile -o prov-5.shp;
shp2pgsql -s 4326 prov-5.shp prov_5 | psql election14
psql election14 -c "insert into prov_geom(id, level, geom) select id, 5, geom from prov_5;";
psql election14 -c "drop table prov_5;";
mapshaper prov.shp --keep-shapes -p 0.007500 -f shapefile -o prov-6.shp;
shp2pgsql -s 4326 prov-6.shp prov_6 | psql election14
psql election14 -c "insert into prov_geom(id, level, geom) select id, 6, geom from prov_6;";
psql election14 -c "drop table prov_6;";
mapshaper prov.shp --keep-shapes -p 0.012900 -f shapefile -o prov-7.shp;
shp2pgsql -s 4326 prov-7.shp prov_7 | psql election14
psql election14 -c "insert into prov_geom(id, level, geom) select id, 7, geom from prov_7;";
psql election14 -c "drop table prov_7;";
mapshaper prov.shp --keep-shapes -p 0.022100 -f shapefile -o prov-8.shp;
shp2pgsql -s 4326 prov-8.shp prov_8 | psql election14
psql election14 -c "insert into prov_geom(id, level, geom) select id, 8, geom from prov_8;";
psql election14 -c "drop table prov_8;";
mapshaper prov.shp --keep-shapes -p 0.037800 -f shapefile -o prov-9.shp;
shp2pgsql -s 4326 prov-9.shp prov_9 | psql election14
psql election14 -c "insert into prov_geom(id, level, geom) select id, 9, geom from prov_9;";
psql election14 -c "drop table prov_9;";
mapshaper prov.shp --keep-shapes -p 0.064800 -f shapefile -o prov-10.shp;
shp2pgsql -s 4326 prov-10.shp prov_10 | psql election14
psql election14 -c "insert into prov_geom(id, level, geom) select id, 10, geom from prov_10;";
psql election14 -c "drop table prov_10;";
mapshaper prov.shp --keep-shapes -p 0.110800 -f shapefile -o prov-11.shp;
shp2pgsql -s 4326 prov-11.shp prov_11 | psql election14
psql election14 -c "insert into prov_geom(id, level, geom) select id, 11, geom from prov_11;";
psql election14 -c "drop table prov_11;";
mapshaper prov.shp --keep-shapes -p 0.189700 -f shapefile -o prov-12.shp;
shp2pgsql -s 4326 prov-12.shp prov_12 | psql election14
psql election14 -c "insert into prov_geom(id, level, geom) select id, 12, geom from prov_12;";
psql election14 -c "drop table prov_12;";
mapshaper prov.shp --keep-shapes -p 0.324700 -f shapefile -o prov-13.shp;
shp2pgsql -s 4326 prov-13.shp prov_13 | psql election14
psql election14 -c "insert into prov_geom(id, level, geom) select id, 13, geom from prov_13;";
psql election14 -c "drop table prov_13;";
mapshaper prov.shp --keep-shapes -p 0.555900 -f shapefile -o prov-14.shp;
shp2pgsql -s 4326 prov-14.shp prov_14 | psql election14
psql election14 -c "insert into prov_geom(id, level, geom) select id, 14, geom from prov_14;";
psql election14 -c "drop table prov_14;";
mapshaper prov.shp --keep-shapes -p 0.951400 -f shapefile -o prov-15.shp;
shp2pgsql -s 4326 prov-15.shp prov_15 | psql election14
psql election14 -c "insert into prov_geom(id, level, geom) select id, 15, geom from prov_15;";
psql election14 -c "drop table prov_15;";
mapshaper prov.shp --keep-shapes -p 1.000000 -f shapefile -o prov-16.shp;
shp2pgsql -s 4326 prov-16.shp prov_16 | psql election14
psql election14 -c "insert into prov_geom(id, level, geom) select id, 16, geom from prov_16;";
psql election14 -c "drop table prov_16;";
