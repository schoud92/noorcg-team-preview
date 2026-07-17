window.addEventListener('load',function(){setTimeout(function(){
"use strict";
/* banner (in flow, scrolls away) */
if(!document.querySelector('.ps-banner')){
 var b=document.createElement('div');b.className='ps-banner';b.setAttribute('role','region');b.setAttribute('aria-label','Announcement');
 b.innerHTML='<a class="ps-line" href="/noorcg-team-preview/contact.html?topic=pointshift"><b>PointShift<\/b><span class="ps-long"> — our Microsoft 365 &amp; SharePoint migration platform is rolling out soon<\/span><span class="ps-short"> — M365 &amp; SharePoint migrations<\/span><span class="ps-go"> · Get early access ↗<\/span><\/a><button class="ps-x" aria-label="Dismiss announcement">×<\/button>';
 document.body.insertAdjacentElement('afterbegin',b);
 document.documentElement.style.setProperty('--banner-h',b.offsetHeight+'px');
 b.querySelector('.ps-x').addEventListener('click',function(){b.remove();document.documentElement.style.setProperty('--banner-h','0px');fixNav();});
}
/* nav pins to top on scroll */
var nav=document.querySelector('.hero-nav');
var spacer=null,navTop=0;
if(nav){
 spacer=document.createElement('div');spacer.className='nav-spacer';
 nav.insertAdjacentElement('afterend',spacer);
}
function measure(){if(!nav)return;nav.classList.remove('nav-fixed');spacer.classList.remove('on');navTop=nav.getBoundingClientRect().top+window.scrollY;fixNav();}
function fixNav(){
 if(!nav)return;
 var y=window.scrollY||document.documentElement.scrollTop;
 if(y>navTop+4){if(!nav.classList.contains('nav-fixed')){nav.classList.add('nav-fixed');spacer.classList.add('on');repositionAll();}}
 else{if(nav.classList.contains('nav-fixed')){nav.classList.remove('nav-fixed');spacer.classList.remove('on');repositionAll();}}
}
window.addEventListener('scroll',fixNav,{passive:true});
window.addEventListener('resize',function(){measure();repositionAll();});
/* mega menus for every item */
var IC={app:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M8 4v5"/></svg>',
 flow:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="6" r="2.2"/><circle cx="19" cy="6" r="2.2"/><circle cx="12" cy="18" r="2.2"/><path d="M6.5 7.5L10.5 16M17.5 7.5L13.5 16"/></svg>',
 ai:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/></svg>',
 shield:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
 portal:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16M3 10h6"/></svg>',
 chart:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/></svg>',
 map:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3.5 9h17M3.5 15h17M12 3c-2.5 2.5-2.5 15.5 0 18M12 3c2.5 2.5 2.5 15.5 0 18"/></svg>'};
function item(ic,cls,href,t,d){return '<a class="mg-item" href="'+href+'"><span class="mg-ic '+cls+'">'+ic+'<\/span><span><b>'+t+'<\/b><span>'+d+'<\/span><\/span><\/a>';}
var MEGAS={
'Capabilities':{w:780,html:'<div class="mg-grid" style="grid-template-columns:1fr 1fr">'
 +'<div class="mg-col"><h5>Live demos<\/h5>'
 +item(IC.shield,'b','#capabilities','Security posture','Defender secure score, managed remediation')
 +item(IC.flow,'b','#capabilities','Workflow automation','Approvals run history — fully traceable')
 +item(IC.app,'b','#capabilities','Business applications','AssetOps — assets, leases &amp; decisions')
 +'<\/div><div class="mg-col"><h5>Intelligence &amp; people<\/h5>'
 +item(IC.ai,'r','#capabilities','Applied AI','Document analyst with grounded answers')
 +item(IC.portal,'r','#capabilities','Portals &amp; intranets','One front door for people &amp; knowledge')
 +'<a class="mg-all" href="#capabilities">Explore the live demos →<\/a><\/div><\/div>'},
'Services':{w:960,html:'<div class="mg-grid" style="grid-template-columns:1fr 1fr 300px">'
 +'<div class="mg-col"><h5>Build<\/h5>'
 +item(IC.app,'b','/noorcg-team-preview/services/custom-business-applications.html','Custom business applications','Governed apps on SharePoint &amp; Azure')
 +item(IC.flow,'b','/noorcg-team-preview/services/workflow-automation.html','Workflow automation','Approvals &amp; processes on Power Automate')
 +item(IC.ai,'b','/noorcg-team-preview/services/applied-ai.html','Applied AI','Azure AI extraction &amp; assistants')
 +'<a class="mg-all" href="/noorcg-team-preview/services/">View all services →<\/a><\/div>'
 +'<div class="mg-col"><h5>Run<\/h5>'
 +item(IC.shield,'r','/noorcg-team-preview/services/managed-it-security.html','Managed IT &amp; security','Own, run &amp; harden your M365 estate')
 +item(IC.portal,'r','/noorcg-team-preview/services/portals-intranets.html','Portals &amp; intranets','SharePoint homes, internal &amp; external')
 +'<\/div>'
 +'<div class="mg-feat"><div class="mg-art"><svg width="100%" height="100%" viewBox="0 0 300 86"><rect x="70" y="14" width="90" height="58" rx="8" fill="#fff" stroke="#EFE7D4"/><rect x="82" y="26" width="46" height="7" rx="3.5" fill="#5B57E0" opacity=".55"/><rect x="82" y="39" width="60" height="5" rx="2.5" fill="#D8D2C2"/><rect x="82" y="50" width="52" height="5" rx="2.5" fill="#D8D2C2"/><rect x="150" y="8" width="90" height="58" rx="8" fill="#fff" stroke="#EFE7D4"/><rect x="162" y="20" width="40" height="7" rx="3.5" fill="#F5A33C" opacity=".6"/><rect x="162" y="33" width="58" height="5" rx="2.5" fill="#D8D2C2"/><rect x="162" y="44" width="48" height="5" rx="2.5" fill="#D8D2C2"/><circle cx="150" cy="52" r="17" fill="#fff" stroke="#F5A33C" stroke-width="3"/><text x="150" y="57" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="700" fill="#1A1408">94<\/text><\/svg><\/div>'
 +'<span class="fe"><i><\/i>Featured<\/span><b>See what we build<\/b><p>Five live product demos — click through the real apps we\'ve shipped.<\/p><a href="#capabilities">Explore the demos →<\/a><\/div><\/div>'},
'Work':{w:660,html:'<div class="mg-grid" style="grid-template-columns:1fr 250px">'
 +'<div class="mg-col"><h5>Proof<\/h5>'
 +item(IC.chart,'b','#work','Selected work','Three engagements in operating detail')
 +item(IC.map,'b','/noorcg-team-preview/case-studies.html','Case studies','Named clients, real outcomes')
 +'<\/div>'
 +'<div class="mg-feat"><span class="fe"><i><\/i>Featured<\/span><b>68 → 86 in 90 days<\/b><p>The flagship security program — 78 findings prioritized and governed.<\/p><a href="#work">See the program →<\/a><\/div><\/div>'},
'Approach':{w:660,html:'<div class="mg-grid" style="grid-template-columns:1fr 250px">'
 +'<div class="mg-col"><h5>How we engage<\/h5>'
 +item(IC.map,'b','#process','Operating model','Discover · Architect · Deliver · Operate')
 +item(IC.chart,'b','#estimator','Project estimator','A practical range in 60 seconds')
 +'<\/div>'
 +'<div class="mg-feat"><span class="fe"><i><\/i>First step<\/span><b>A 90-minute working session<\/b><p>Sit with a senior consultant — leave with priorities and a plan.<\/p><a href="mailto:info@noorcg.com?subject=Working%20session%20with%20Noor">Book a session →<\/a><\/div><\/div>'},
'About':{w:720,html:'<div class="mg-grid" style="grid-template-columns:1fr 1.1fr">'
 +'<div class="mg-col"><h5>Company<\/h5>'
 +item(IC.portal,'b','/noorcg-team-preview/about.html','About Noor','Senior-led Microsoft consultancy — since 2020')
 +item(IC.app,'b','/noorcg-team-preview/contact.html','Contact','info@noorcg.com — working sessions &amp; support')
 +'<\/div>'
 +'<div class="mg-col"><h5>Field notes<\/h5>'
 +'<a class="mg-line" href="/noorcg-team-preview/insights/lease-abstracts-azure-ai.html">Lease abstracts with Azure AI<\/a>'
 +'<a class="mg-line" href="/noorcg-team-preview/insights/servicenow-to-power-bi.html">ServiceNow to Power BI<\/a>'
 +'<a class="mg-line" href="/noorcg-team-preview/insights/m365-tenant-security-audit.html">M365 tenant security audit<\/a>'
 +'<a class="mg-line" href="/noorcg-team-preview/insights/nas-to-sharepoint-migration.html">NAS to SharePoint migration<\/a>'
 +'<a class="mg-line" href="/noorcg-team-preview/insights/pandemic-week-it-cutover.html">Pandemic-week IT cutover<\/a>'
 +'<a class="mg-all" href="/noorcg-team-preview/insights/">All field notes →<\/a><\/div><\/div>'}
};
var P=[];
function repositionAll(){P.forEach(function(f){f()})}
var openPair=null,closeTimer=null;
function showPanel(a,p){
 if(closeTimer){clearTimeout(closeTimer);closeTimer=null;}
 if(openPair&&openPair.p!==p){openPair.p.classList.remove('open');openPair.a.classList.remove('tree-open');}
 p.classList.add('open');a.classList.add('tree-open');openPair={a:a,p:p};
}
function hidePanel(){
 if(openPair){openPair.p.classList.remove('open');openPair.a.classList.remove('tree-open');openPair=null;}
}
function scheduleHide(){
 if(closeTimer)clearTimeout(closeTimer);
 closeTimer=setTimeout(hidePanel,140);
}
function wire(a,p){
 a.addEventListener('mouseenter',function(){showPanel(a,p)});
 a.addEventListener('focus',function(){showPanel(a,p)});
 a.addEventListener('mouseleave',scheduleHide);
 p.addEventListener('mouseenter',function(){if(closeTimer){clearTimeout(closeTimer);closeTimer=null;}});
 p.addEventListener('mouseleave',scheduleHide);
 p.addEventListener('click',function(e){if(e.target.closest('a'))hidePanel();});
}
window.addEventListener('scroll',function(){if(openPair)hidePanel();},{passive:true});
var mnav=document.querySelector('.mobile-nav');
if(mnav){
 var lockY=0;
 new MutationObserver(function(){
  if(mnav.classList.contains('is-open')){
   lockY=window.scrollY||document.documentElement.scrollTop;
   document.body.style.position='fixed';document.body.style.top=(-lockY)+'px';
   document.body.style.left='0';document.body.style.right='0';document.body.style.width='100%';
  }else if(document.body.style.position==='fixed'){
   document.body.style.position='';document.body.style.top='';document.body.style.left='';document.body.style.right='';document.body.style.width='';
   window.scrollTo({top:lockY,behavior:'instant'});
  }
 }).observe(mnav,{attributes:true,attributeFilter:['class']});
}
document.addEventListener('keydown',function(e){if(e.key==='Escape')hidePanel();});
document.addEventListener('click',function(e){if(openPair&&!openPair.p.contains(e.target)&&!openPair.a.contains(e.target))hidePanel();});
/* interruptible anchor scrolling: native smooth anchor scroll fights the user's wheel
   on a long page, so we animate ourselves and ABORT on the first user input */
var scrollAnim=null;
function ncgAbortScroll(){if(scrollAnim){cancelAnimationFrame(scrollAnim.raf);scrollAnim.cleanup();scrollAnim=null;}}
function ncgScrollTo(target){
 ncgAbortScroll();
 var startY=window.scrollY||document.documentElement.scrollTop;
 var rect=target.getBoundingClientRect();
 var margin=parseFloat(getComputedStyle(target).scrollMarginTop)||0;
 var endY=Math.max(0,Math.min(startY+rect.top-margin,document.documentElement.scrollHeight-window.innerHeight));
 var dist=endY-startY;
 if(Math.abs(dist)<2)return;
 var dur=Math.max(380,Math.min(850,Math.abs(dist)*0.35));
 var t0=null;
 function ease(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
 function abort(){ncgAbortScroll();}
 var opts={passive:true};
 function cleanup(){
  window.removeEventListener('wheel',abort,opts);
  window.removeEventListener('touchstart',abort,opts);
  window.removeEventListener('keydown',abort);
 }
 window.addEventListener('wheel',abort,opts);
 window.addEventListener('touchstart',abort,opts);
 window.addEventListener('keydown',abort);
 function step(ts){
  if(!scrollAnim)return;
  if(t0===null)t0=ts;
  var p=Math.min(1,(ts-t0)/dur);
  window.scrollTo({top:startY+dist*ease(p),behavior:'instant'});
  if(p<1){scrollAnim.raf=requestAnimationFrame(step);}
  else{cleanup();scrollAnim=null;}
 }
 scrollAnim={raf:requestAnimationFrame(step),cleanup:cleanup};
}
var IS_REACT=!!document.getElementById('_R_');
window.addEventListener('click',function(e){
 var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;
 if(!a)return;
 var href=a.getAttribute('href');
 if(!href||href.indexOf('mailto:')===0)return; /* working-session modal owns mailto */
 if(href.charAt(0)==='#'){
  if(href.length<2)return;
  var t=null;try{t=document.getElementById(href.slice(1));}catch(err){}
  if(!t)return;
  e.preventDefault();e.stopPropagation();
  if(history.pushState)history.pushState(null,'',href); /* no hashchange -> router stays out */
  ncgScrollTo(t);
  hidePanel();
  return;
 }
 /* on the React homepage, keep the client router away from real page links */
 if(IS_REACT && a.closest('.hero-nav,.nav-panel,.foot-links,.ps-banner')){
  e.preventDefault();e.stopPropagation();
  if(a.target==='_blank'){window.open(href,'_blank','noopener');}
  else{window.location.assign(href);}
 }
},{capture:true});
/* Contact belongs in the top nav, not buried in a hover menu */
var _nl=document.querySelector('.nav-links');
if(_nl && !_nl.querySelector('a[href*="contact.html"]')){
 var c=document.createElement('a');c.href='/noorcg-team-preview/contact.html';c.textContent='Contact';
 _nl.appendChild(c);
}
var _mn=document.querySelector('.mobile-nav');
if(_mn && !_mn.querySelector('a[href*="contact.html"]')){
 var mc=document.createElement('a');mc.href='/noorcg-team-preview/contact.html';mc.textContent='Contact';
 _mn.insertBefore(mc,_mn.lastElementChild);
}
/* footer: every page reachable without hovering a mega */
var _fi=document.querySelector('.site-footer .footer-inner');
if(_fi && !document.querySelector('.foot-links')){
 var fl=document.createElement('div');fl.className='shell foot-links';
 fl.innerHTML='<a href="/noorcg-team-preview/services/">Services<\/a><a href="/noorcg-team-preview/case-studies.html">Case studies<\/a><a href="/noorcg-team-preview/insights/">Field notes<\/a><a href="/noorcg-team-preview/about.html">About<\/a><a href="/noorcg-team-preview/contact.html">Contact<\/a><span class="fl-div"><\/span><a href="/noorcg-team-preview/privacy.html">Privacy<\/a><a href="/noorcg-team-preview/terms.html">Terms<\/a><a href="/noorcg-team-preview/accessibility.html">Accessibility<\/a><span class="fl-div"><\/span><a href="https://www.linkedin.com/company/noor-consulting-group/" target="_blank" rel="noopener">LinkedIn ↗<\/a>';
 _fi.insertAdjacentElement('afterend',fl);
}
/* top-level nav: Services/Work/About navigate to their pages (mega deep-links stay on hover).
   No-op on sub-pages where hrefs are already absolute. */
var NAVMAP={'#services':'/noorcg-team-preview/services/','#work':'/noorcg-team-preview/case-studies.html','#about':'/noorcg-team-preview/about.html'};
[].slice.call(document.querySelectorAll('.nav-links > a, .mobile-nav > a')).forEach(function(a){
 var h=a.getAttribute('href');
 if(NAVMAP[h]) a.setAttribute('href',NAVMAP[h]);
});
var navlinks=document.querySelector('.nav-links');
if(navlinks){
 [].slice.call(navlinks.querySelectorAll('a')).forEach(function(a){
  var t=MEGAS[a.textContent.trim()]; if(!t) return;
  a.classList.add('has-tree');
  var p=document.createElement('div'); p.className='nav-panel';
  p.innerHTML='<div class="np-notch"><\/div><div class="np-mega" style="width:min('+t.w+'px,94vw)">'+t.html+'<\/div>';
  a.insertAdjacentElement('afterend',p);
  function pos(){
   var mega=p.querySelector('.np-mega');
   var left=Math.max(-30,Math.min(a.offsetLeft-40,(navlinks.offsetWidth-mega.offsetWidth)));
   if(mega.offsetWidth>navlinks.offsetWidth-60){left=(navlinks.offsetWidth-mega.offsetWidth)/2;}
   p.style.left=left+'px';
   p.querySelector('.np-notch').style.left=(a.offsetLeft+a.offsetWidth/2-left-6)+'px';
  }
  pos(); P.push(pos);
  wire(a,p);
 });
 /* Only the TOP-LEVEL nav links without a mega (e.g. Estimator) close an open panel on hover.
    Must be ':scope >' — panels are injected as siblings INSIDE .nav-links, so a bare
    'a:not(.has-tree)' also matches every link inside a panel and hides it as you reach for one. */
 [].slice.call(navlinks.querySelectorAll(':scope > a:not(.has-tree)')).forEach(function(o){o.addEventListener('mouseenter',hidePanel);});
 var m=location.hash.match(/^#tree(\d)?$/);
 if(m){var ps=navlinks.querySelectorAll('.nav-panel');var idx=m[1]?parseInt(m[1],10):1;if(ps[idx]){ps[idx].classList.add('open');var ln=ps[idx].previousElementSibling;if(ln)ln.classList.add('tree-open');}}
}
/* trusted-by marquee: IQHQ, Evergreen, SABRA, Pacific Oak, TSJ Ventures, IIPR */
var trust=document.querySelector('.hero-trust > div');
if(trust && !trust.querySelector('.tr-marquee')){
 var imgs={};[].slice.call(trust.querySelectorAll('img')).forEach(function(im){imgs[im.alt]=im.outerHTML;});
 var seq=[imgs['IQHQ'],imgs['Evergreen Senior Living'],imgs['Sabra Health Care'],imgs['Pacific Oak Capital Advisors'],'<span class="tsj-mark" role="img" aria-label="TSJ Ventures"><b>TSJ<\/b><i>Ventures<\/i><\/span>',imgs['Innovative Industrial Properties']].join('');
 trust.innerHTML='<div class="tr-marquee"><div class="tr-track">'+seq+seq+'<\/div><\/div>';
}
/* consolidated outcome card: featured chart + supporting stat strip */
var spot=document.querySelector('.outcome-spotlight');
if(spot){
 var oh=spot.querySelector('.outcome-head span');
 if(oh) oh.textContent='Measured outcomes';
 var ofoot=spot.querySelector('.outcome-footer');
 if(ofoot && !spot.querySelector('.op-strip')){
  var strip=document.createElement('div');
  strip.className='op-strip';
  strip.innerHTML='<div><b>240+<\/b><span>workflows governed<\/span><\/div><div><b>20+<\/b><span>connected business apps<\/span><\/div>';
  ofoot.insertAdjacentElement('beforebegin',strip);
 }
}
/* hide the security work card (68->86 already told twice above) */
[].slice.call(document.querySelectorAll('.work-section h3,.work-section b,.work-section strong')).some(function(el){
 if(/scattered findings/i.test(el.textContent)){var card=el.closest('article')||el.closest('a')||el.closest('div');
  while(card && card.parentElement && !card.parentElement.className.match(/work/) && card.parentElement.children.length<2){card=card.parentElement;}
  if(card){card.style.display='none';return true;}}
 return false;
});
/* working-session modal replaces bare mailto as primary action */
var ov=document.createElement('div');ov.className='ws-overlay';ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-label','Book a working session');
ov.innerHTML='<div class="ws-modal"><button class="ws-close" aria-label="Close">×<\/button>'
 +'<h3>Book a working session<\/h3><p>90 minutes with a senior consultant — bring the problem, leave with priorities and a plan.<\/p>'
 +'<label for="ws-name">Name<\/label><input id="ws-name" autocomplete="name">'
 +'<label for="ws-email">Work email<\/label><input id="ws-email" type="email" autocomplete="email">'
 +'<label for="ws-co">Company<\/label><input id="ws-co" autocomplete="organization">'
 +'<label for="ws-msg">What should work better?<\/label><textarea id="ws-msg" placeholder="e.g. approvals live in inboxes; our secure score is a mystery"><\/textarea>'
 +'<button class="ws-submit">Request the session →<\/button>'
 +'<span class="ws-note">Your email draft is ready — hit send in your mail app.<\/span>'
 +'<a class="ws-alt" href="mailto:info@noorcg.com?subject=Working%20session%20with%20Noor">Prefer plain email? info@noorcg.com<\/a><\/div>';
document.body.appendChild(ov);
var lastFocus=null;
function wsOpen(){lastFocus=document.activeElement;ov.classList.add('open');setTimeout(function(){var f=ov.querySelector('#ws-name');if(f)f.focus({preventScroll:true});},30);}
function wsClose(){ov.classList.remove('open');ov.querySelector('.ws-note').style.display='none';if(lastFocus)lastFocus.focus({preventScroll:true});}
ov.querySelector('.ws-close').addEventListener('click',wsClose);
ov.addEventListener('click',function(e){if(e.target===ov)wsClose();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&ov.classList.contains('open'))wsClose();});
ov.querySelector('.ws-submit').addEventListener('click',function(){
 var n=ov.querySelector('#ws-name').value.trim(),em=ov.querySelector('#ws-email').value.trim(),co=ov.querySelector('#ws-co').value.trim(),m=ov.querySelector('#ws-msg').value.trim();
 var subj='Working session — '+(n||'new request')+(co?' · '+co:'');
 var body='Name: '+n+'\nEmail: '+em+'\nCompany: '+co+'\n\nWhat should work better:\n'+m+'\n';
 window.location.href='mailto:info@noorcg.com?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body);
 ov.querySelector('.ws-note').style.display='block';
});
document.addEventListener('click',function(e){
 var a=e.target.closest('a[href^="mailto:"]');
 if(a && !ov.contains(a) && !a.hasAttribute('data-no-modal')){e.preventDefault();wsOpen();}
},true);
/* embed governance: lazy-load, no scroll-trap, focus can't scroll-jack, honor reduced motion.
   NB: deliberately no offscreen JS-pause — src-swap parking caused reload-jank/friction near
   #capabilities→#services, and an IO animation-pause can strand a *visible* demo frozen if the
   resume callback is dropped under a loaded renderer. Short CSS-anim demos aren't painted offscreen
   anyway, so the browser already 'pauses' them for free. */
var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function tuneFrame(fr){
 try{
  var FW=fr.contentWindow,FD=fr.contentDocument;
  if(!FW||!FD||!FD.head)return;
  /* never let the demo swallow page-scroll (wheel/touch chains to the parent) */
  if(!FD.getElementById('nv-noscroll')){var ns=FD.createElement('style');ns.id='nv-noscroll';ns.textContent='html,body{overflow:hidden!important;overscroll-behavior:none}';FD.head.appendChild(ns);}
  /* focus() inside the demo can never scroll the parent page */
  var of=FW.HTMLElement.prototype.focus;
  FW.HTMLElement.prototype.focus=function(o){return of.call(this,Object.assign({},o||{},{preventScroll:true}));};
  if(RM&&!FD.getElementById('nv-rm')){var rm=FD.createElement('style');rm.id='nv-rm';rm.textContent='*{animation:none!important;transition:none!important}';FD.head.appendChild(rm);}
 }catch(e){}
}
[].slice.call(document.querySelectorAll('.demo-frame iframe')).forEach(function(fr){
 fr.setAttribute('loading','lazy');
 fr.setAttribute('scrolling','no');
 fr.addEventListener('load',function(){tuneFrame(fr);});
 if(fr.contentDocument&&fr.contentDocument.readyState==='complete')tuneFrame(fr);
});
/* --- static-page fallbacks: only run where React isn't driving the page --- */
/* NB: no JS reveal-fallback here on purpose. [data-reveal] is opacity:0 until .is-visible, and an
   IntersectionObserver can silently fail to fire under a throttled/idle renderer — which would
   strand a whole page's content INVISIBLE. Static pages instead use a pure-CSS entrance
   (.page-body [data-reveal] in ncg-shared.css) that always ends visible with no JS involved. */
if(!document.getElementById('_R_')){
 /* mobile hamburger: React owned .mobile-nav.is-open */
 var mt=document.querySelector('.menu-toggle'),mn=document.querySelector('.mobile-nav');
 if(mt&&mn){
  mt.addEventListener('click',function(){
   var open=mn.classList.toggle('is-open');
   mt.setAttribute('aria-expanded',open?'true':'false');
  });
  mn.addEventListener('click',function(e){if(e.target.closest('a')){mn.classList.remove('is-open');mt.setAttribute('aria-expanded','false');}});
 }
}
measure();
},150);});
