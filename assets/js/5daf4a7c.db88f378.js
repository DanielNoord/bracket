"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24],{1176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(5893),c=t(1151);const o={sidebar_position:0},s="Quickstart",a={id:"running-bracket/quickstart",title:"Quickstart",description:"To quickly run bracket to see how it works, clone it and run docker-compose up:",source:"@site/docs/running-bracket/quickstart.md",sourceDirName:"running-bracket",slug:"/running-bracket/quickstart",permalink:"/bracket/docs/running-bracket/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/running-bracket/quickstart.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Running Bracket",permalink:"/bracket/docs/category/running-bracket"},next:{title:"Configuration",permalink:"/bracket/docs/running-bracket/configuration"}},i={},u=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"quickstart",children:"Quickstart"}),"\n",(0,r.jsxs)(n.p,{children:["To quickly run bracket to see how it works, clone it and run ",(0,r.jsx)(n.code,{children:"docker-compose up"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:evroon/bracket.git\ncd bracket\nsudo docker-compose up -d\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will start the backend and frontend of Bracket, as well as a postgres instance. You should now\nbe able to view bracket at ",(0,r.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),". You can log in with the following credentials:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Username: ",(0,r.jsx)(n.code,{children:"test@example.org"})]}),"\n",(0,r.jsxs)(n.li,{children:["Password: ",(0,r.jsx)(n.code,{children:"aeGhoe1ahng2Aezai0Dei6Aih6dieHoo"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To insert dummy rows into the database, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo docker exec bracket-backend pipenv run ./cli.py create-dev-db\n"})})]})}function l(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var r=t(7294);const c={},o=r.createContext(c);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);