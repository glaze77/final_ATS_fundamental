/*1.0.9*/function DopPlayer(){var l,s={};if(!document.createElement("canvas").getContext)return document.getElementById("resizer").innerHTML="",void(document.body.innerHTML="<h2>Oops! Your browser does not support HTML5. You need to upgrade your browser to view this content.</h2>");document.addEventListener("touchmove",function(t){t.preventDefault()},{passive:!1});try{document.createEvent("TouchEvent"),l=!0}catch(t){l=!1}var e={LoadingStart:function(){document.getElementById("loadingImg").style.display="block"},LoadingEnd:function(){document.getElementById("loadingImg").style.display="none"}};var r,t={playAnimationsOnLoad:!0,skipBlankSlide:!(Pcl=function(){function a(t){return 0<t.toString().indexOf("e")?Math.floor(t):t}this.r=function(){l&&(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))&&(window.iabho=document.createElement("div"),document.body.appendChild(window.iabho),window.iabho.style.height="1000px",setTimeout(void document.body.removeChild(window.iabho),100),window.scrollTo(0,1));var t=window.innerWidth,e=window.innerHeight,n=document.getElementById("player"),i=0<s.MaxScale?(d=e>s.Height*s.MaxScale?s.Height*s.MaxScale:e,t>s.Width*s.MaxScale?s.Width*s.MaxScale:t):(d=e,t),o=s.Width/s.Height<i/d?d/s.Height:i/s.Width;r.SetScale(o),0==s.MaxScale&&(i=s.Width*o),n.style.height=a(d)+"px",n.style.width=a(i)+"px",n.style.top=a(e-d)/2+"px",n.style.left=a(t-i)/2+"px",(n=document.getElementById("resizer")).style.webkitTransform="scale("+a(o)+")",n.style.MozTransform="scale("+a(o)+")",n.style.OTransform="scale("+a(o)+")",n.style.msTransform="scale("+a(o)+")";t=document.getElementById("contentHolder");t.style.height=a(s.Height*o)+"px",t.style.width=a(s.Width*o)+"px",t.style.marginLeft=a((i-o*s.Width)/2)+"px",t.style.marginTop=a((d-o*s.Height)/2)+"px";var d=document.getElementById("loadingImg");d.style.height=t.style.height,d.style.width=t.style.width,d.style.marginTop=t.style.marginTop,d.style.marginLeft=t.style.marginLeft,null!=document.getElementById("play")&&((n=document.getElementById("play")).style.height=a(o*s.Height)+"px",n.style.width=a(o*s.Width)+"px")}}),jumpTo:{step:0,playPrev:!0},disablePinchZoom:!1,dgradeAnim:!1,bcolor:void 0,respectHiddenSlideStatus:!0};(r=new DopPresentation(new function(){this.OnError=function(){},this.OnLoadingStart=function(){e.LoadingStart()},this.OnLoadingEnd=function(){e.LoadingEnd()},this.OnStartButtonShow=function(){},this.OnStartButtonClose=function(){},this.OnSlideTransitionEnd=function(t){},this.OnSlideChange=function(t){},this.OnMovToNxtAnim=function(){},this.OnMovToPrvAnim=function(){},this.OnPlayingStart=function(){},this.OnPlayingEnd=function(){},this.OnProgressChange=function(t){},this.OnSlideEnd=function(t,e){},this.OnClick=function(t){},this.OnSldOutlineLoad=function(t){},this.OnMediaPlay=function(t){},this.OnMediaPause=function(t){},this.InitaliseSettings=function(t){s=t,function(){e.LoadingStart(),document.getElementsByTagName("body")[0].style.backgroundColor=s.BackColr;var t=document.getElementById("resizer");t.style.height=s.Height+"px",t.style.width=s.Width+"px",(t=new Pcl).r(),window.onresize=t.r}()}},t)).SetRPath("data/"),(window.Presentation=r).LoadPres("pres",1)}window.onload=DopPlayer;