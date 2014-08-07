
var city=this.cName;
if (Titanium.Platform.name == 'android') {

}else{
		$.win.setLeftNavButton($.about);

}
dataReqCat(1);


$.win.add(adMobView);


var images = [];
var image_url = null;
var image_label=null;
var image_view = null;
var container_view = null;
var image_label = null;
var json=null; 

$.table.footerView=$.b3;
function dataReqCat(pageNumber){
if (Titanium.Platform.name == 'android') {
   var activityIndicatorCat = Titanium.UI.createActivityIndicator({
       // style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
        font: {fontFamily:'Helvetica Neue', fontSize:18,fontWeight:'bold'},
        color: 'Black',
        message:"جارى التحميل ..",
        width:'auto',
        top:'90dp',
        left:'100dp' ,
        height:'80dp',
        zIndex:1
    });
}else{

var activityIndicatorCat = Titanium.UI.createActivityIndicator({
        style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
        font: {fontFamily:'Helvetica Neue', fontSize:18,fontWeight:'bold'},
        color: 'Black',
        message:"جارى التحميل ..",
        width:'auto',
        top:'90dp',
        left:'100dp' ,
        height:'80dp',
        zIndex:1
    });
    	
}
 $.win.add(activityIndicatorCat);   
  activityIndicatorCat.show();
 var tableData=[]; 
 var queryIndex='select * from html where url="http://qatar.dubizzle.com/ar/'+city+'/search/?page='+pageNumber+'" and xpath="//*[@class=\'d-listing__item\']"';
  Titanium.Yahoo.yql(queryIndex, function(e){
		
		for (var i=0;i<e.data.div.length;i++) {
			var result=e.data;
			var resultsTitle = e.data.div[i].div[1].div.div[0].a.title;
			var resultsSrc = e.data.div[i].div[0].div.a.img.src;
			var resultsSrchref = e.data.div[i].div[1].div.div[0].a.href;
			if(e.data.div[i].div[1].div.div[0].div.div[0]){
				var pricejson=e.data.div[i].div[1].div.div[0].div.div[0].p.content;
			}else{
				var pricejson="السعر غير متوفر";
			}

			//var resultsSrc = "http://haraj.com.sa/114160748/_%D9%84%D9%84%D8%A8%D9%8A%D8%B9_%D8%A5%D8%AA%D8%B4_%D8%A8%D9%8A_HP_Pavilion_%D8%B9%D8%A7%D8%A7%D8%AC%D9%84/";

			
			//var results = JSON.stringify(''+e.data.table[0].tr.td[0].table[1].tr[0].td.p.a.font.content+'');
			//Ti.API.info(resultsTitle);
			//Ti.API.info(resultsSrc);
			 if(i=="0" || i=="4" || i=="7"){
			  var row=Ti.UI.createTableViewRow({
	width:'100%',
	height:'180dip',
	backgroundColor:'grey',
	postIdRowImg:resultsSrchref,
	postIdRowTitle:resultsTitle,
	priceRow:pricejson
	    });
	         var titleLabel = Ti.UI.createLabel({
        text:resultsTitle,
	        font:{
	            fontSize:'18dip',
		    fontWeight:'bold'
		},
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
		height:'auto',
		//top: "5dip",
		//right:'5dip',
		//left:'5dip',
        //right:0,
		color:'black',
		touchEnabled:false,
		zIndex:2,
		backgroundColor:'white'
	    });
	    var titleView=Ti.UI.createView({
	    	width:'100%',
	    	height:'50dip',
	    	backgroundColor:'white',
	    	zIndex:1,
	    	opacity:0.5
	    });
	    titleView.add(titleLabel);

	    var imgImage=Ti.UI.createImageView({
	    	image:resultsSrc,
	    	width:'100%',
	    	height:'100%',
	    	//left:'10'
	    });
	    row.add(titleView);
	    row.add(imgImage);
		}
		else{
	    	var row=Ti.UI.createTableViewRow({
       	backgroundColor:'grey',
       	postIdRowImg:resultsSrchref,
	postIdRowTitle:resultsTitle,
		priceRow:pricejson

	    });
	         var titleLabel = Ti.UI.createLabel({
        text:resultsTitle,
	        font:{
	            fontSize:'14dip',
		    fontWeight:'bold'
		},
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
		height:'auto',
		//top: "10dip",
        right:'85dip',
		color:'black',
		touchEnabled:false,
		left:'5dip'
		//zIndex:1
	    });
	    var imgImage=Ti.UI.createImageView({
	    	image:resultsSrc,
	    	width:'70dp',
	    	height:'70dp',
	    	right:'10dip',
	    	top:'5dip',
	    	bottom:'5dip'
	    });
	     


	    row.add(titleLabel);
	    row.add(imgImage);
	    
	    }
		
	
		 //tableData.push(row);
     activityIndicatorCat.hide();	
			$.table.appendRow(row);
			
		}
		
			
		
	
	

		//$.table.setData(tableData);
});
 } 
 
 $.table.addEventListener('click',function(etv){
 	$.win3.title=$.table.data[0].rows[etv.index].postIdRowTitle;
 			//Ti.API.info();
 		
		var phoneNum;
		var images = [];
		var container_view=null;
		var image_view=null;
	var queryIndex2='select * from html where url="http://qatar.dubizzle.com'+$.table.data[0].rows[etv.index].postIdRowImg+'" and xpath="//*[@class=\'u-r\']"';
  Titanium.Yahoo.yql(queryIndex2, function(et){
  		if(et.data.div[7].div[1].div.div[1].div.img){
  			for (var i=0;i<et.data.div[7].div[1].div.div[1].div.img.length;i++) {
  	  		      //	Ti.API.info(et.data.div.p[0].img[i].src);
  	  		      	 container_view = Ti.UI.createView({});
                     image_view=Ti.UI.createImageView({
                        width:"100%",
                        height:'100%',
                        top:"-30dip",
                       // bottom:"50dip",
                         image:et.data.div[7].div[1].div.div[1].div.img[i].src
                         });
    
                     container_view.add(image_view);
                     images.push(container_view);
  	  		      }
  		
  		
  		}else{
  		container_view = Ti.UI.createView({});
                     image_view=Ti.UI.createImageView({
                        width:"100%",
                        height:'100%',
                         image:"def.png"
                         });
    
                     container_view.add(image_view);
                     images.push(container_view);
  	}
  	
  	var imageGallery = Titanium.UI.createScrollableView({
    views:images,
    showPagingControl:true,
    pagingControlHeight:30,
    maxZoomScale:4.0,
    currentPage:0,
    pagingControlOnTop:true,
    top:0,
    width:'100%',
    height:'50%',
    pagingControlColor:"#742844"
});


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
       
var data1=(getObjects(js,'class','u-c u-c--12o12 u-helper--margin-v-large'));  
var data2=(getObjects(js,'id','call-seller'));  


 if(data2[0]){
 	var ph=data2[0].span[2].content;
 	}else{
 		var ph="";
 	}
	if (Titanium.Platform.name == 'android') {
      $.webview.html=begin+'<div align="center"><h1>'+data1[1].div.p.content+'</h1></div>'+last;
  	 }else{
  	  $.webview.html=begin+'<div align="center">'+data1[1].div.p.content+'</div>'+last;
      }

var priceView=Ti.UI.createView({
	backgroundColor:'#742844',
	top:'40%',
	width:'100%',
	height:'10%',
	zIndex:2
	
});
var priceTreplace=$.table.data[0].rows[etv.index].priceRow;
priceTreplace=priceTreplace.replace(/ /g,"");
var priceTitle=Ti.UI.createLabel({
	text:priceTreplace,
	 color:'white',
	 width:'auto',
	 font:{
	            fontSize:'20dip',
		    fontWeight:'bold'
		},
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
		height:'auto',
});
priceView.add(priceTitle);
  $.win3.add(priceView);

var imageContact=Ti.UI.createView({
	backgroundColor:'#e3e3e3',
	top:'50%',
	width:'100%',
	height:'10%',
	zIndex:2
	
});
var contactBtn=Ti.UI.createView({
	width:'90%',
	height:'35dip',
	backgroundColor:'#742844',
borderColor: '#742844',
    borderRadius: 20,
    borderWidth: 1,
    	left:'10dip'
});
if (Titanium.Platform.name == 'android') {
var phone=Ti.UI.createLabel({
	text:'اتصل',
	 font:{fontSize:"20dip",fontWeight:'bold',fontFamily:'Helvetica Neue'},
	 color:'white',
	 zIndex:5
});
}else{
var phone=Ti.UI.createImageView({
	width:'25dip',
	height:'25dip',
	image:'pho.png',
	zIndex:5
});	
}

contactBtn.addEventListener('click',function(e){

	Titanium.Platform.openURL('tel:'+ph);
});

contactBtn.add(phone);
imageContact.add(contactBtn);
 $.win3.add(imageGallery);
  $.win3.add(imageContact);
  //Ti.API.info(et.data.div.div[1].div[3].div[0].div[2].p[0]);
 
  });
	  $.win3.add(adMobView2);
	  
    $.tab1.open($.win3);
});		

	$.tabgroup.open();


