(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{j7b7:function(t,e,i){"use strict";i.r(e),i.d(e,"FilmsModule",(function(){return S}));var r=i("ofXK"),n=i("tyNb"),s=i("fXoL"),c=i("2Vo4"),l=i("LRne"),o=i("AytR"),a=i("vkgz"),b=i("JIr8"),f=i("tk/3");let p=(()=>{class t{constructor(t){this.http=t,this.errorMessage=new c.a("")}getAll(){return this.http.get(o.a.apiUrl+"films").pipe(Object(a.a)(t=>console.log("fetched films")),Object(b.a)(this.handleError("getAll",{results:[]})))}get(t){return this.http.get(`${o.a.apiUrl}films/${t}`).pipe(Object(a.a)(t=>console.log("fetched films")),Object(b.a)(this.handleError("get with id:"+t,null)))}handleError(t="operation",e){return i=>(console.error(`${t} failed: ${i.message}`),Object(l.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(f.a))},t.\u0275prov=s.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=i("yRMz");const g=function(t){return["/films",t]};function h(t,e){if(1&t&&(s.Kb(0,"div",3),s.Kb(1,"p"),s.ec(2),s.Kb(3,"a",4),s.ec(4,"More Details"),s.Jb(),s.Jb(),s.Jb()),2&t){const t=e.$implicit;s.xb(2),s.gc("",t.title,"/",t.director,"/",t.release_date," "),s.xb(1),s.Ub("routerLink",s.Wb(4,g,t.id))}}function d(t,e){1&t&&(s.Kb(0,"p"),s.ec(1,"No existen filmes para este criterio de b\xfasqueda"),s.Jb())}let m=(()=>{class t{constructor(t,e){this.filmService=t,this.filterService=e,this.films=[],this.isEmpty=!1,this.sucription=this.filterService.filterSubject.subscribe(t=>{this.films.length>0&&this.filter(t)})}ngOnInit(){this.getAll()}ngOnDestroy(){this.sucription.unsubscribe()}getAll(){this.filmService.getAll().subscribe(t=>{const e=t.results;for(const r of e)r.id=this.getId(r.url),this.films.push(r);localStorage.setItem("items",JSON.stringify(this.films));const i=this.filterService.getFiltertext();""!==i&&this.filter(i)})}getId(t){return t.split("/")[5]}filter(t){let e=localStorage.getItem("items");if(e=JSON.parse(e),t=""!==t?t.toLocaleLowerCase():"",this.films=e.filter(e=>e.title.toLocaleLowerCase().indexOf(t)>-1||e.director.toLocaleLowerCase().indexOf(t)>-1),this.isEmpty=0===this.films.length,this.films.length>0&&""!==t){let e=localStorage.getItem("search"),i=null!==e?JSON.parse(e):[];const r={text:t,route:"films"};0===i.filter(t=>t.text===r.text&&t.route===r.route).length&&(i.push(r),localStorage.setItem("search",JSON.stringify(i)),this.filterService.reloadSearch())}}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(p),s.Hb(u.a))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-list-films"]],decls:3,vars:2,consts:[[1,"card"],["class","item-card",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"item-card"],[3,"routerLink"]],template:function(t,e){1&t&&(s.Kb(0,"div",0),s.cc(1,h,5,6,"div",1),s.cc(2,d,2,0,"p",2),s.Jb()),2&t&&(s.xb(1),s.Ub("ngForOf",e.films),s.xb(1),s.Ub("ngIf",e.isEmpty))},directives:[r.h,r.i,n.c],styles:[".card[_ngcontent-%COMP%]{margin:10px}.item-card[_ngcontent-%COMP%]{padding:10px;font-weight:700}.item-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-left:10px;font-weight:300}"]}),t})();var v=i("8Ams");function J(t,e){if(1&t&&(s.Kb(0,"div"),s.Kb(1,"p"),s.ec(2,"Something went wrong"),s.Jb(),s.Kb(3,"p"),s.ec(4),s.Jb(),s.Jb()),2&t){const t=s.Tb();s.xb(4),s.fc("Error: ",t.errorMessage,"")}}function O(t,e){if(1&t&&(s.Kb(0,"div",4),s.Kb(1,"p"),s.Kb(2,"span"),s.ec(3,"Title:"),s.Jb(),s.ec(4),s.Jb(),s.Kb(5,"p"),s.Kb(6,"span"),s.ec(7,"Episode_id:"),s.Jb(),s.ec(8),s.Jb(),s.Kb(9,"p"),s.Kb(10,"span"),s.ec(11,"Opening_crown:"),s.Jb(),s.ec(12),s.Jb(),s.Kb(13,"p"),s.Kb(14,"span"),s.ec(15,"Director:"),s.Jb(),s.ec(16),s.Jb(),s.Kb(17,"p"),s.Kb(18,"span"),s.ec(19,"Producer:"),s.Jb(),s.ec(20),s.Jb(),s.Jb()),2&t){const t=s.Tb();s.xb(4),s.fc(" ",null==t.film?null:t.film.title,""),s.xb(4),s.fc(" ",null==t.film?null:t.film.episode_id,""),s.xb(4),s.fc(" ",null==t.film?null:t.film.opening_crawl,""),s.xb(4),s.fc(" ",null==t.film?null:t.film.director,""),s.xb(4),s.fc(" ",null==t.film?null:t.film.producer,"")}}const w=[{path:"",component:m},{path:":id",component:(()=>{class t{constructor(t,e,i,r){this.filmService=t,this.activatedRoute=e,this.router=i,this.toolbarService=r,this.errorMessage=""}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.get(t.id)}),this.filmService.errorMessage.subscribe(t=>{this.errorMessage=t}),this.toolbarService.show(!1)}get(t){this.filmService.get(t).subscribe(t=>{this.film=t})}goBack(){this.router.navigate(["films"]),this.toolbarService.show(!0)}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(p),s.Hb(n.a),s.Hb(n.b),s.Hb(v.a))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-detail-film"]],decls:6,vars:2,consts:[[4,"ngIf","ngIfElse"],["filmDetail",""],[1,"btn-back"],["type","button",1,"btn","btn-primary",3,"click"],[1,"card"]],template:function(t,e){if(1&t&&(s.cc(0,J,5,1,"div",0),s.cc(1,O,21,5,"ng-template",null,1,s.dc),s.Kb(3,"div",2),s.Kb(4,"button",3),s.Rb("click",(function(){return e.goBack()})),s.ec(5,"Back"),s.Jb(),s.Jb()),2&t){const t=s.Yb(2);s.Ub("ngIf",e.errorMessage)("ngIfElse",t)}},directives:[r.i],styles:[".card[_ngcontent-%COMP%]{margin:10px}.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:10px;font-weight:700}.btn-back[_ngcontent-%COMP%]{text-align:end;margin-right:10px}"]}),t})()}];let x=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[n.d.forChild(w)],n.d]}),t})(),S=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[r.b,x]]}),t})()}}]);