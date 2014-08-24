var activityIndicatorCatt3 = Titanium.UI.createActivityIndicator({
        width:'80dip',
        height:'80dip',
        zIndex:1,
        backgroundColor:'black',
        borderRadius:7
    });

    var arr3= [];
    var vars3={};
function pri3(pageNumber){
		
	activityIndicatorCatt3.show();
 var queryIndex='select * from html where url="http://superkoora.com/index.php?ref=akhbar&id=52&page='+pageNumber+'&" and xpath="//*[@id=\'list_box\']"';
  Titanium.Yahoo.yql(queryIndex, function(en){
  	  	vars3.data=en.data;

	for(var i=0;i<en.data.div.length;i++){
	 	arr3.push({
        image:en.data.div[i].a.img.src,
        title:en.data.div[i].h2.a.content,
        href:"http://superkoora.com/"+en.data.div[i].h2.a.href,
    });
}
	activityIndicatorCatt3.hide();

//Ti.API.info(arr3); 
});
}