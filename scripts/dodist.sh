pgsql2shp election14 dist;
mapshaper dist.shp --keep-shapes -p 0.002600 -f shapefile -o dist-4.shp;
shp2pgsql -s 4326 dist-4.shp dist_4 | psql election14
psql election14 -c "insert into dist_geom(id, level, geom) select id, 4, geom from dist_4;";
psql election14 -c "drop table dist_4;";
mapshaper dist.shp --keep-shapes -p 0.004400 -f shapefile -o dist-5.shp;
shp2pgsql -s 4326 dist-5.shp dist_5 | psql election14
psql election14 -c "insert into dist_geom(id, level, geom) select id, 5, geom from dist_5;";
psql election14 -c "drop table dist_5;";
mapshaper dist.shp --keep-shapes -p 0.007500 -f shapefile -o dist-6.shp;
shp2pgsql -s 4326 dist-6.shp dist_6 | psql election14
psql election14 -c "insert into dist_geom(id, level, geom) select id, 6, geom from dist_6;";
psql election14 -c "drop table dist_6;";
mapshaper dist.shp --keep-shapes -p 0.012900 -f shapefile -o dist-7.shp;
shp2pgsql -s 4326 dist-7.shp dist_7 | psql election14
psql election14 -c "insert into dist_geom(id, level, geom) select id, 7, geom from dist_7;";
psql election14 -c "drop table dist_7;";
mapshaper dist.shp --keep-shapes -p 0.022100 -f shapefile -o dist-8.shp;
shp2pgsql -s 4326 dist-8.shp dist_8 | psql election14
psql election14 -c "insert into dist_geom(id, level, geom) select id, 8, geom from dist_8;";
psql election14 -c "drop table dist_8;";
mapshaper dist.shp --keep-shapes -p 0.037800 -f shapefile -o dist-9.shp;
shp2pgsql -s 4326 dist-9.shp dist_9 | psql election14
psql election14 -c "insert into dist_geom(id, level, geom) select id, 9, geom from dist_9;";
psql election14 -c "drop table dist_9;";
mapshaper dist.shp --keep-shapes -p 0.064800 -f shapefile -o dist-10.shp;
shp2pgsql -s 4326 dist-10.shp dist_10 | psql election14
psql election14 -c "insert into dist_geom(id, level, geom) select id, 10, geom from dist_10;";
psql election14 -c "drop table dist_10;";
mapshaper dist.shp --keep-shapes -p 0.110800 -f shapefile -o dist-11.shp;
shp2pgsql -s 4326 dist-11.shp dist_11 | psql election14
psql election14 -c "insert into dist_geom(id, level, geom) select id, 11, geom from dist_11;";
psql election14 -c "drop table dist_11;";
mapshaper dist.shp --keep-shapes -p 0.189700 -f shapefile -o dist-12.shp;
shp2pgsql -s 4326 dist-12.shp dist_12 | psql election14
psql election14 -c "insert into dist_geom(id, level, geom) select id, 12, geom from dist_12;";
psql election14 -c "drop table dist_12;";
mapshaper dist.shp --keep-shapes -p 0.324700 -f shapefile -o dist-13.shp;
shp2pgsql -s 4326 dist-13.shp dist_13 | psql election14
psql election14 -c "insert into dist_geom(id, level, geom) select id, 13, geom from dist_13;";
psql election14 -c "drop table dist_13;";
mapshaper dist.shp --keep-shapes -p 0.555900 -f shapefile -o dist-14.shp;
shp2pgsql -s 4326 dist-14.shp dist_14 | psql election14
psql election14 -c "insert into dist_geom(id, level, geom) select id, 14, geom from dist_14;";
psql election14 -c "drop table dist_14;";
mapshaper dist.shp --keep-shapes -p 0.951400 -f shapefile -o dist-15.shp;
shp2pgsql -s 4326 dist-15.shp dist_15 | psql election14
psql election14 -c "insert into dist_geom(id, level, geom) select id, 15, geom from dist_15;";
psql election14 -c "drop table dist_15;";
mapshaper dist.shp --keep-shapes -p 1.000000 -f shapefile -o dist-16.shp;
shp2pgsql -s 4326 dist-16.shp dist_16 | psql election14
psql election14 -c "insert into dist_geom(id, level, geom) select id, 16, geom from dist_16;";
psql election14 -c "drop table dist_16;";
