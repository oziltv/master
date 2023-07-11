<script>/*<![CDATA[*/
function searchToggle() {
   var element = document.getElementById("search");
   element.classList.toggle("block");
}
function copyFunction(){document.getElementById("getlink").select(),document.execCommand("copy"),document.getElementById("share-notif").innerHTML="<span>Link copied!</span>" };
function changeFont(){var x=document.getElementById('post-font');if(x.classList)x.classList.toggle('active');else{var z=x.className.split(' ');0<=(t=z.indexOf('active'))?z.splice(t,1):z.push('active'),x.className=z.join(' ')}};

function myFunction() {
   var element = document.getElementById("mdl-download");
   element.classList.toggle("on");
}
/*]]>*/
      </script>
<script async='async'>
//<![CDATA[
(function () {
  const e = document.querySelectorAll(".DagPlayOpt");
  e.length > 0 && (e.forEach(t => {
    t.addEventListener("click", function (t) {
      const n = t.currentTarget,
        c = n.dataset.embed;
      document.querySelector("#pembed iframe").src = c, document.querySelector("#pembed iframe").contentWindow.location.replace(c), e.forEach(e => e.classList.remove("on")), n.classList.add("on");
      const o = document.querySelectorAll(".resIn");
      o.length > 0 && o.forEach(e => {
        e.id == n.dataset.id ? e.style.display = "block" : e.style.display = "none"
      })
    })
  }), e[0].click());
  const t = document.getElementById("shadow"),
    n = document.querySelector(".DagLight");
  t && n && (t.style.display = "none", n.addEventListener("click", function (e) {
    const n = e.currentTarget;
    t.style.height = document.body.scrollHeight, "none" == t.style.display ? (n.querySelector("span").innerHTML = "Turn on Light", n.classList.add("turnedOff"), t.style.display = "block") : (n.querySelector("span").innerHTML = "Turn off Light", n.classList.remove("turnedOff"), t.style.display = "none")
  }));
  const c = document.querySelector(".DagShre");
  c.addEventListener("click", function (e) {
    const t = document.querySelector(".gta-ms");
    t && t.classList.toggle("expand")
  })
})();

  function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("serverEpisode");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("serverOpen").click();
//]]>
</script>
<script>document.querySelector('.post-body').querySelector('.separator').firstElementChild.remove()</script>
<script>/*<![CDATA[*/ 
  document.getElementById('extra-target').appendChild(
    document.getElementById('extra-info')
  ); 
/*]]>*/</script>
<script>/*<![CDATA[*/ 
  document.getElementById('syn-target').appendChild(
    document.getElementById('synopsis')
  ); 
/*]]>*/</script>
<script>/*<![CDATA[*/ 
function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
/*]]>*/</script>
<script>
      //<![CDATA[
var uri = window.location.toString();if (uri.indexOf("?m=1","?m=1") > 0) {var clean_uri = uri.substring(0, uri.indexOf("?m=1"));window.history.replaceState({}, document.title, clean_uri);}
//]]>
    </script>
<script>
  /*<![CDATA[*/
  /* Countdown Discount Script by Fineshop Design */
  const dayElm = document.querySelector('.cdBox .days'),
    hourElm = document.querySelector('.cdBox .hours'),
    minuteElm = document.querySelector('.cdBox .minutes'),
    secondElm = document.querySelector('.cdBox .seconds'),
    cdCont = document.querySelector('.cdCont'),
    endDate = new Date('April 28 2022 15:30:00 GMT+07:30');
  
  let eventEnded = !1;
  const updateTimer = () => {
    let e = new Date;
    var t = endDate.getTime() - e.getTime();
    t <= 1e3 && (eventEnded = !0);
    var n = 36e5,
      o = Math.floor(t / 864e5),
      a = Math.floor(t % 864e5 / n),
      n = Math.floor(t % n / 6e4),
      t = Math.floor(t % 6e4 / 1e3);
    dayElm.innerText = o < 10 ? '0' + o :o, hourElm.innerText = a < 10 ? '0' + a :a, minuteElm.innerText = n < 10 ? '0' + n :n, secondElm.innerText = t < 10 ? '0' + t :t
  };
  setInterval(() => {
    eventEnded ? (cdCont.classList.add('ended')) : updateTimer()
  }, 1e3);
  /*]]>*/
