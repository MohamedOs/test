var activityIndicator4 = Titanium.UI.createActivityIndicator({
        width:'80dip',
        height:'80dip',
        zIndex:1,
        backgroundColor:'black',
        borderRadius:7
    });
var arr4 = [];
var vars4={};
function pri4(priv,pageNumber){
	activityIndicator4.show();
	//alert("1");
	//Ti.API.info("sad"+vars.data);
	vars4.city=priv;
	var queryIndexF14='select * from html where url="http://saudi.dubizzle.com'+priv+'?page='+pageNumber+'" and xpath="//*[@class=\'d-listing__item\']"';
  Titanium.Yahoo.yql(queryIndexF14, function(e){
  	vars4.data=e.data;
  	//Ti.API.info(e.data);
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
  
var ds4 = vars4.data;
       
vars4.d1=(getObjects(ds4,'class','u-img__img'));  
vars4.d2=(getObjects(ds4,'class','d-listing__name u-helper--no-margin'));  
vars4.d3=(getObjects(ds4,'class','d-listing__amount'));  
for (var i=0;i<vars4.d2.length;i++) {
arr4.push({
        image:vars4.d1[i].src,
        title:vars4.d2[i].title,
        href:vars4.d2[i].href,
        price:vars4.d3[i].p.content
    });
}    
//Ti.API.info(vars4.data);
    activityIndicator4.hide();
  	//alert("2");
  	//Ti.API.info(vars.data);
  });
}
