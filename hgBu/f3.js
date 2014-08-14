var activityIndicatorCat2 = Titanium.UI.createActivityIndicator({
width:'80dip',
height:'80dip',
zIndex:1,
backgroundColor:'black',
borderRadius:7
});
var arr3 = [];
var vars3={};
function cat(nation,city){
activityIndicatorCat2.show();
var queryIndexCat='select * from html where url="http://'+nation+'.dubizzle.com/ar/'+city+'/property-for-sale/search/" and xpath="//*[@class=\'d-nav__cat d-nav__cat--show\']"';
Titanium.Yahoo.yql(queryIndexCat, function(etCat){
// Ti.API.info(etCat.data);
vars3.data=etCat.data;
function getObjects(obj, key, val) {
var objects = [];
for (var i in obj) {
if (!obj.hasOwnProperty(i)) continue;
if (typeof obj[i] == 'object') {
objects = objects.concat(getObjects(obj[i], key, val));
} else
//if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
if (i == key && obj[i] == val || i == key && val == '') { //
objects.push(obj);
} else if (obj[i] == val && key == ''){
//only add if the object is not already in the array
if (objects.lastIndexOf(obj) == -1){
objects.push(obj);
}
}
}
return objects;
}
//return an array of values that match on a certain key
function getValues(obj, key) {
var objects = [];
for (var i in obj) {
if (!obj.hasOwnProperty(i)) continue;
if (typeof obj[i] == 'object') {
objects = objects.concat(getValues(obj[i], key));
} else if (i == key) {
objects.push(obj[i]);
}
}
return objects;
}
//return an array of keys that match on a certain value
function getKeys(obj, val) {
var objects = [];
for (var i in obj) {
if (!obj.hasOwnProperty(i)) continue;
if (typeof obj[i] == 'object') {
objects = objects.concat(getKeys(obj[i], val));
} else if (obj[i] == val) {
objects.push(i);
}
}
return objects;
}
var dsCats = vars3.data;
vars3.d1=(getObjects(dsCats,'class','d-nav__txt'));
vars3.d2=(getObjects(dsCats,'class','d-nav__name'));
for (var i=0;i<vars3.d1.length;i++) {
arr3.push({
title:vars3.d1[i].content,
href:vars3.d2[i].href,
});
}
activityIndicatorCat2.hide();
//Ti.API.info(arr3);
});
}
