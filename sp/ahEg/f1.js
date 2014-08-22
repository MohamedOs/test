var activityIndicatorCatt = Titanium.UI.createActivityIndicator({
        width:'80dip',
        height:'80dip',
        zIndex:1,
        backgroundColor:'black',
        borderRadius:7
    });

   var vars={};  		var arr = []; 
function pri(pageNumber){
activityIndicatorCatt.show();
var queryIndex='select * from html where url="http://hihi2.com/category/alahli-egypt-news/page/'+pageNumber+'" and xpath="//*[@id=\'content-loop\']"';
  Titanium.Yahoo.yql(queryIndex, function(e){
	 var res2=e.data;
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
  
var js = res2;
       
var data1=(getObjects(js,'rel','bookmark'));  
var data2=(getValues(js,'src'));  
var data3=(getObjects(js,'class','entry-title'));  

for (var i=0,a=0;i<data2.length,a<data2.length;i++,a++) {
arr.push({
        image:data2[i],
        title:data3[i].a.title,
        href:data1[a].href,
    });
}  
	activityIndicatorCatt.hide();

//Ti.API.info(arr); 
});
}
