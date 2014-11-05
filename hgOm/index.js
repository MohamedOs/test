/*Ti.include('https://raw.githubusercontent.com/MohamedOs/lib/master/htmlparser.js');
Ti.include('https://raw.githubusercontent.com/MohamedOs/lib/master/soupselect.js');

var activityIndicator = Titanium.UI.createActivityIndicator({
width:'80dip',
height:'80dip',
zIndex:1,
backgroundColor:'black',
borderRadius:7
});*/
var vars2={};
var arr2 = [];
var arrImg=[];
var arrContent=[];
function singlePost(link){
var contentVars="";
var adInfoVars="";
//activityIndicator.show();

var xhr = Titanium.Network.createHTTPClient();
xhr.onload = function() {
	 
var select = soupselect.select;

var body=xhr.responseText;
var handler = new htmlparser.DefaultHandler(function(err, dom) {
	if (err) {
		alert('Error: ' + err);
	} else {
		vars2.data=select(dom,'div.u-c.u-c--12o12.u-helper--margin-v-large div p');
		var image,content,phone,content2,content3;
		image=select(dom,'.rsImg');
		//Ti.API.info(image);
		if(image !="null"){
		for(var i=0;i<image.length;i++){
			arrImg.push(image[i].attribs.src);
		//	Ti.API.info(image[i].attribs.src);
		}
		}
		content=select(dom,'div.u-c.u-c--12o12.u-helper--margin-v-large div p');
		//Ti.API.info(content[0].children[0].data);
		phone=select(dom,'span.contact-number');
		//Ti.API.info(phone[0].children[0].data);
		content2=select(dom,'.u-ml__lbl');
		content3=select(dom,'.u-ml__val');
		for(var i=0;i<content2.length;i++){
			arrContent.push(content2[i].children[0].data+" : "+content3[i].children[0].data +"<br>");
		}
		if(phone){
			if(phone[0].children){
			var phoneVar=phone[0].children[0].data;	
			}else{
			var phoneVar="00";		
			}
		
		}else{
		var phoneVar="00";	
		}
		
	        arr2.push({
                image:arrImg,
                content:content[0].children[0].data,
                phone:phoneVar,
                content2:arrContent
                  });
                Ti.API.info(arr2[0]);
                //activityIndicator.hide();
	}
});
 
var parser = new htmlparser.Parser(handler);
parser.parseComplete(body);


};
xhr.onerror = function() {
    Titanium.API.info('error');
};
var url2="http://qatar.dubizzle.com"+link;
xhr.open("GET",url2);
xhr.send();
}
