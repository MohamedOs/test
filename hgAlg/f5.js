var activityIndicator5 = Titanium.UI.createActivityIndicator({
width:'80dip',
height:'80dip',
zIndex:1,
backgroundColor:'black',
borderRadius:7
});

var vars5={};
var arr5 = [];
var arrImg5=[];
function singlePost5(link){
  	var contentVars5="";
var adInfoVars5="";
activityIndicator5.show();
var queryIndex5='select * from html where url="http://algerie.dubizzle.com'+link+'" and xpath="//*[@class=\'u-r\']"';
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
adInfoVars5+=vars5.data3[0].dt[i].content+' : '+vars5.data3[0].dd[i].p+'<br>';	
}
contentVars5=vars5.data1[1].div.p.content+'<br>'+vars5.data1[1].div.p;
contentVars5=contentVars5.replace("[object Object]"," ");
adInfoVars5=adInfoVars5.replace("[object Object]"," ");
contentVars5=contentVars5.replace("[object Object]"," ");
adInfoVars5=adInfoVars5.replace("[object Object]"," ");

if(vars5.data0.length !=0){
for (var i=0;i<vars5.data0.length;i++) {
arrImg5.push(vars5.data0[i].src);
}}else{
for (var i=0;i<2;i++) {
arrImg5.push("http://www.qmraa.net/up/uploads/91b2ee8282.jpg");
}
}
var dataSpan5;
if(vars5.data2[0]){
if(vars5.data2[0].span[2]){
dataSpan5=vars5.data2[0].span[2].content;	
}else{
dataSpan5="00";	
}	
}else{
dataSpan5="00";	
}
arr5.push({
image:arrImg5,
content:contentVars5,
phone:dataSpan5,
content2:adInfoVars5
});
Ti.API.info(arr5);
activityIndicator5.hide();
});
}