</script>
<script>//<![CDATA[
function displayNum(){
var dataLocal = JSON.parse(localStorage.getItem('bookmark'));
let num = 0;
for(var item in dataLocal){
num++
}
$('.numshow').html(num);
}
displayNum();
    //]]></script>
<script>//<![CDATA[
var limitBookmark = 100;
var bookmark = (function(){
list = [];

//Structure Push to Object New Item
function Item(id,name,status,type,link,img){
	this.id = id;
	this.name = name;
    this.status = status;
	this.type = type;
    this.link = link;
	this.img = img;
}

//Event Saving to Local Storage
function setBookmark(){
	localStorage.setItem('bookmark', JSON.stringify(list));
}

function loadBookmark() {
    list = JSON.parse(localStorage.getItem('bookmark'));
}

if (localStorage.getItem("bookmark") != null) {
    loadBookmark();
}

obj = {};
//Add New Item Object to Array
obj.addItemTobookmark = function(id,name,status,type,link,img) {
    var item = new Item(id,name,status,type,link,img),
    itemList = list;
    if(itemList != null){
    same = itemList.find(item =>{return item.id == id;});
    if(list.length<limitBookmark){
     if(!same){
    	list.push(item);
    	setBookmark();
      }
     }
    }else{
    	list.push(item);
    	setBookmark();
    }
}

//Remove Bookmark    
obj.removeThisItem = function(id) {
    for(var item in list) {
      if(list[item].id === id) {
        list.splice(item, 1);
        break;
      }
    }
    setBookmark();
  }
  
  return obj;
})();

$('.bookmark').each(function(event) {
const getData = JSON.parse(localStorage.getItem('bookmark'));
for(var i in getData){
	if(getData[i].id == $(this).data('id')){
     $(this).html('Bookmarked')
     $(this).addClass('bookmarked')
    }
}
  $(this).click(function(){
const list = JSON.parse(localStorage.getItem('bookmark'));
  //Retrieve Data From Post
  	const id = $(this).data('id'),
  	name = $('.info .title').text().replace('\n',''),
    link = location.protocol + '//' + location.hostname +  location.pathname,
    img = $('#info .thumb div img').attr('src'),
    status = $('.meta .status span').text().replace('\n',''),
    type = $('.meta .type span a').text().replace('\n','');
    
  //Set To Function Bookmark
if(list == null){
  if(!$(this).hasClass('bookmarked')){
    	bookmark.addItemTobookmark(id,name,status,type,link,img);
  		$(this).addClass('bookmarked')
  		$(this).html('Bookmarked')
  }else{
  	bookmark.removeThisItem(id);
  	$(this).html('Bookmark')
  	$(this).removeClass('bookmarked')
  }
}else{
  if(!$(this).hasClass('bookmarked')){
if(list.length<limitBookmark){
    	bookmark.addItemTobookmark(id,name,status,type,link,img);
  		$(this).addClass('bookmarked')
  		$(this).html('Bookmarked')
}
  }else{
  	bookmark.removeThisItem(id);
  	$(this).html('Bookmark ')
  	$(this).removeClass('bookmarked')
  }
}
displayNum();
  })
});
     //]]></script>
<script>
$(document).ready(function(){
  $(".Report").click(function(){
    $("body").toggleClass("rep");
  });
});
</script>
<script type='text/javascript'>
//<![CDATA[
function showLucky(root){
    var feed = root.feed;
    var entries = feed.entry || [];
    var entry = feed.entry[0];
      for (var j = 0; j < entry.link.length; ++j) {
       if (entry.link[j].rel == "alternate") { 
       window.location = entry.link[j].href; 
       } 
      } 
   }

function fetchLuck(luck){
    script = document.createElement('script');
    script.src = '/feeds/posts/summary?start-index='+luck+'&max-results=1&alt=json-in-script&callback=showLucky';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
   }
function readLucky(root){
    var feed = root.feed;
    var total = parseInt(feed.openSearch$totalResults.$t,10);
    var luckyNumber = Math.floor(Math.random()*total);
    luckyNumber++;
    fetchLuck(luckyNumber);
    }
function feelingLucky(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '/feeds/posts/summary?max-results=0&alt=json-in-script&callback=readLucky';
    document.getElementsByTagName('head')[0].appendChild(script);
    }
//]]>
</script> 
