(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(85)}])},85:function(e,s,t){"use strict";t.r(s);var c=t(5893),_=t(7294),n=t(7281),i=t.n(n);let a=()=>{let e=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,-1,0,0,0],[0,0,0,1,2,-1,0,0],[0,0,-1,2,1,0,0,0],[0,0,0,-1,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],s=[[0,-1],[1,0],[0,1],[-1,0],[-1,-1],[1,-1],[1,1],[-1,1]],[t,n]=(0,_.useState)(e),[a,d]=(0,_.useState)(1),[r,o]=(0,_.useState)(0),[l,x]=(0,_.useState)([0,0]),h=(e,c,_)=>{for(let n of s){let s=0===n[0]||0===n[1]?Math.max(Math.max(-e*n[0],(7-e)*n[0]),Math.max(-c*n[1],(7-c)*n[1])):Math.min(Math.max(-e*n[0],(7-e)*n[0]),Math.max(-c*n[1],(7-c)*n[1]));for(let i=1;i<=s&&t[c][e]<=0;i++){if(i>=2&&t[c+i*n[1]][e+i*n[0]]===a){for(let s=0;s<=i;s++)_[c+s*n[1]][e+s*n[0]]=a;d(3-a),o(0);break}if(t[c+i*n[1]][e+i*n[0]]<=0||1===i&&t[c+1*n[1]][e+1*n[0]]===a)break}}},u=(e,s)=>{let t=0;for(let c of s)t+=c.filter(s=>s===e).length;return t},m=()=>{n(e),o(0),d(1)},f=(e,s)=>{d(3-e);let t=JSON.parse(JSON.stringify(l));t[j()-1]++,x(t),setTimeout(()=>{s>=1&&confirm("ゲームが終了しました！\n".concat(0===j()?"勝負は引き分けです":"勝者は".concat(1===j()?"黒":"白","です"),"\nゲームを終了しますか?"))&&m()},0)},j=()=>{let e=u(1,t),s=u(2,t);return e===s?0:e>s?1:2},N=(e,t)=>{for(let c=0;c<64;c++){let _=c%8,n=(c-c%8)/8;for(let c of(-1===e[n][_]&&(e[n][_]=0),s)){let s=0===c[0]||0===c[1]?Math.max(Math.max(-_*c[0],(7-_)*c[0]),Math.max(-n*c[1],(7-n)*c[1])):Math.min(Math.max(-_*c[0],(7-_)*c[0]),Math.max(-n*c[1],(7-n)*c[1]));for(let i=1;i<=s&&e[n][_]<=0;i++){if(i>=2&&e[n+i*c[1]][_+i*c[0]]===t){e[n][_]=-1;break}if(e[n+i*c[1]][_+i*c[0]]<=0||e[n+c[1]][_+c[0]]===t&&1===i)break}}}},k=(e,s)=>{if(-1===t[s][e]){let c=JSON.parse(JSON.stringify(t));h(e,s,c),N(c,3-a),n(c),0===u(-1,c)&&(f(3-a,r),N(c,3-a),0===u(-1,c)&&(f(a,r+1),N(c,3-a)))}};return(0,c.jsxs)("div",{className:i().container,children:[(0,c.jsxs)("header",{className:i().header,children:[(0,c.jsxs)("div",{className:i().header__title,children:[(0,c.jsx)("h1",{children:"Reversi"}),(0,c.jsx)("p",{children:"Created in INIAD Developers"})]}),(0,c.jsx)("button",{className:i().header__button,onClick:m,children:(0,c.jsxs)("svg",{strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,c.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,c.jsx)("path",{d:"M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"}),(0,c.jsx)("path",{d:"M20 4v5h-5"})]})})]}),(0,c.jsx)("div",{className:i().board,children:t.map((e,s)=>e.map((e,t)=>(0,c.jsxs)("div",{className:i().cell,onClick:()=>k(t,s),children:[e>0&&(0,c.jsx)("div",{className:i().disc,style:{backgroundColor:1===e?"#444":"#fff"}}),-1===e&&(0,c.jsx)("div",{className:i().suggest})]},"".concat(t,"_").concat(s))))}),(0,c.jsxs)("div",{className:i().status,children:[(0,c.jsxs)("div",{className:i().status__content,children:[(0,c.jsx)("h2",{children:"TURN"}),(0,c.jsxs)("p",{children:[a-1?"白":"黒","のターン"]})]}),(0,c.jsxs)("div",{className:i().status__content,children:[(0,c.jsx)("h2",{children:"COUNT"}),(0,c.jsx)("div",{}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"".concat(i()["count__disc--black"]," ").concat(i().count__disc)}),(0,c.jsx)("span",{children:u(1,t)})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"".concat(i()["count__disc--white"]," ").concat(i().count__disc)}),(0,c.jsx)("span",{children:u(2,t)})]})]}),(0,c.jsxs)("div",{className:i().status__content,children:[(0,c.jsx)("h2",{children:"SCORE"}),(0,c.jsxs)("div",{className:i().score,children:[(0,c.jsx)("div",{className:"".concat(i().score__disc," ").concat(i()["score__disc--black"])}),(0,c.jsxs)("span",{className:i().score__text,children:[l[0]," - ",l[1]]}),(0,c.jsx)("div",{className:"".concat(i().score__disc," ").concat(i()["score__disc--white"])})]})]})]})]})};s.default=a},7281:function(e){e.exports={container:"index_container__twYoi",board:"index_board__j13uV",cell:"index_cell__HHk1K",disc:"index_disc__M07oT",suggest:"index_suggest__dz7ZG",anim1:"index_anim1__KF6PN",header:"index_header__8k7Yb",header__title:"index_header__title__q4_eR",header__button:"index_header__button__g3OzV",status:"index_status__vI3Ef",status__content:"index_status__content__5DxfT",count__disc:"index_count__disc__mInWZ","count__disc--black":"index_count__disc--black__VFDAz","count__disc--white":"index_count__disc--white__o_37w",score:"index_score__fzQsP",score__disc:"index_score__disc__W6wXK","score__disc--black":"index_score__disc--black__dry5k","score__disc--white":"index_score__disc--white__U8gp2",score__text:"index_score__text__gu3pw"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);