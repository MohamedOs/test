var activityIndicator = Titanium.UI.createActivityIndicator({
width:'80dip',
height:'80dip',
zIndex:1,
backgroundColor:'black',
borderRadius:7
});

var vars2={};
var arr2 = [];
var arrImg=[];
function singlePost(link){
  	var contentVars="";
var adInfoVars="";
activityIndicator.show();
var queryIndex2='select * from html where url="http://oman.dubizzle.com'+link+'" and xpath="//*[@class=\'u-r\']"';
Titanium.Yahoo.yql(queryIndex2, function(et){
//Ti.API.info(et.data);
vars2.data=et.data;
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
var js = et.data;
vars.data0=(getObjects(js,'class','rsImg'));
vars.data1=(getObjects(js,'class','u-c u-c--12o12 u-helper--margin-v-large'));
vars.data2=(getObjects(js,'id','call-seller'));
vars.data3=(getObjects(js,'class','u-ml'));
Ti.API.info(vars.data3[0].dt);
for(var i=0;i<vars.data3[0].dt.length;i++){
adInfoVars+=vars.data3[0].dt[i].content+' : '+vars.data3[0].dd[i].p+'<br>';	
}
contentVars=vars.data1[1].div.p.content+'<br>'+vars.data1[1].div.p;
contentVars=contentVars.replace("[object Object]"," ");
adInfoVars=adInfoVars.replace("[object Object]"," ");
contentVars=contentVars.replace("[object Object]"," ");
adInfoVars=adInfoVars.replace("[object Object]"," ");
if(vars.data0.length !=0){
for (var i=0;i<vars.data0.length;i++) {
arrImg.push(vars.data0[i].src);
}}else{
for (var i=0;i<2;i++) {
arrImg.push("http://www.qmraa.net/up/uploads/91b2ee8282.jpg");
}
}
var dataSpan;
if(vars.data2[0]){
if(vars.data2[0].span[2]){
dataSpan=vars.data2[0].span[2].content;	
}else{
dataSpan="00";	
}	
}else{
dataSpan="00";	
}
arr2.push({
image:arrImg,
content:contentVars,
phone:dataSpan,
content2:adInfoVars
});
Ti.API.info(arr2[0]);
activityIndicator.hide();
});
}
