var activityIndicator3 = Titanium.UI.createActivityIndicator({
        width:'80dip',
        height:'80dip',
        zIndex:1,
        backgroundColor:'black',
        borderRadius:7
    });

 var varsS3={};
var arrS3 = [];   
function singlePost3(link){
			activityIndicator3.show();

var query='select * from html where url="'+link+'" and xpath="//*[@id=\'news_details\']"';
	  Titanium.Yahoo.yql(query, function(e){
       varsS3.data=e.data.div;
      
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
  
  
  var data2=(getObjects(varsS3.data,'class','mwdo3_img')); 
  for(var i=0;i<e.data.div.p.length;i++){
            varsS3.dataP+=e.data.div.p[i];
        }
         varsS3.dataP=varsS3.dataP.replace("undefined","");
         varsS3.dataP=varsS3.dataP.replace("[object Object]","");
         arrS3.push({
         image:data2[0].src,
         content:varsS3.dataP,
            });
     //  Ti.API.info(arrS2);
   activityIndicator3.hide();

   });    
}