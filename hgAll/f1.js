var activityIndicatorCatt = Titanium.UI.createActivityIndicator({
width:'80dip',
height:'80dip',
zIndex:1,
backgroundColor:'black',
borderRadius:7
});
var arr = [];
var vars={};
function pri(nation,priv,pageNumber){
activityIndicatorCatt.show();
//alert("1");
//Ti.API.info("sad"+vars.data);
vars.city=priv;
var queryIndexF1='select * from html where url="http://'+nation+'.dubizzle.com/ar/'+priv+'/search/?page='+pageNumber+'" and xpath="//*[@class=\'d-listing__item\']"';
Titanium.Yahoo.yql(queryIndexF1, function(e){
vars.data=e.data;
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
var ds = vars.data;
vars.d1=(getObjects(ds,'class','u-img__img'));
vars.d2=(getObjects(ds,'class','d-listing__name u-helper--no-margin'));
vars.d3=(getObjects(ds,'class','d-listing__detail'));
var priceVarsP;
for (var i=0;i<vars.d2.length;i++) {
if(vars.d3[i].div[0]){
priceVarsP=vars.d3[i].div[0].p.content;
}else{
priceVarsP='';
}
//Ti.API.info(priceVarsP);
arr.push({
image:vars.d1[i].src,
title:vars.d2[i].title,
href:vars.d2[i].href,
price:priceVarsP
});
}
//Ti.API.info(arr);
activityIndicatorCatt.hide();
//alert("2");
//Ti.API.info(vars.data);
});
}
