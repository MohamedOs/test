Ti.include('https://raw.githubusercontent.com/MohamedOs/lib/master/htmlparser.js');
Ti.include('https://raw.githubusercontent.com/MohamedOs/lib/master/soupselect.js');


var activityIndicatorCatt = Titanium.UI.createActivityIndicator({
width:'80dip',
height:'80dip',
zIndex:1,
backgroundColor:'black',
borderRadius:7
});
var arr = [];
var vars={};
function pri(priv,pageNumber){
activityIndicatorCatt.show();
//alert("1");
//Ti.API.info("sad"+vars.data);
vars.city=priv;
var queryIndexF1='select * from html where url="http://qatar.dubizzle.com/ar/'+priv+'/search/?page='+pageNumber+'&diagnostics=true" and xpath="//*[@class=\'d-listing__item\']"';
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
Ti.API.info(arr);
activityIndicatorCatt.hide();
//alert("2");
Ti.API.info(vars.data);
});
}



var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() {
	 
var select = soupselect.select;
 /*
var body = '<html><head><title>Test</title></head>'
		 + '<body>'
		 + '<img src="http://l.yimg.com/mq/i/home/HKGallery.gif" />'
		 + '<div id="block">'
		 + '	<div class="row">Row 1</div>'
		 + '	<div class="row">Row 2</div>'
		 + '</div>'
		 + '</body></html>';
 */
var body=xhr.responseText;
var handler = new htmlparser.DefaultHandler(function(err, dom) {
	if (err) {
		alert('Error: ' + err);
	} else {
		var titles=select(dom,'a.d-listing__name');
		for (var i=0;i<titles.length;i++) {
		  arr.push({
                  image:photos[i].attribs.src,
                  title:titles[i].children[0].data,
                  href:hrefs[i].attribs.href,
                  price:prices[i].children[0].data
                });	
		Ti.API.info(arr);	
		}
		var photos=select(dom,'img.u-img__img');
		//Ti.API.info(photos[0].attribs.src);
		var titles=select(dom,'a.d-listing__name');
		//Ti.API.info(titles[0].children[0].data);
		var prices=select(dom,'div.d-listing__amount');
		//Ti.API.info(prices[0].children[0].data);
		var hrefs=select(dom,'a.d-listing__name');
		//Ti.API.info(hrefs[0].attribs.href);
		var places=select(dom,'div.d-listing__meta');
		//Ti.API.info(places[0].children[1].children[0].data+' - '+places[0].children[3].children[0].data);
		var dates=select(dom,'span.d-listing__date');
		//Ti.API.info(dates[0].children[0].data);
		//var rows=select(dom,'#header');
		//Ti.API.info(rows[0]);
		//var rows=select(dom,'div.side');
		//Ti.API.info(rows);
		/*var rows=select(dom,'.title');
		Ti.API.info(rows[0]);
		Ti.API.info("rows[0]");
		var rows1=select(dom,'a.title');
		Ti.API.info(rows1[0]);
	    Ti.API.info("rows[1]");
		var rows2=select(dom,'a');
		Ti.API.info(rows2[0]);*/
		/*
		var img = select(dom, 'img');
 
		img.forEach(function(img) {
			alert('src: ' + img.attribs.src);
		});
		*/
 /*
		var rows = select(dom, 'div.cnn_hppersonalhdr');
 
		rows.forEach(function(row) {
			Ti.API.info(row.children[0].data);
		});*/
	}
});
 
var parser = new htmlparser.Parser(handler);
parser.parseComplete(body);





   // Titanium.API.info(xhr.responseText);
};
xhr.onerror = function() {
    Titanium.API.info('error');
};
xhr.open("GET","http://qatar.dubizzle.com/ar/doha/search/");
xhr.send();
