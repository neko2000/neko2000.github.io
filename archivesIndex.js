var classicMode = false ;
var summary = 20;
var indent = 3;
imgr = new Array();
imgr[0] = "http://sites.google.com/site/fdblogsite/Home/nothumbnail.gif";
showRandomImg = true;
aBold = true;
summaryPost = 170; 
summaryTitle = 25; 
numposts1 = 6; 
numposts2 = 8;
var classicMode = false ;
var summary = 50;
var indent = 3;
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();

function stripHtmlTags(s,max){return s.replace(/<.*?>/ig, '').split(/\s+/).slice(0,max-1).join(' ')}

function createSummaryAndThumb(pID,title,url,date,comment,author,tag,authurl){
 var posturl= url;
 var authorurl= authurl;
 var title=title;
 var date = date;
 var comment = comment;
 var tag = tag;
 var div = document.getElementById(pID);
 var img = div.getElementsByTagName("img");
 
 var content1 = div.innerHTML.replace(/<img.*?>/ig,'').replace(/<iframe.*?>/ig,''); 
 var arr = content1.split(/<br\s*\/?>/);
 var content = arr[0]+arr.slice(1,-1).join('<br>')+arr.slice(-1);
  
  
var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
var n = month[date.split('/')[0]];
 var date1 = date.split('/')[1];
var year = date.split('/')[2];
var thumb1;


 
if(img.length ==1) {
	var imgurl=img[0].src;
	var thumb = '<div class="post-image"><a href="'+posturl+'"><img class="thumb" width="940" height="987" src="'+imgurl+'"></a></div>';
	var summary1 = '<header class="post-header"><div class="labelhome">'+tag+'</div><h2 class="entry-title"><a href='+ posturl +'>'+title+'</a></h2></header><div class="cen"><div class="post-details"><span class="auth"> <i class="fa fa-user"></i> &nbsp;&nbsp;<a href='+ authorurl +'>'+author+'</a></span> <span class="post-da"> <i class="fa fa-clock-o"></i> &nbsp;&nbsp;'+date+'</span><span class="post-com"> <i class="fa fa-comments-o"></i> &nbsp;&nbsp; '+comment+' Comments</span></div></div>'+thumb+'<div class="entry-content clear"><div class="intro-text">'+stripHtmlTags(content,35)+' </div><div class="post-footer"><div class="pull-left"><a class="read-more" href="'+posturl+'">Continue Reading</a></div><div class="pull-right"></div></div></div>';

}else {
	var summary1 = '<header class="post-header"><div class="labelhome">'+tag+'</div><h2 class="entry-title"><a href='+ posturl +'>'+title+'</a></h2></header><div class="cen"><div class="post-details"><span class="auth"> <i class="fa fa-user"></i> &nbsp;&nbsp;<a href='+ authorurl +'>'+author+'</a></span> <span class="post-da"> <i class="fa fa-clock-o"></i> &nbsp;&nbsp;'+date+'</span><span class="post-com">  <i class="fa fa-comments-o"></i>&nbsp;&nbsp; '+comment+' Comments</span></div></div><div class="entry-content clear"><div class="intro-text">'+stripHtmlTags(content,35)+' </div><div class="post-footer"><div class="pull-left"><a class="read-more" href="'+posturl+'">Continue Reading</a></div><div class="pull-right"></div></div></div>';

}
   

 div.innerHTML = summary1;
 div.style.display = "block";
 var elem = document.getElementsByClassName("separator");
 for (var i=0; i< elem.length; i++){
 elem[i].innerHTML='';
 }


}//createSummaryAndThumb



function pageNavi(o){var m=location.href,l=m.indexOf("/search/label/")!=-1,a=l?m.substr(m.indexOf("/search/label/")+14,m.length):"";a=a.indexOf("?")!=-1?a.substr(0,a.indexOf("?")):a;var g=l?"/search/label/"+a+"?updated-max=":"/search?updated-max=",k=o.feed.entry.length,e=Math.ceil(k/pageNaviConf.perPage);if(e<=1){return}var n=1,h=[""];l?h.push("/search/label/"+a+"?max-results="+pageNaviConf.perPage):h.push("/?max-results="+pageNaviConf.perPage);for(var d=2;d<=e;d++){var c=(d-1)*pageNaviConf.perPage-1,b=o.feed.entry[c].published.$t,f=b.substring(0,19)+b.substring(23,29);f=encodeURIComponent(f);if(m.indexOf(f)!=-1){n=d}h.push(g+f+"&max-results="+pageNaviConf.perPage)}pageNavi.show(h,n,e)}pageNavi.show=function(f,e,a){var d=Math.floor((pageNaviConf.numPages-1)/2),g=pageNaviConf.numPages-1-d,c=e-d;if(c<=0){c=1}endPage=e+g;if((endPage-c)<pageNaviConf.numPages){endPage=c+pageNaviConf.numPages-1}if(endPage>a){endPage=a;c=a-pageNaviConf.numPages+1}if(c<=0){c=1}var b='<span class="pages">Pages '+e+' of '+a+"</span> ";if(c>1){b+='<a href="'+f[1]+'">'+pageNaviConf.firstText+"</a>"}if(e>1){b+='<a href="'+f[e-1]+'">'+pageNaviConf.prevText+"</a>"}for(i=c;i<=endPage;++i){if(i==e){b+='<span class="current">'+i+"</span>"}else{b+='<a href="'+f[i]+'">'+i+"</a>"}}if(e<a){b+='<a href="'+f[e+1]+'">'+pageNaviConf.nextText+"</a>"}if(endPage<a){b+='<a href="'+f[a]+'">'+pageNaviConf.lastText+"</a>"}document.write(b)};(function(){var b=location.href;if(b.indexOf("?q=")!=-1||b.indexOf(".html")!=-1){return}var d=b.indexOf("/search/label/")+14;if(d!=13){var c=b.indexOf("?"),a=(c==-1)?b.substring(d):b.substring(d,c);document.write('<script type="text/javascript" src="/feeds/posts/summary/-/'+a+'?alt=json-in-script&callback=pageNavi&max-results=99999"><\/script>')}else{document.write('<script type="text/javascript" src="/feeds/posts/summary?alt=json-in-script&callback=pageNavi&max-results=99999"><\/script>')}})();
