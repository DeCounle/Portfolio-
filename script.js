var SHEET_2026 = "#"; /* link to your full 2026 project sheet (Google Sheet or Doc) */
var P2026 = [
  {name:"E-commerce platform", desc:"Online shopping with payments and an admin dashboard", stack:"React, Node.js, MongoDB", when:"Q1 2026", status:"shipped",
   res:[{l:"Brief",u:"#"},{l:"Repo",u:"#"},{l:"Live demo",u:"#"}]},
  {name:"Analytics dashboard", desc:"Real-time business metrics and KPIs", stack:"Figma, API", when:"Q2 2026", status:"shipped",
   res:[{l:"Brief",u:"#"},{l:"Figma file",u:"#"}]},
  {name:"CRM app", desc:"Fully responsive customer management app", stack:"Figma, React, Firebase", when:"Q3 2026", status:"progress",
   res:[{l:"Roadmap",u:"#"},{l:"Figma file",u:"#"},{l:"Repo",u:"#"}]},
  {name:"Add your next project", desc:"Copy a row in the P2026 list to add more", stack:"Stack", when:"Q4 2026", status:"planned",
   res:[{l:"Brief",u:"#"}]}
];
var L2025 = [
  {t:"2025 project list", d:"Every project I finished in 2025", u:"https://docs.google.com/document/d/1uPMqke8hlcM9Zaa2bfoDYB9k-ydZQhJYbdV9D7Ta4bk/edit?tab=t.0"},
  {t:"Source code on GitHub", d:"Repositories behind the 2025 work", u:"https://github.com/Counle"},
  {t:"2025 resources and case studies", d:"Briefs, designs and write-ups", u:"#"}
];
/* ========================================================================================================== */
 
var panel = document.getElementById("panel");
var STATUS = {shipped:"Shipped", progress:"In progress", planned:"Planned"};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function link(l,u){var todo=(u==="#");return '<a href="'+esc(u)+'"'+(todo?' class="todo" title="Link not added yet"':' target="_blank" rel="noopener"')+'>'+esc(l)+'</a>'}
 
function render2026(){
  var rows = P2026.map(function(p){
    return '<tr><td><span class="pname">'+esc(p.name)+'</span><span class="pdesc">'+esc(p.desc)+'</span></td>'+
      '<td>'+esc(p.stack)+'</td><td>'+esc(p.when)+'</td>'+
      '<td><span class="chip '+p.status+'">'+STATUS[p.status]+'</span></td>'+
      '<td><div class="res">'+p.res.map(function(r){return link(r.l,r.u)}).join("")+'</div></td></tr>';
  }).join("");
  panel.innerHTML = '<div class="sheet-bar"><div><strong>2026 project sheet</strong><span>'+P2026.length+' projects</span></div>'+
    '<a class="btn primary" '+(SHEET_2026==="#"?'':'target="_blank" rel="noopener" ')+'href="'+esc(SHEET_2026)+'">Open the full sheet</a></div>'+
    '<div class="scroll"><table><thead><tr><th scope="col">Project</th><th scope="col">Stack</th><th scope="col">Timeline</th><th scope="col">Status</th><th scope="col">Resources</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
}
function render2025(){
  panel.innerHTML = '<div class="sheet-bar"><div><strong>2025 project list</strong><span>'+L2025.length+' links</span></div></div><ul class="links">'+
    L2025.map(function(x){var todo=x.u==="#";return '<li><a href="'+esc(x.u)+'"'+(todo?'':' target="_blank" rel="noopener"')+'><span><span class="t">'+esc(x.t)+'</span><span class="d">'+esc(x.d)+'</span></span><span class="go">'+(todo?'Add link':'Open')+'</span></a></li>'}).join("")+'</ul>';
}
function show(year){
  document.getElementById("tab-2026").setAttribute("aria-selected",year===2026);
  document.getElementById("tab-2025").setAttribute("aria-selected",year===2025);
  document.getElementById("tab-2026").tabIndex = year===2026?0:-1;
  document.getElementById("tab-2025").tabIndex = year===2025?0:-1;
  panel.setAttribute("aria-labelledby","tab-"+year);
  year===2026?render2026():render2025();
}
document.getElementById("tab-2026").onclick=function(){show(2026)};
document.getElementById("tab-2025").onclick=function(){show(2025)};
document.querySelector(".tabs").addEventListener("keydown",function(e){
  if(e.key==="ArrowRight"||e.key==="ArrowLeft"){var y=document.getElementById("tab-2026").getAttribute("aria-selected")==="true"?2025:2026;show(y);document.getElementById("tab-"+y).focus()}
});
show(2026);
 console.log("My portfolio JavaScript is working!");
 