(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("testmap",
{ "height":62,
 "infinite":false,
 "layers":[
        {
         "compression":"zlib",
         "data":"eJzt2k1TwjAQBuAoJ+0Je\/OiAgqiVSr\/\/7+ZjumI220+yqZhnffwDt+ZPE3Z0B2OxpijcFqXL4G0GeaXK1LufpzSnlT3lc31xCwUu29sbiemgru4B2644YYbbrjhhhtuuOHW617a3AVSk+NTuc\/Vit2x\/QXq1tpvSQ1102NYen4l3Lki2QOk40qc55fupuejhLs1eeZ5GokeIHVvbPaBPDPujXuec0v1KiX3Wupe2zzabG0eyP2te\/xkszpJZ35zz3Nuqd8EOd3vNveBNMS9dsdFg7seca8mRJPb9536z25f4P6tW3szrOka3b7rjrH1\/HS3B\/O3pmtyh\/Zvup4HYtfq9u3fL8TF7W0N83oz4l4qce\/M8LdJTHx7hAY3Xe\/YTJ3LpbinrrevVmpwd+v9aob1LWZvG7su0eDeObtv3bv3fZif+t5nrnre1clQD9DXG4y5LmmYeVfM+0L1\/Nx5nmaufgvnjhlTcp6Sbm69z3XTMTWHc5eek1R851Dqea5pzaXc\/TilPalu2gNcjLi5XiH+r1jeAzfccMMNN9xwww033HDDXdqT6pbqAZb2pLqleoClPXO7c673N2N1OEU=",
         "encoding":"base64",
         "height":62,
         "id":2,
         "name":"Ground",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":62,
         "x":0,
         "y":0
        }],
 "nextlayerid":3,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.2.4",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/..\/..\/..\/..\/..\/Program Files\/Tiled\/examples\/desert.tsx"
        }, 
        {
         "firstgid":49,
         "source":"shadow.tsx"
        }, 
        {
         "firstgid":53,
         "source":"tmw_desert_spacing.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":1.2,
 "width":62
});