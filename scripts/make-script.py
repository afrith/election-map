import sys

levels = {
    4: 0.0026,
    5: 0.0044,
    6: 0.0075,
    7: 0.0129,
    8: 0.0221,
    9: 0.0378,
    10: 0.0648,
    11: 0.1108,
    12: 0.1897,
    13: 0.3247,
    14: 0.5559,
    15: 0.9514,
    16: 1.0
}

name = sys.argv[1]

print "pgsql2shp election14 %s;" % name
for z in levels:
    print 'mapshaper %s.shp --keep-shapes -p %f -f shapefile -o %s-%d.shp;' % (name, levels[z], name, z)
    print 'shp2pgsql -s 4326 %s-%d.shp %s_%d | psql election14' % (name, z, name, z)
    print 'psql election14 -c "insert into %s_geom(id, level, geom) select id, %d, geom from %s_%d;";' % (name, z, name, z)
    print 'psql election14 -c "drop table %s_%d;";' % (name, z)
