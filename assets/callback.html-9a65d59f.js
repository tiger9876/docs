import{d as v,ay as T,u as e,o as a,F as l,w as p,e as i,I as _,b as o,au as x,a as k,b4 as S,N as g,aw as w,b5 as I,b6 as M,_ as N,r as P,c as B}from"./app-82af6f7e.js";import{N as y}from"./Alert-4b809173.js";import{N as V}from"./Input-7ecaef30.js";import"./browser-f60200f2.js";const d=s=>(I("data-v-f88af1cf"),s=s(),M(),s),z=d(()=>o("b",null,"client_id: ",-1)),$=d(()=>o("b",null,"client_secret: ",-1)),j=d(()=>o("b",null,"redirect_uri: ",-1)),E=d(()=>o("b",null,"refresh_token:",-1)),O=v({__name:"Callback",setup(s){const u=`${location.origin}/tool/dropbox/callback`,c=new URL(window.location.href),n=c.searchParams.get("code"),f=c.searchParams.get("state"),h=c.searchParams.get("error"),C=c.searchParams.get("error_description"),[m,b]=atob(f).split("::"),t=T({refreshToken:"",accessToken:"",error1:"",errorMessage1:""});return n&&f&&!h&&(()=>{fetch(`${w()}/alist/dropbox/token`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,client_id:m,client_secret:b,grant_type:"authorization_code",redirect_uri:u})}).then(r=>r.json()).then(r=>{if(console.log(r),r.error){t.error1=r.error,t.errorMessage1=r.error_description;return}t.refreshToken=r.refresh_token,t.accessToken=r.access_token})})(),(r,J)=>!e(n)||!e(f)||e(h)?(a(),l(e(y),{key:0,title:e(h)||"Error",type:"error"},{default:p(()=>[i(_(e(C)),1)]),_:1},8,["title"])):(a(),l(e(g),{key:1,vertical:"",size:"large"},{default:p(()=>[o("p",null,[z,i(_(e(m)),1)]),o("p",null,[$,i(_(e(b)),1)]),o("p",null,[j,i(_(u))]),t.error1||t.errorMessage1?(a(),l(e(y),{key:0,title:t.error1,type:"error"},{default:p(()=>[i(_(t.errorMessage1),1)]),_:1},8,["title"])):x("v-if",!0),k(e(g),{vertical:""},{default:p(()=>[E,!t.refreshToken&&!t.errorMessage1?(a(),l(e(S),{key:0})):(a(),l(e(V),{key:1,type:"textarea",autosize:"",readonly:"",value:t.refreshToken},null,8,["value"]))]),_:1})]),_:1}))}});const A=N(O,[["__scopeId","data-v-f88af1cf"],["__file","Callback.vue"]]),D=v({__name:"callback.html",setup(s){return(u,c)=>{const n=P("NaiveClient");return a(),B("div",null,[k(n,null,{default:p(()=>[k(e(A))]),_:1})])}}}),G=N(D,[["__file","callback.html.vue"]]);export{G as default};