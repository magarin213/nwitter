(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(34),s=n.n(c),i=n(9),o=n(22),u=n(6),l=n(10),j=n.n(l),b=n(17),d=n(24);n(43),n(59),n(60);d.a.initializeApp({apiKey:"AIzaSyBwwxnTsqAVRCBpL7DiLvxB38BpkGNOk1o",authDomain:"nwitter-51e20.firebaseapp.com",projectId:"nwitter-51e20",storageBucket:"nwitter-51e20.appspot.com",messagingSenderId:"571621407983",appId:"1:571621407983:web:74de7e696bee4e9ae26f1a"});var p=d.a,O=d.a.auth(),f=d.a.firestore(),h=d.a.storage(),m=n(1);var x=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),o=s[0],u=s[1],l=Object(a.useState)(!0),d=Object(i.a)(l,2),p=d[0],f=d[1],h=Object(a.useState)(""),x=Object(i.a)(h,2),v=x[0],g=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&u(a)},w=function(){var e=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:w,className:"container",children:[Object(m.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(m.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:y,className:"authInput"}),Object(m.jsx)("input",{className:"authInput authSubmit",type:"submit",value:p?"Create Account":"Log In"}),v&&Object(m.jsx)("span",{className:"authError",children:v})]}),Object(m.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:p?"Sign in":"Create Account"})]})},v=n(12),g=n(23);var y=function(){var e=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new p.auth.GoogleAuthProvider:"github"===n&&(a=new p.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(a);case 4:r=e.sent,console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"authContainer",children:[Object(m.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:"authBtns",children:[Object(m.jsxs)("button",{className:"authBtn",onClick:e,name:"google",children:["Continue with Google ",Object(m.jsx)(v.a,{icon:g.b})]}),Object(m.jsxs)("button",{className:"authBtn",onClick:e,name:"github",children:["Continue with Github ",Object(m.jsx)(v.a,{icon:g.a})]})]})]})},w=n(35),N=n(19);var k=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(a.useState)(!1),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),d=l[0],p=l[1],O=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,f.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return o((function(e){return!e}))},g=function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,f.doc("nweets/".concat(t.id)).update({text:d});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"nweet",children:s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(m.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;p(t)},className:"formInput"}),Object(m.jsx)("input",{className:"formBtn",type:"submit",value:"Update Nweet"})]}),Object(m.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(m.jsx)("img",{src:t.attachmentUrl}),n&&Object(m.jsxs)("div",{className:"nweet__actions",children:[Object(m.jsx)("span",{onClick:O,children:Object(m.jsx)(v.a,{icon:N.d})}),Object(m.jsx)("span",{onClick:x,children:Object(m.jsx)(v.a,{icon:N.a})})]})]})})},S=n(36);var C=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],d=u[1],p=function(){var e=Object(b.a)(j.a.mark((function e(n){var a,r,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==c){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===l){e.next=12;break}return r=h.ref().child("".concat(t.uid,"/").concat(Object(S.v4)())),e.next=8,r.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:c,createAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,f.collection("nweets").add(o);case 15:s(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("form",{onSubmit:p,className:"factoryform",children:[Object(m.jsxs)("div",{className:"factoryInput__container",children:[Object(m.jsx)("input",{className:"factoryInput__input",value:c,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(m.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(m.jsxs)("label",{for:"attach-file",className:"factoryInput__label",children:[Object(m.jsx)("span",{children:"Add photos"}),Object(m.jsx)(v.a,{icon:N.b})]}),Object(m.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(m.jsxs)("div",{className:"factoryform__attachment",children:[Object(m.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(m.jsxs)("div",{className:"factoryform__clear",onClick:function(){return d("")},children:[Object(m.jsx)("span",{children:"Remove"}),Object(m.jsx)(v.a,{icon:N.c})]})]})]})};var I=function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(a.useEffect)((function(){f.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(C,{userObj:t}),Object(m.jsx)("div",{style:{marginTop:30},children:c.map((function(e){return Object(m.jsx)(k,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})};var A=function(e){var t=e.userObj;return Object(m.jsx)("div",{children:Object(m.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(m.jsx)("li",{children:Object(m.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(m.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"2x"})})}),Object(m.jsx)("li",{children:Object(m.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(m.jsx)(v.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(m.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},B=n(25);var F=function(e){var t,n=e.refreshUser,r=e.userObj,c=Object(u.g)(),s=Object(a.useState)(r.displayName),o=Object(i.a)(s,2),l=o[0],d=o[1],p=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r.displayName===l){e.next=5;break}return e.next=4,r.updateProfile({displayName:l});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",(t={className:"container"},Object(B.a)(t,"className","profileForm"),Object(B.a)(t,"children",[Object(m.jsxs)("form",{onSubmit:p,children:[Object(m.jsx)("input",{onChange:function(e){var t=e.target.value;d(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:l,className:"formInput"}),Object(m.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(m.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){O.signOut(),c.push("/")},children:"Log Out"})]),t))},U=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(m.jsxs)(o.a,{children:[n&&Object(m.jsx)(A,{userObj:a}),Object(m.jsx)(u.d,{children:Object(m.jsx)(m.Fragment,{children:n?Object(m.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(m.jsx)(u.b,{exact:!0,path:"/",children:Object(m.jsx)(I,{userObj:a})}),Object(m.jsx)(u.b,{exact:!0,path:"/profile",children:Object(m.jsx)(F,{userObj:a,refreshUser:t})}),Object(m.jsx)(u.a,{from:"*",to:"/"})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(u.b,{exact:!0,path:"/",children:Object(m.jsx)(y,{})}),Object(m.jsx)(u.a,{from:"*",to:"/"})]})})})]})};var _=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(i.a)(c,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){O.onAuthStateChanged((function(e){u(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(m.jsx)(m.Fragment,{children:n?Object(m.jsx)(U,{refreshUser:function(){var e=O.currentUser;u({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(o),userObj:o}):"Initializing..."})};n(57);s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.e348c0a4.chunk.js.map