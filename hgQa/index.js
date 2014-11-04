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
		
		for (var i=0;i<titles.length;i++) {
		var imageVar,priceVar,titleVar,hrefVar;
		titleVar=titles[i].children[0].data;
		titleVar=titleVar.trim();
		hrefVar=hrefs[i].attribs.href;
		hrefVar=hrefVar.trim();
		if(photos[i].attribs){
		imageVar=photos[0].attribs.src;	
		imageVar=imageVar.trim();
		}else{
		imageVar="photos[0].attribs.src";
		imageVar=imageVar.trim();
		}
		if(prices[i]){
		priceVar=prices[0].children[0].data;	
		priceVar=priceVar.trim();
		}else{
		priceVar="prices[0].children[0].data";	
		priceVar=priceVar.trim();
		}
		 arr.push({
                  image:imageVar,
                  title:titleVar,
                  href:hrefVar,
                  price:priceVar
                });	
	//		
		}
		Ti.API.info(arr);
		
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
xhr.open("GET","http://qatar.dubizzle.com/ar/doha/jobs/search/");
xhr.send();