var catData=[
"حراج السيارت",
"حراج المعروض للبيع",
"حراج ايجار العقارات",
"حراج بيع العقارات",
"حراج الوظائف",
];

for(var i=0;i<catData.length;i++){
	var dataRow=Ti.UI.createTableViewRow({
		width:'100%',
		height:'100dip',
		backgroundColor:'#e3e3e3'
	});
	var titleCats=Ti.UI.createLabel({
		text:catData[i],
		font:{
	            fontSize:'16dip',
		    fontWeight:'bold'
		},
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
		height:'auto',
		color:'black',
		right:'20dip'
	});
	dataRow.add(titleCats);
	$.table2.appendRow(dataRow);
}

$.table2.addEventListener('click',function(e){
	
	if(e.index==0){
var queryIndexCat='select * from html where url="http://qatar.dubizzle.com/ar/'+city+'/cars/search/" and xpath="//*[@class=\'d-nav__cat d-nav__cat--show\']"';
	}else if(e.index==1){
var queryIndexCat='select * from html where url="http://qatar.dubizzle.com/ar/'+city+'/items-for-sale/search/" and xpath="//*[@class=\'d-nav__cat d-nav__cat--show\']"';
	}else if(e.index==2){
var queryIndexCat='select * from html where url="http://qatar.dubizzle.com/ar/'+city+'/property-for-rent/search/" and xpath="//*[@class=\'d-nav__cat d-nav__cat--show\']"';
	}else if(e.index==3){
var queryIndexCat='select * from html where url="http://qatar.dubizzle.com/ar/'+city+'/property-for-sale/search/" and xpath="//*[@class=\'d-nav__cat d-nav__cat--show\']"';
	}else if(e.index==4){
var queryIndexCat='select * from html where url="http://qatar.dubizzle.com/ar/'+city+'/jobs/search/" and xpath="//*[@class=\'d-nav__cat d-nav__cat--show\']"';
	}
  Titanium.Yahoo.yql(queryIndexCat, function(etCat){
  //	Ti.API.info(etCat.data);
  	for(var i=2;i<etCat.data.ul.li.length;i++){
	var dataRowCat=Ti.UI.createTableViewRow({
		width:'100%',
		height:'40dip',
		dataUrl:etCat.data.ul.li[i].a.href
		//backgroundColor:'#e3e3e3'
	});
	
	var titleCatsCat=Ti.UI.createLabel({
		text:etCat.data.ul.li[i].a.span[1].content,
		font:{
	            fontSize:'14dip',
		    fontWeight:'bold'
		},
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
		height:'auto',
		color:'black',
		right:'15dip'
	});
	dataRowCat.add(titleCatsCat);
	$.tableCat.appendRow(dataRowCat);
	
}
  });
  $.winCat.add(adMobView4);
	$.tab2.open($.winCat);
});
$.winCat.addEventListener('close',function(e){
	$.tableCat.data=[];
	$.tableCat.setData([]);});
