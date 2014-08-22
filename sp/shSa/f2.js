var activityIndicatorCatt2 = Titanium.UI.createActivityIndicator({
        width:'80dip',
        height:'80dip',
        zIndex:1,
        backgroundColor:'black',
        borderRadius:7
    });

	var arr2= [];
    var vars2={};    
function pri2(pageNumber){

	activityIndicatorCatt2.show();
 var queryIndex='select * from html where url="http://superkoora.com/index.php?ref=akhbar&id=44&page='+pageNumber+'&" and xpath="//*[@id=\'list_box\']"';
  Titanium.Yahoo.yql(queryIndex, function(en){
	 vars2.data=en.data;
	 var resNews=en.data;
	 for(var i=0;i<en.data.div.length;i++){
	 	arr2.push({
        image:en.data.div[i].a.img.src,
        title:en.data.div[i].h2.a.content,
        href:"http://superkoora.com/"+en.data.div[i].h2.a.href,
    });
}
	activityIndicatorCatt2.hide();

//Ti.API.info(arr2); 
});
}
