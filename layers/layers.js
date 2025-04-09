var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_12kmradius_1 = new ol.format.GeoJSON();
var features_12kmradius_1 = format_12kmradius_1.readFeatures(json_12kmradius_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_12kmradius_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_12kmradius_1.addFeatures(features_12kmradius_1);
var lyr_12kmradius_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_12kmradius_1, 
                style: style_12kmradius_1,
                popuplayertitle: "1.2 km radius",
                interactive: true,
                title: '<img src="styles/legend/12kmradius_1.png" /> 1.2 km radius'
            });
var format_Buildingtobedemolished_2 = new ol.format.GeoJSON();
var features_Buildingtobedemolished_2 = format_Buildingtobedemolished_2.readFeatures(json_Buildingtobedemolished_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildingtobedemolished_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildingtobedemolished_2.addFeatures(features_Buildingtobedemolished_2);
var lyr_Buildingtobedemolished_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildingtobedemolished_2, 
                style: style_Buildingtobedemolished_2,
                popuplayertitle: "Building to be demolished",
                interactive: true,
                title: '<img src="styles/legend/Buildingtobedemolished_2.png" /> Building to be demolished'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_12kmradius_1.setVisible(true);lyr_Buildingtobedemolished_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_12kmradius_1,lyr_Buildingtobedemolished_2];
lyr_12kmradius_1.set('fieldAliases', {'fid': 'fid', });
lyr_Buildingtobedemolished_2.set('fieldAliases', {'fid': 'fid', });
lyr_12kmradius_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_Buildingtobedemolished_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_12kmradius_1.set('fieldLabels', {'fid': 'no label', });
lyr_Buildingtobedemolished_2.set('fieldLabels', {'fid': 'no label', });
lyr_Buildingtobedemolished_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});