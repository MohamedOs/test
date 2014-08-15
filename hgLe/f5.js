var activityIndicator5 = Titanium.UI.createActivityIndicator({
width:'80dip',
height:'80dip',
zIndex:1,
backgroundColor:'black',
borderRadius:7
});
var contentVars5;
var adInfoVars5;
var vars5={};
var arr5 = [];
var arrImg5=[];
function singlePost5(link){
activityIndicator5.show();
var queryIndex5='select * from html where url="http://lebanon.dubizzle.com'+link+'" and xpath="//*[@class=\'u-r\']"';
Titanium.Yahoo.yql(queryIndex5, function(et){
//Ti.API.info(et.data);
vars5.data=et.data;
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
var js5 = et.data;
vars5.data0=(getObjects(js5,'class','rsImg'));
vars5.data1=(getObjects(js5,'class','u-c u-c--12o12 u-helper--margin-v-large'));
vars5.data2=(getObjects(js5,'id','call-seller'));
vars5.data3=(getObjects(js5,'class','u-ml'));
for(var i=0;i<vars5.data3[0].dt.length;i++){
adInfoVars5=vars5.data3[0].dt[i].content+' : '+vars5.data3[0].dd[i].p+'<br>';	
}
contentVars5=vars5.data1[1].div.p.content+'<br>'+vars5.data1[1].div.p;
for (var i=0;i<vars5.data0.length;i++) {
arrImg5.push(vars5.data0[i].src);
}
arr5.push({
image:arrImg5,
content:contentVars5,
phone:vars5.data2[0].span[2].content,
content2:adInfoVars5
});
//Ti.API.info(arr2[0].image[1]);
activityIndicator5.hide();
});
}
