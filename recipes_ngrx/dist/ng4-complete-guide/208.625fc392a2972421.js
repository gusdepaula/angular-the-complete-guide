"use strict";(self.webpackChunkng4_complete_guide=self.webpackChunkng4_complete_guide||[]).push([[208],{1208:(Y,f,c)=>{c.r(f),c.d(f,{RecipesModule:()=>E});var s=c(433),p=c(1740),A=c(4466),g=c(5698),l=c(4004),e=c(4650),T=c(384),d=c(2997);let _=(()=>{class t{constructor(i,n,o){this.authService=i,this.router=n,this.store=o}canActivate(i,n){return this.store.select("auth").pipe((0,g.q)(1),(0,l.U)(o=>o.user),(0,l.U)(o=>!!o||this.router.createUrlTree(["/auth"])))}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(T.e),e.LFG(p.F0),e.LFG(d.yh))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=c(2876),b=c(3584),U=c(1300),h=c(6895);function y(t,r){if(1&t&&(e.TgZ(0,"li",10),e._uU(1),e.qZA()),2&t){const i=r.$implicit;e.xp6(1),e.AsE(" ",i.name," - ",i.amount," ")}}let F=(()=>{class t{constructor(i,n,o){this.route=i,this.router=n,this.store=o}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.store.select("recipes").pipe((0,l.U)(n=>n.recipes.find((o,u)=>u===this.id))).subscribe(n=>{this.recipe=n})})}onAddToShoppingList(){this.store.dispatch(new b.Rw(this.recipe.ingredients))}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.store.dispatch(new m.xR(this.id)),this.router.navigate(["/recipes"])}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(p.gz),e.Y36(p.F0),e.Y36(d.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA()(),e.TgZ(3,"div",0)(4,"div",1)(5,"h1"),e._uU(6),e.qZA()()(),e.TgZ(7,"div",0)(8,"div",1)(9,"div",3)(10,"button",4),e._uU(11," Manage Recipe "),e._UZ(12,"span",5),e.qZA(),e.TgZ(13,"ul",6)(14,"li")(15,"a",7),e.NdJ("click",function(){return n.onAddToShoppingList()}),e._uU(16,"To Shopping List"),e.qZA()(),e.TgZ(17,"li")(18,"a",7),e.NdJ("click",function(){return n.onEditRecipe()}),e._uU(19,"Edit Recipe"),e.qZA()(),e.TgZ(20,"li")(21,"a",7),e.NdJ("click",function(){return n.onDeleteRecipe()}),e._uU(22,"Delete Recipe"),e.qZA()()()()()(),e.TgZ(23,"div",0)(24,"div",1),e._uU(25),e.qZA()(),e.TgZ(26,"div",0)(27,"div",1)(28,"ul",8),e.YNc(29,y,2,2,"li",9),e.qZA()()()),2&i&&(e.xp6(2),e.s9C("alt",n.recipe.name),e.Q6J("src",n.recipe.imagePath,e.LSH),e.xp6(4),e.Oqu(n.recipe.name),e.xp6(19),e.Oqu(n.recipe.description),e.xp6(4),e.Q6J("ngForOf",n.recipe.ingredients))},dependencies:[U.w,h.sg]}),t})();function w(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"div",18)(1,"div",19),e._UZ(2,"input",20),e.qZA(),e.TgZ(3,"div",21),e._UZ(4,"input",22),e.qZA(),e.TgZ(5,"div",21)(6,"button",23),e.NdJ("click",function(){const u=e.CHM(i).index,a=e.oxw();return e.KtG(a.onDeleteIngredient(u))}),e._uU(7," x "),e.qZA()()()}2&t&&e.Q6J("formGroupName",r.index)}let Z=(()=>{class t{constructor(i,n,o){this.route=i,this.router=n,this.store=o,this.editMode=!1}onSubmit(){this.store.dispatch(this.editMode?new m.JY({index:this.id,newRecipe:this.recipeForm.value}):new m.N0(this.recipeForm.value)),this.onCancel()}onAddIngredient(){this.recipeForm.get("ingredients").push(new s.cw({name:new s.NI(null,s.kI.required),amount:new s.NI(null,[,s.kI.required,,s.kI.pattern(/^[1-9]+[0-9]*$/)])}))}onDeleteIngredient(i){this.recipeForm.get("ingredients").removeAt(i)}onDeleteAll(){this.recipeForm.get("ingredients").clear()}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}ngOnInit(){this.route.params.subscribe(i=>{this.id=+i.id,this.editMode=null!=i.id,this.initForm()})}initForm(){let i="",n="",o="",u=new s.Oe([]);this.editMode&&(this.storeSub=this.store.select("recipes").pipe((0,l.U)(a=>a.recipes.find((v,M)=>M===this.id))).subscribe(a=>{if(i=a.name,n=a.imagePath,o=a.description,a.ingredients)for(let v of a.ingredients)u.push(new s.cw({name:new s.NI(v.name,s.kI.required),amount:new s.NI(v.amount,[,s.kI.required,,s.kI.pattern(/^[1-9]+[0-9]*$/)])}))})),this.recipeForm=new s.cw({name:new s.NI(i,s.kI.required),imagePath:new s.NI(n,s.kI.required),description:new s.NI(o,s.kI.required),ingredients:u})}ngOnDestroy(){this.storeSub&&this.storeSub.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(p.gz),e.Y36(p.F0),e.Y36(d.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-edit"]],decls:43,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","submit",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imgPath"],["type","text","id","imgPath","formControlName","imagePath",1,"form-control"],["imagePath",""],["alt","",1,"img-responsive",3,"src"],["for","description"],["type","text","id","description","rows","6","formControlName","description",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"],[1,"btn","btn-danger",3,"click"]],template:function(i,n){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(3,"div",0)(4,"div",1)(5,"button",3),e._uU(6," Save"),e.qZA(),e._uU(7,"\xa0 "),e.TgZ(8,"button",4),e.NdJ("click",function(){return n.onCancel()}),e._uU(9," Cancel "),e.qZA()()(),e.TgZ(10,"div",0)(11,"div",1)(12,"div",5)(13,"label",6),e._uU(14,"Name"),e.qZA(),e._UZ(15,"input",7),e.qZA()()(),e.TgZ(16,"div",0)(17,"div",1)(18,"div",5)(19,"label",8),e._uU(20,"Image URL"),e.qZA(),e._UZ(21,"input",9,10),e.qZA()()(),e.TgZ(23,"div",0)(24,"div",1),e._UZ(25,"img",11),e.qZA()(),e.TgZ(26,"div",0)(27,"div",1)(28,"div",5)(29,"label",12),e._uU(30,"Description"),e.qZA(),e._UZ(31,"textarea",13),e.qZA()()(),e.TgZ(32,"div",0)(33,"div",14),e.YNc(34,w,8,1,"div",15),e._UZ(35,"hr"),e.TgZ(36,"div",0)(37,"div",1)(38,"button",16),e.NdJ("click",function(){return n.onAddIngredient()}),e._uU(39," Add Ingredient"),e.qZA(),e._uU(40,"\xa0 "),e.TgZ(41,"button",17),e.NdJ("click",function(){return n.onDeleteAll()}),e._uU(42," Remove All Ingredients "),e.qZA()()()()()()()()),2&i){const o=e.MAs(22);e.xp6(2),e.Q6J("formGroup",n.recipeForm),e.xp6(3),e.Q6J("disabled",!n.recipeForm.valid),e.xp6(20),e.Q6J("src",o.value,e.LSH),e.xp6(9),e.Q6J("ngForOf",n.recipeForm.get("ingredients").controls)}},dependencies:[s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u,s.x0,s.CE,h.sg]}),t})(),I=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(i,n){1&i&&(e.TgZ(0,"h3"),e._uU(1,"Please select a Recipe!"),e.qZA())}}),t})();const x=function(t){return[t]};let N=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(i,n){1&i&&(e.TgZ(0,"a",0)(1,"div",1)(2,"h4",2),e._uU(3),e.qZA(),e.TgZ(4,"p",3),e._uU(5),e.qZA()(),e.TgZ(6,"span",4),e._UZ(7,"img",5),e.qZA()()),2&i&&(e.Q6J("routerLink",e.VKq(5,x,n.index)),e.xp6(3),e.Oqu(n.recipe.name),e.xp6(2),e.Oqu(n.recipe.description),e.xp6(2),e.s9C("alt",n.recipe.name),e.Q6J("src",n.recipe.imagePath,e.LSH))},dependencies:[p.yS,p.Od]}),t})();function q(t,r){if(1&t&&e._UZ(0,"app-recipe-item",4),2&t){const n=r.index;e.Q6J("recipe",r.$implicit)("index",n)}}let S=(()=>{class t{constructor(i,n,o){this.router=i,this.route=n,this.store=o}ngOnInit(){this.subscription=this.store.select("recipes").subscribe(i=>{this.recipes=i.recipes})}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(p.F0),e.Y36(p.gz),e.Y36(d.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.onNewRecipe()}),e._uU(3,"New Recipe"),e.qZA()()(),e._UZ(4,"hr"),e.TgZ(5,"div",0)(6,"div",1),e.YNc(7,q,1,2,"app-recipe-item",3),e.qZA()()),2&i&&(e.xp6(7),e.Q6J("ngForOf",n.recipes))},dependencies:[h.sg,N]}),t})(),J=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(i,n){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-recipe-list"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA()())},dependencies:[p.lC,S],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),t})();var R=c(2260),k=c(3900),L=c(9646);let C=(()=>{class t{constructor(i,n){this.store=i,this.actions$=n}resolve(i,n){return this.store.select("recipes").pipe((0,g.q)(1),(0,l.U)(o=>o.recipes),(0,k.w)(o=>0===o.length?(this.store.dispatch(new m.QS),this.actions$.pipe((0,R.l4)(m.St),(0,g.q)(1))):(0,L.of)(o)))}}return t.\u0275fac=function(i){return new(i||t)(e.LFG(d.yh),e.LFG(R.eX))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const O=[{path:"",component:J,canActivate:[_],children:[{path:"",component:I},{path:"new",component:Z},{path:":id",component:F,resolve:[C]},{path:":id/edit",component:Z,resolve:[C]}]}];let D=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(O),p.Bz]}),t})(),E=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz,s.UX,D,A.m]}),t})()}}]);