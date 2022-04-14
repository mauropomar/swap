(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{j7b7:function(t,e,i){"use strict";i.r(e),i.d(e,"FilmsModule",(function(){return w}));var r=i("ofXK"),n=i("tyNb"),s=i("fXoL"),l=i("2Vo4"),o=i("LRne"),b=i("AytR"),c=i("vkgz"),a=i("JIr8"),f=i("tk/3");let u=(()=>{class t{constructor(t){this.http=t,this.errorMessage=new l.a("")}getAll(){return this.http.get(b.a.apiUrl+"films").pipe(Object(c.a)(t=>console.log("fetched films")),Object(a.a)(this.handleError("getAll",{results:[]})))}get(t){return this.http.get(`${b.a.apiUrl}films/${t}`).pipe(Object(c.a)(t=>console.log("fetched films")),Object(a.a)(this.handleError("get with id:"+t,null)))}handleError(t="operation",e){return i=>(console.error(`${t} failed: ${i.message}`),Object(o.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(f.a))},t.\u0275prov=s.zb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=i("yRMz");const g=function(t){return["/films",t]};function d(t,e){if(1&t&&(s.Gb(0,"div",3),s.Gb(1,"p"),s.Yb(2),s.Gb(3,"a",4),s.Yb(4,"More Details"),s.Fb(),s.Fb(),s.Fb()),2&t){const t=e.$implicit;s.ub(2),s.ac("",t.title,"/",t.director,"/",t.release_date," "),s.ub(1),s.Pb("routerLink",s.Qb(4,g,t.id))}}function m(t,e){1&t&&(s.Gb(0,"p"),s.Yb(1,"No existen filmes para este criterio de b\xfasqueda"),s.Fb())}function h(t,e){if(1&t&&(s.Gb(0,"div"),s.Gb(1,"p"),s.Yb(2,"Something went wrong"),s.Fb(),s.Gb(3,"p"),s.Yb(4),s.Fb(),s.Fb()),2&t){const t=s.Ob();s.ub(4),s.Zb("Error: ",t.errorMessage,"")}}function v(t,e){if(1&t&&(s.Gb(0,"div",4),s.Gb(1,"p"),s.Gb(2,"span"),s.Yb(3,"Title:"),s.Fb(),s.Yb(4),s.Fb(),s.Gb(5,"p"),s.Gb(6,"span"),s.Yb(7,"Episode_id:"),s.Fb(),s.Yb(8),s.Fb(),s.Gb(9,"p"),s.Gb(10,"span"),s.Yb(11,"Opening_crown:"),s.Fb(),s.Yb(12),s.Fb(),s.Gb(13,"p"),s.Gb(14,"span"),s.Yb(15,"Director:"),s.Fb(),s.Yb(16),s.Fb(),s.Gb(17,"p"),s.Gb(18,"span"),s.Yb(19,"Producer:"),s.Fb(),s.Yb(20),s.Fb(),s.Fb()),2&t){const t=s.Ob();s.ub(4),s.Zb(" ",null==t.film?null:t.film.title,""),s.ub(4),s.Zb(" ",null==t.film?null:t.film.episode_id,""),s.ub(4),s.Zb(" ",null==t.film?null:t.film.opening_crawl,""),s.ub(4),s.Zb(" ",null==t.film?null:t.film.director,""),s.ub(4),s.Zb(" ",null==t.film?null:t.film.producer,"")}}const O=[{path:"",component:(()=>{class t{constructor(t,e){this.filmService=t,this.filterService=e,this.films=[],this.isEmpty=!1,this.sucription=this.filterService.filterSubject.subscribe(t=>{this.filter(t)})}ngOnInit(){this.getAll()}ngOnDestroy(){this.sucription.unsubscribe()}getAll(){this.filmService.getAll().subscribe(t=>{const e=t.results;for(const i of e)i.id=this.getId(i.url),this.films.push(i);localStorage.setItem("items",JSON.stringify(this.films))})}getId(t){return t.split("/")[5]}filter(t){let e=localStorage.getItem("items");if(e=JSON.parse(e),t=""!==t?t.toLocaleLowerCase():"",this.films=e.filter(e=>e.title.toLocaleLowerCase().indexOf(t)>-1||e.director.toLocaleLowerCase().indexOf(t)>-1),this.isEmpty=0===this.films.length,this.films.length>0&&""!==t){let e=localStorage.getItem("search"),i=null!==e?JSON.parse(e):[];i.push({text:t,route:"films"}),localStorage.setItem("search",JSON.stringify(i)),this.filterService.reloadSearch()}}}return t.\u0275fac=function(e){return new(e||t)(s.Db(u),s.Db(p.a))},t.\u0275cmp=s.xb({type:t,selectors:[["app-list-films"]],decls:3,vars:2,consts:[[1,"card"],["class","item-card",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"item-card"],[3,"routerLink"]],template:function(t,e){1&t&&(s.Gb(0,"div",0),s.Wb(1,d,5,6,"div",1),s.Wb(2,m,2,0,"p",2),s.Fb()),2&t&&(s.ub(1),s.Pb("ngForOf",e.films),s.ub(1),s.Pb("ngIf",e.isEmpty))},directives:[r.h,r.i,n.c],styles:[".card[_ngcontent-%COMP%]{margin:10px}.item-card[_ngcontent-%COMP%]{padding:10px;font-weight:700}.item-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-left:10px;font-weight:300}"]}),t})()},{path:":id",component:(()=>{class t{constructor(t,e,i){this.filmService=t,this.activatedRoute=e,this.router=i,this.errorMessage=""}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.get(t.id)}),this.filmService.errorMessage.subscribe(t=>{this.errorMessage=t})}get(t){this.filmService.get(t).subscribe(t=>{this.film=t})}goBack(){this.router.navigate(["films"])}}return t.\u0275fac=function(e){return new(e||t)(s.Db(u),s.Db(n.a),s.Db(n.b))},t.\u0275cmp=s.xb({type:t,selectors:[["app-detail-film"]],decls:6,vars:2,consts:[[4,"ngIf","ngIfElse"],["filmDetail",""],[1,"btn-back"],["type","button",1,"btn","btn-primary",3,"click"],[1,"card"]],template:function(t,e){if(1&t&&(s.Wb(0,h,5,1,"div",0),s.Wb(1,v,21,5,"ng-template",null,1,s.Xb),s.Gb(3,"div",2),s.Gb(4,"button",3),s.Mb("click",(function(){return e.goBack()})),s.Yb(5,"Back"),s.Fb(),s.Fb()),2&t){const t=s.Sb(2);s.Pb("ngIf",e.errorMessage)("ngIfElse",t)}},directives:[r.i],styles:[".card[_ngcontent-%COMP%]{margin:10px}.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:10px;font-weight:700}.btn-back[_ngcontent-%COMP%]{text-align:end;margin-right:10px}"]}),t})()}];let F=(()=>{class t{}return t.\u0275mod=s.Bb({type:t}),t.\u0275inj=s.Ab({factory:function(e){return new(e||t)},imports:[[n.d.forChild(O)],n.d]}),t})(),w=(()=>{class t{}return t.\u0275mod=s.Bb({type:t}),t.\u0275inj=s.Ab({factory:function(e){return new(e||t)},imports:[[r.b,F]]}),t})()}}]);