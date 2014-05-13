pgsql2shp election14 vd;
mapshaper vd.shp --keep-shapes -p 0.064800 -f shapefile -o vd-10.shp;
shp2pgsql -s 4326 vd-10.shp vd_10 | psql election14
psql election14 -c "insert into vd_geom(id, level, geom) select id, 10, geom from vd_10;";
psql election14 -c "drop table vd_10;";
mapshaper vd.shp --keep-shapes -p 0.110800 -f shapefile -o vd-11.shp;
shp2pgsql -s 4326 vd-11.shp vd_11 | psql election14
psql election14 -c "insert into vd_geom(id, level, geom) select id, 11, geom from vd_11;";
psql election14 -c "drop table vd_11;";
mapshaper vd.shp --keep-shapes -p 0.189700 -f shapefile -o vd-12.shp;
shp2pgsql -s 4326 vd-12.shp vd_12 | psql election14
psql election14 -c "insert into vd_geom(id, level, geom) select id, 12, geom from vd_12;";
psql election14 -c "drop table vd_12;";
mapshaper vd.shp --keep-shapes -p 0.324700 -f shapefile -o vd-13.shp;
shp2pgsql -s 4326 vd-13.shp vd_13 | psql election14
psql election14 -c "insert into vd_geom(id, level, geom) select id, 13, geom from vd_13;";
psql election14 -c "drop table vd_13;";
mapshaper vd.shp --keep-shapes -p 0.555900 -f shapefile -o vd-14.shp;
shp2pgsql -s 4326 vd-14.shp vd_14 | psql election14
psql election14 -c "insert into vd_geom(id, level, geom) select id, 14, geom from vd_14;";
psql election14 -c "drop table vd_14;";
mapshaper vd.shp --keep-shapes -p 0.951400 -f shapefile -o vd-15.shp;
shp2pgsql -s 4326 vd-15.shp vd_15 | psql election14
psql election14 -c "insert into vd_geom(id, level, geom) select id, 15, geom from vd_15;";
psql election14 -c "drop table vd_15;";
mapshaper vd.shp --keep-shapes -p 1.000000 -f shapefile -o vd-16.shp;
shp2pgsql -s 4326 vd-16.shp vd_16 | psql election14
psql election14 -c "insert into vd_geom(id, level, geom) select id, 16, geom from vd_16;";
psql election14 -c "drop table vd_16;";