$.tableCat.addEventListener('click',function(e){
dd(1);
function dd(pageNumber2){
	var queryIndexCatContent='select * from html where url="http://qatar.dubizzle.com'+$.tableCat.data[0].rows[e.index].dataUrl+'?page='+pageNumber2+'" and xpath="//*[@class=\'d-listing__item\']"';
  Titanium.Yahoo.yql(queryIndexCatContent, function(etCat){
  	
  //	Ti.API.info(etCat.data);
  	for(var i=0;i<etCat.data.div.length;i++){
  		
  		var resultsTitleC = etCat.data.div[i].div[1].div.div[0].a.title;
			var resultsSrcC = etCat.data.div[i].div[0].div.a.img.src;
			var resultsSrchrefC = etCat.data.div[i].div[1].div.div[0].a.href;
			if(etCat.data.div[i].div[1].div.div[0].div.div[0]){
				var pricejsonC=etCat.data.div[i].div[1].div.div[0].div.div[0].p.content;
			}else{
				var pricejsonC="السعر غير متوفر";
			}
			
		
	var dataRowCatContent=Ti.UI.createTableViewRow({
		width:'100%',
		height:'auto',
		dataUrl:resultsSrchrefC,
		postIdRowTitle:resultsTitleC,
		tableCatContentPrice:pricejsonC
		//backgroundColor:'#e3e3e3'
	});
	
	
	var titleCatsCatContent=Ti.UI.createLabel({
		text:resultsTitleC,
		color:'#000',
		right:"90dip",
		textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,

	});
	var imgCatsCatContent=Ti.UI.createImageView({
		image:resultsSrcC,
		right:'10dip',
		width:'70dip',
		height:'70dip'
	});
	dataRowCatContent.add(titleCatsCatContent);
	dataRowCatContent.add(imgCatsCatContent);
	$.tableCatContent.appendRow(dataRowCatContent);
	
}
  });
}
$.tableCatContent.footerView=$.b4;
	
var it2=1;
$.b4.addEventListener('click',function(e){
	more2();
});
function more2(){	
 it2++;
 dd(it2);
}
$.winCatContent.add(adMobView5);
	$.tab2.open($.winCatContent);
});
$.winCatContent.addEventListener('close',function(e){
		$.tableCatContent.data=[];
	$.tableCatContent.setData([]);
});
$.tableCatContent.addEventListener('click',function(etv){
	
$.win4.title=$.tableCatContent.data[0].rows[etv.index].postIdRowTitle;
 			//Ti.API.info();
 		
		var phoneNum;
		var images = [];
		var container_view=null;
		var image_view=null;
	var queryIndex2='select * from html where url="http://qatar.dubizzle.com'+$.tableCatContent.data[0].rows[etv.index].dataUrl+'" and xpath="//*[@class=\'u-r\']"';
  Titanium.Yahoo.yql(queryIndex2, function(et){
     if(et.data.div[7].div[1].div.div[1].div.img){
  			for (var i=0;i<et.data.div[7].div[1].div.div[1].div.img.length;i++) {
  	  		      //	Ti.API.info(et.data.div.p[0].img[i].src);
  	  		      	 container_view = Ti.UI.createView({});
                     image_view=Ti.UI.createImageView({
                        width:"100%",
                        height:'100%',
                        top:"-30dip",
                       // bottom:"50dip",
                         image:et.data.div[7].div[1].div.div[1].div.img[i].src
                         });
    
                     container_view.add(image_view);
                     images.push(container_view);
  	  		      }
  		
  		
  		}else{
  		container_view = Ti.UI.createView({});
                     image_view=Ti.UI.createImageView({
                        width:"100%",
                        height:'100%',
                         image:"def.png"
                         });
    
                     container_view.add(image_view);
                     images.push(container_view);
  	}
  	
  	var imageGallery = Titanium.UI.createScrollableView({
    views:images,
    showPagingControl:true,
    pagingControlHeight:30,
    maxZoomScale:4.0,
    currentPage:0,
    pagingControlOnTop:true,
    top:0,
    width:'100%',
    height:'50%',
    pagingControlColor:"#742844"
});


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


var data1=(getObjects(js,'class','u-c u-c--12o12 u-helper--margin-v-large'));  
var data2=(getObjects(js,'id','call-seller'));  


 if(data2[0]){
 	var ph=data2[0].span[2].content;
 	}else{
 		var ph="";
 	}
	if (Titanium.Platform.name == 'android') {
      $.webview4.html=begin+'<div align="center"><h1>'+data1[1].div.p.content+'</h1></div>'+last;
  	 }else{
  	  $.webview4.html=begin+'<div align="center">'+data1[1].div.p.content+'</div>'+last;
      }
      
      
var priceView=Ti.UI.createView({
	backgroundColor:'#742844',
	top:'40%',
	width:'100%',
	height:'10%',
	zIndex:2
	
});
var priceTreplace2=$.tableCatContent.data[0].rows[etv.index].tableCatContentPrice;
priceTreplace2=priceTreplace2.replace(/ /g,"");
var priceTitle=Ti.UI.createLabel({
	text:priceTreplace2,
	 font:{fontSize:"20dip",fontWeight:'bold',fontFamily:'Helvetica Neue'},
	 color:'white'
});
priceView.add(priceTitle);
  $.win4.add(priceView);

var imageContact=Ti.UI.createView({
	backgroundColor:'#e3e3e3',
	top:'50%',
	width:'100%',
	height:'10%',
	zIndex:2
	
});
var contactBtn=Ti.UI.createView({
	width:'90%',
	height:'35dip',
	backgroundColor:'#742844',
borderColor: '#742844',
    borderRadius: 20,
    borderWidth: 1,
    	left:'10dip'
});
if (Titanium.Platform.name == 'android') {
var phone=Ti.UI.createLabel({
	text:'اتصل',
	 font:{fontSize:"20dip",fontWeight:'bold',fontFamily:'Helvetica Neue'},
	 color:'white',
	 zIndex:5
});
}else{
var phone=Ti.UI.createImageView({
	width:'25dip',
	height:'25dip',
	image:'pho.png',
	zIndex:5
});	
}

contactBtn.addEventListener('click',function(e){
	//alert(ph);
	Titanium.Platform.openURL('tel:'+ph);
	
});

contactBtn.add(phone);
imageContact.add(contactBtn);
 $.win4.add(imageGallery);
  $.win4.add(imageContact);
  //Ti.API.info(et.data.div.div[1].div[3].div[0].div[2].p[0]);
 
  });
	  $.win4.add(adMobView6);
	  
    $.tab2.open($.win4);
	
	
	
	
	
});

var it=1;
$.b3.addEventListener('click',function(e){
	more();
});
function more(){	
 it++;
 dataReqCat(it);
}	
