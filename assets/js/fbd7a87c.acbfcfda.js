"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39],{3174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(5893),s=n(1151);const o={sidebar_position:2},c="Quickstart",a={id:"getting-started/quickstart",title:"Quickstart",description:"To quickly run bracket to see how it works, clone it and run docker-compose up:",source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/bracket/docs/getting-started/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/bracket/docs/getting-started/configuration"}},i={},d=[];function u(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,r.jsxs)(t.p,{children:["To quickly run bracket to see how it works, clone it and run ",(0,r.jsx)(t.code,{children:"docker-compose up"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"git clone git@github.com:evroon/bracket.git\ncd bracket\nsudo docker-compose up -d\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This will start the backend and frontend of Bracket, as well as a postgres instance. You should now\nbe able to view bracket at ",(0,r.jsx)(t.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),". You can log in with username ",(0,r.jsx)(t.code,{children:"test@example.org"}),"\nand password ",(0,r.jsx)(t.code,{children:"aeGhoe1ahng2Aezai0Dei6Aih6dieHoo"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"To insert dummy rows into the database, run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"sudo docker exec bracket-backend pipenv run ./cli.py create-dev-db\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var r=n(7294);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);