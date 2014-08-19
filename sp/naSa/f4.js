var activityIndicator = Titanium.UI.createActivityIndicator({
        width:'80dip',
        height:'80dip',
        zIndex:1,
        backgroundColor:'black',
        borderRadius:7
    });

var varsS1={};
var arrS1 = [];   
function singlePost(link){
		activityIndicator.show();
var query='select * from html where url="'+link+'" and xpath="//*[@class=\'entry-content\']"';
	  Titanium.Yahoo.yql(query, function(e){
       varsS1.data=e.data.div.p;
       	 for(var i=0;i<e.data.div.p.length;i++){
       	 	varsS1.dataP+=e.data.div.p[i];
         }
         varsS1.dataP=varsS1.dataP.replace("undefined","");
         varsS1.dataP=varsS1.dataP.replace("[object Object]","");
         arrS1.push({
         image:e.data.div.p[0].img.src,
         content:varsS1.dataP,
            });
      	activityIndicator.hide();
   });    
}