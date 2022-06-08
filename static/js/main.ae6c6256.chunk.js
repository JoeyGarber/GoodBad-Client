(this["webpackJsonpGoodBad-Client"]=this["webpackJsonpGoodBad-Client"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(31),i=n.n(r),o=(n(78),n(54)),c=n(8),u=n(9),l=n(12),d=n(11),h=n(14),g=n(115),j=n(2),b=n(3),m=n(1),p=["user","component","render"],O=function(e){var t=e.user,n=e.component,s=e.render,a=Object(b.a)(e,p);return t&&s?Object(m.jsx)(h.b,Object(j.a)(Object(j.a)({},a),{},{render:s})):Object(m.jsx)(h.b,Object(j.a)(Object(j.a)({},a),{},{render:function(e){return t?Object(m.jsx)(n,Object(j.a)({},e)):Object(m.jsx)(h.a,{to:"/"})}}))},f=n(60),x=(n(87),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleClose=function(){return s.setState({show:!1})},s.state={show:!0},s.timeoutId=null,s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,s=e.message,a=e.deleteAlert,r=e.id;return this.state.show||setTimeout((function(){a(r)}),300),Object(m.jsx)(f.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(f.a.Heading,{children:n}),Object(m.jsx)("p",{className:"alert-body",children:s})]})})}}]),n}(a.a.Component)),v=n(73),w=n(44),S=n(10),C=Object(m.jsxs)(s.Fragment,{children:[Object(m.jsx)(S.c,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(m.jsx)(S.c,{to:"/sign-out",className:"nav-link",children:"Sign Out"}),Object(m.jsx)(S.c,{exact:!0,to:"/suggestions",className:"nav-link",children:"Suggestions"}),Object(m.jsx)(S.c,{exact:!0,to:"/suggestions-create",className:"nav-link",children:"Create Suggestion"}),Object(m.jsx)(S.c,{exact:!0,to:"/userthings",className:"nav-link",children:"User Things"})]}),y=Object(m.jsxs)(s.Fragment,{children:[Object(m.jsx)(S.c,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(m.jsx)(S.c,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),k=Object(m.jsx)(s.Fragment,{children:Object(m.jsx)(S.c,{exact:!0,to:"/",className:"nav-link",children:"Home"})}),A=function(e){var t=e.user;return Object(m.jsxs)(w.a,{variant:"dark",expand:"md",children:[Object(m.jsx)(w.a.Brand,{children:Object(m.jsx)(S.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"GoodBad-Client"})}),Object(m.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsxs)(v.a,{className:"ml-auto",children:[t&&Object(m.jsxs)("span",{className:"navbar-text mr-2",children:["Welcome, ",t.email]}),k,t?C:y]})})]})},T=n(6),I="https://vast-reaches-13226.herokuapp.com",P="http://localhost:4741",N="localhost"===window.location.hostname?P:I,B=n(18),G=n.n(B),L=function(e){return G()({url:N+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},F=n(7),D=n(24),U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleChange=function(e){return s.setState(Object(T.a)({},e.target.name,e.target.value))},s.onSignUp=function(e){e.preventDefault();var t,n=s.props,a=n.msgAlert,r=n.history,i=n.setUser;(t=s.state,G()({method:"POST",url:N+"/sign-up/",data:{credentials:{email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return L(s.state)})).then((function(e){return i(e.data.user)})).then((function(){return a({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return r.push("/")})).catch((function(e){s.setState({email:"",password:"",passwordConfirmation:""}),a({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},s.state={email:"",password:"",passwordConfirmation:""},s}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,s=e.passwordConfirmation;return Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(m.jsx)("h3",{children:"Sign Up"}),Object(m.jsxs)(F.a,{onSubmit:this.onSignUp,children:[Object(m.jsxs)(F.a.Group,{controlId:"email",children:[Object(m.jsx)(F.a.Label,{children:"Email address"}),Object(m.jsx)(F.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(m.jsxs)(F.a.Group,{controlId:"password",children:[Object(m.jsx)(F.a.Label,{children:"Password"}),Object(m.jsx)(F.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(m.jsxs)(F.a.Group,{controlId:"passwordConfirmation",children:[Object(m.jsx)(F.a.Label,{children:"Password Confirmation"}),Object(m.jsx)(F.a.Control,{required:!0,name:"passwordConfirmation",value:s,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(m.jsx)(D.a,{variant:"light",type:"submit",children:"Submit"})]})]})})}}]),n}(s.Component),E=Object(h.f)(U),H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleChange=function(e){return s.setState(Object(T.a)({},e.target.name,e.target.value))},s.onSignIn=function(e){e.preventDefault();var t=s.props,n=t.msgAlert,a=t.history,r=t.setUser;L(s.state).then((function(e){return r(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){s.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},s.state={email:"",password:""},s}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(m.jsx)("h3",{children:"Sign In"}),Object(m.jsxs)(F.a,{onSubmit:this.onSignIn,children:[Object(m.jsxs)(F.a.Group,{controlId:"email",children:[Object(m.jsx)(F.a.Label,{children:"Email address"}),Object(m.jsx)(F.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(m.jsxs)(F.a.Group,{controlId:"password",children:[Object(m.jsx)(F.a.Label,{children:"Password"}),Object(m.jsx)(F.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(m.jsx)(D.a,{variant:"light",type:"submit",children:"Submit"})]})]})})}}]),n}(s.Component),_=Object(h.f)(H),z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,s=e.clearUser;(function(e){return G()({url:N+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return s()}))}},{key:"render",value:function(){return""}}]),n}(s.Component),q=Object(h.f)(z),W=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleChange=function(e){return s.setState(Object(T.a)({},e.target.name,e.target.value))},s.onChangePassword=function(e){e.preventDefault();var t=s.props,n=t.msgAlert,a=t.history,r=t.user;(function(e,t){return G()({url:N+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(s.state,r).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){s.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},s.state={oldPassword:"",newPassword:""},s}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(m.jsx)("h3",{children:"Change Password"}),Object(m.jsxs)(F.a,{onSubmit:this.onChangePassword,children:[Object(m.jsxs)(F.a.Group,{controlId:"oldPassword",children:[Object(m.jsx)(F.a.Label,{children:"Old password"}),Object(m.jsx)(F.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(m.jsxs)(F.a.Group,{controlId:"newPassword",children:[Object(m.jsx)(F.a.Label,{children:"New Password"}),Object(m.jsx)(F.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(m.jsx)(D.a,{variant:"light",type:"submit",children:"Submit"})]})]})})}}]),n}(s.Component),M=Object(h.f)(W),R=function(e,t){return G()({method:"GET",url:N+"/suggestions/"+e,headers:{Authorization:"Bearer ".concat(t.token)}})},J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).inputHandler=function(e){var t=e.target.value.toLowerCase();s.setState({inputText:t})},s.state={suggestions:[],inputText:""},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,s=t.msgAlert;(function(e){return G()({method:"GET",url:N+"/suggestions/",headers:{Authorization:"Bearer ".concat(e.token)}})})(n).then((function(t){return e.setState({suggestions:t.data.suggestions})})).then((function(){s({heading:"Index success",message:"Showing all suggestions",variant:"success"})})).catch((function(e){s({heading:"Index fail",message:"Index error: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this,n=this.state.suggestions;return null===n?"Loading...":(e=0===n.length?Object(m.jsx)("h5",{children:"No suggestions. Try adding one"}):n.filter((function(e){return e.title.toLowerCase().indexOf(t.state.inputText)>-1||""===t.state.inputText})).map((function(e){return Object(m.jsx)(S.b,{style:{textDecoration:"none",color:"white"},to:"/suggestions/".concat(e._id),children:Object(m.jsx)("p",{children:e.title})},e._id)})),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{className:"searchbar",type:"text",placeholder:"search for suggestions",onChange:this.inputHandler}),e]}))}}]),n}(s.Component),V=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleChange=function(e){return s.setState(Object(T.a)({},e.target.name,e.target.value))},s.handleSubmit=function(e){e.preventDefault();var t=s.props,n=t.user,a=t.msgAlert,r=t.history;(function(e,t){return G()({method:"POST",url:N+"/suggestions/",headers:{Authorization:"Bearer ".concat(t.token)},data:{suggestion:{title:e.title}}})})(s.state,n).then((function(){return r.push("/suggestions/")})).then((function(){a({heading:"Suggestion created",message:"Noted!",variant:"success"})})).catch((function(e){a({heading:"Suggestion creation failed",message:"Suggestion error: "+e.message,variant:"danger"})}))},s.state={title:""},s}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(F.a,{onSubmit:this.handleSubmit,children:[Object(m.jsxs)(F.a.Group,{controlId:"title",children:[Object(m.jsx)(F.a.Label,{children:Object(m.jsx)("h3",{children:"Create Suggestion"})}),Object(m.jsx)(F.a.Control,{required:!0,type:"text",name:"title",value:this.state.title,placeholder:"Suggestion",onChange:this.handleChange})]}),Object(m.jsx)(D.a,{variant:"light",type:"submit",children:"Submit"})]})})}}]),n}(s.Component),Y=Object(h.f)(V),K=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleDelete=function(){var e=s.props,t=e.match,n=e.user,a=e.msgAlert,r=e.history;(function(e,t){return G()({method:"DELETE",url:N+"/suggestions/"+e,headers:{Authorization:"Bearer ".concat(t.token)}})})(t.params.id,n).then((function(){return r.push("/suggestions/")})).then((function(){a({heading:"Successfully Deleted Suggestion",message:"WooHoo!",variant:"success"})})).catch((function(e){a({heading:"Delete Suggestion Failed",message:"Error message: "+e.message,variant:"danger"})}))},s.state={suggestion:null},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,s=t.user,a=t.msgAlert;R(n.params.id,s).then((function(t){return e.setState({suggestion:t.data.suggestion})})).then((function(){a({heading:"Successfully Showing Suggestion",message:"WooHoo!",variant:"success"})})).catch((function(e){a({heading:"Show Suggestion Failed",message:"Error message: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){if(null===this.state.suggestion)return"Loading...";var e=this.state.suggestion,t=e.title,n=e.owner,s=this.props,a=s.user,r=s.match,i=s.history;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h4",{children:t}),a._id===n&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(D.a,{variant:"light",onClick:function(){return i.push("/suggestions/".concat(r.params.id,"/update"))},children:"Update"}),Object(m.jsx)(D.a,{variant:"light",onClick:this.handleDelete,children:"Delete"})]})]})}}]),n}(s.Component),Q=Object(h.f)(K),X=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleChange=function(e){return s.setState(Object(T.a)({},e.target.name,e.target.value))},s.handleSubmit=function(e){e.preventDefault();var t=s.props,n=t.user,a=t.msgAlert,r=t.match,i=t.history;(function(e,t,n){return G()({method:"PATCH",url:N+"/suggestions/"+e,headers:{Authorization:"Bearer ".concat(n.token)},data:{suggestion:{title:t.title}}})})(r.params.id,s.state,n).then((function(){return i.push("/suggestions")})).then((function(){a({heading:"Suggestion updated",message:"Now it's different!",variant:"success"})})).catch((function(e){a({heading:"Suggestion update failed",message:"Suggestion error: "+e.message,variant:"danger"})}))},s.state={title:""},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,s=t.user,a=t.msgAlert;R(n.params.id,s).then((function(t){return e.setState({title:t.data.suggestion.title})})).then((function(){a({heading:"Successfully Showing Suggestion",message:"WooHoo!",variant:"success"})})).catch((function(e){a({heading:"Show Suggestion Failed",message:"Error message: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(F.a,{onSubmit:this.handleSubmit,children:[Object(m.jsxs)(F.a.Group,{controlId:"title",children:[Object(m.jsx)(F.a.Label,{children:"Title"}),Object(m.jsx)(F.a.Control,{required:!0,type:"text",name:"title",value:this.state.title,placeholder:"Update Suggestion",onChange:this.handleChange})]}),Object(m.jsx)(D.a,{variant:"light",type:"submit",children:"Submit"})]})})}}]),n}(s.Component),Z=Object(h.f)(X),$=n(72),ee=n.n($),te=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).onSwipe=function(e,t){(function(e,t,n){return G()({method:"PATCH",url:N+"/things/"+e,headers:{Authorization:"Bearer ".concat(n.token)},data:{vote:t}})})(t,e,s.props.user).then((function(){return function(e,t,n){return G()({method:"PATCH",url:N+"/users/",headers:{Authorization:"Bearer ".concat(n.token)},data:{vote:t,id:e}})}(t,e,s.props.user)})).catch((function(e){return console.log(e)}))},s.state={things:null,showLeft:null,showRight:null,mustChoose:null,showInstructions:!0},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.user,G()({method:"GET",url:N+"/things/",headers:{Authorization:"Bearer ".concat(e.token)}})).then((function(e){return t.setState({things:e.data.things})}))}},{key:"render",value:function(){var e=this;if(null===this.state.things)return"Loading...";var t=this.state.things.filter((function(t){return!t.gooders.includes(e.props.user._id)&&!t.baders.includes(e.props.user._id)})).map((function(t){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"card-container",children:Object(m.jsx)(ee.a,{className:"tindercard",onSwipe:function(n){return e.onSwipe(n,t._id)},preventSwipe:["up","down"],children:Object(m.jsxs)("div",{className:"carddiv",children:[Object(m.jsx)("img",{id:"card-img",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_card.svg/788px-White_card.svg.png"}),Object(m.jsx)("h1",{className:"centered",children:t.title})]})})},t.title),Object(m.jsxs)("div",{className:"buttons-bar",children:[Object(m.jsx)("button",{variant:"light",onClick:function(){return e.setState({showLeft:!0})},children:"Bad"}),Object(m.jsx)("button",{variant:"light",onClick:function(){return e.setState({mustChoose:!0})},children:"Can\u2019t decide?"}),Object(m.jsx)("button",{variant:"light",onClick:function(){return e.setState({showRight:!0})},children:"Good"})]})]})}));return Object(m.jsxs)(m.Fragment,{children:[this.state.showLeft&&Object(m.jsx)("h5",{className:"left-side",onClick:function(){return e.setState({showLeft:null})},children:"Swipe left, then, silly. It\u2019s Tinder rules."}),this.state.showRight&&Object(m.jsx)("h5",{className:"right-side",onClick:function(){return e.setState({showRight:null})},children:"Swipe right, then, silly. It\u2019s Tinder rules."}),this.state.mustChoose&&Object(m.jsx)("h5",{className:"must-choose",onClick:function(){return e.setState({mustChoose:null})},children:"Yes you can, I believe in you. Also you have to."}),this.state.showInstructions&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{onClick:function(){return e.setState({showInstructions:!1})},children:"Instructions!"}),Object(m.jsx)("p",{onClick:function(){return e.setState({showInstructions:!1})},children:"GoodBad is Tinder for things! If you think a thing is good, swipe right. If you think it\u2019s bad, swipe left. After you\u2019ve voted, you\u2019ll be able to see how other people voted on that thing too, and even the usernames of the other voters! Just head over to User Things. (Hint: Clicking on text dismisses it.)"})]}),this.state.showLeft,t]})}}]),n}(s.Component),ne=Object(h.f)(te),se=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).inputHandler=function(e){var t=e.target.value.toLowerCase();s.setState({inputText:t})},s.state={userGoods:[],userBads:[],inputText:""},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,s=t.msgAlert;(function(e){return G()({method:"GET",url:N+"/user/things/",headers:{Authorization:"Bearer ".concat(e.token)}})})(n).then((function(t){e.setState({userGoods:t.data.user.goods}),e.setState({userBads:t.data.user.bads})})).then((function(){s({heading:"Index success",message:"Showing all user things",variant:"success"})})).catch((function(e){s({heading:"Index fail",message:"Index error: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.userGoods,s=t.userBads;if(null===n&&null===s)return"Loading...";var a=n.filter((function(t){return t.title.toLowerCase().indexOf(e.state.inputText)>-1||""===e.state.inputText})).map((function(e){var t=e.gooders.length,n=e.baders.length,s=t+n;return Object(m.jsxs)("div",{children:[Object(m.jsx)(S.b,{style:{textDecoration:"none",color:"white"},to:"/thingstats/"+e._id,children:Object(m.jsxs)("h3",{children:[e.title," - User Vote: Good"]})}),Object(m.jsxs)("p",{children:["Total goods: ",t]}),Object(m.jsxs)("p",{children:["Good percentage: ",(t/s*100).toFixed(),"%"]}),Object(m.jsxs)("p",{children:["Total bads: ",n]}),Object(m.jsxs)("p",{children:["Bad percentage: ",(n/s*100).toFixed(),"%"]})]},e._id)})),r=s.filter((function(t){return t.title.toLowerCase().indexOf(e.state.inputText)>-1||""===e.state.inputText})).map((function(e){var t=e.gooders.length,n=e.baders.length,s=t+n;return Object(m.jsxs)("div",{children:[Object(m.jsx)(S.b,{style:{textDecoration:"none",color:"white"},to:"/thingstats/"+e._id,children:Object(m.jsxs)("h3",{children:[e.title," - User Vote: Bad"]})}),Object(m.jsxs)("p",{children:["Total goods: ",t]}),Object(m.jsxs)("p",{children:["Good percentage: ",(t/s*100).toFixed(),"%"]}),Object(m.jsxs)("p",{children:["Total bads: ",n]}),Object(m.jsxs)("p",{children:["Bad percentage: ",(n/s*100).toFixed(),"%"]})]},e._id)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{className:"searchbar",type:"text",onChange:this.inputHandler}),a,r]})}}]),n}(s.Component),ae=Object(h.f)(se),re=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={thing:null},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.match,s=t.user,a=t.msgAlert;(function(e,t){return G()({method:"GET",url:N+"/things/"+e,headers:{Authorization:"Bearer ".concat(t.token)}})})(n.params.id,s).then((function(t){console.log(t.data),e.setState({thing:t.data.thing}),console.log(e.state.thing.title)})).then((function(){a({heading:"Successfully Showing Suggestion",message:"WooHoo!",variant:"success"})})).catch((function(e){a({heading:"Show Suggestion Failed",message:"Error message: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){if(null===this.state.thing)return Object(m.jsx)("p",{children:"Loading..."});var e=this.state.thing.gooders.map((function(e){return Object(m.jsxs)("p",{children:[e.email," gooded this thing."]},e._id)})),t=this.state.thing.baders.map((function(e){return Object(m.jsxs)("p",{children:[e.email," badded this thing."]},e._id)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:this.state.thing.title}),e,t]})}}]),n}(s.Component),ie=Object(h.f)(re),oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).setUser=function(e){return s.setState({user:e})},s.clearUser=function(){return s.setState({user:null})},s.deleteAlert=function(e){s.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},s.msgAlert=function(e){var t=e.heading,n=e.message,a=e.variant,r=Object(g.a)();s.setState((function(e){return{msgAlerts:[].concat(Object(o.a)(e.msgAlerts),[{heading:t,message:n,variant:a,id:r}])}}))},s.state={user:null,msgAlerts:[]},s}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,a=t.user;return Object(m.jsxs)(s.Fragment,{children:[Object(m.jsx)(A,{user:a}),n.map((function(t){return Object(m.jsx)(x,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(m.jsxs)("main",{className:"container",children:[Object(m.jsx)(h.b,{path:"/sign-up",render:function(){return Object(m.jsx)(E,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(m.jsx)(h.b,{path:"/sign-in",render:function(){return Object(m.jsx)(_,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(m.jsx)(O,{user:a,path:"/sign-out",render:function(){return Object(m.jsx)(q,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(m.jsx)(O,{user:a,path:"/change-password",render:function(){return Object(m.jsx)(M,{msgAlert:e.msgAlert,user:a})}}),Object(m.jsx)(O,{user:a,exact:!0,path:"/suggestions",render:function(){return Object(m.jsx)(J,{msgAlert:e.msgAlert,user:a})}}),Object(m.jsx)(O,{user:a,exact:!0,path:"/suggestions-create",render:function(){return Object(m.jsx)(Y,{msgAlert:e.msgAlert,user:a})}}),Object(m.jsx)(O,{user:a,exact:!0,path:"/suggestions/:id",render:function(){return Object(m.jsx)(Q,{msgAlert:e.msgAlert,user:a})}}),Object(m.jsx)(O,{user:a,exact:!0,path:"/suggestions/:id/update",render:function(){return Object(m.jsx)(Z,{msgAlert:e.msgAlert,user:a})}}),Object(m.jsx)(O,{user:a,exact:!0,path:"/",render:function(){return Object(m.jsx)(ne,{msgAlert:e.msgAlert,user:a})}}),Object(m.jsx)(O,{user:a,exact:!0,path:"/userthings",render:function(){return Object(m.jsx)(ae,{msgAlert:e.msgAlert,user:a})}}),Object(m.jsx)(O,{user:a,exact:!0,path:"/thingstats/:id",render:function(){return Object(m.jsx)(ie,{msgAlert:e.msgAlert,user:a})}})]})]})}}]),n}(s.Component),ce=Object(m.jsx)(S.a,{basename:"/GoodBad-Client",children:Object(m.jsx)(oe,{})});i.a.render(ce,document.getElementById("root"))},78:function(e,t,n){},87:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.ae6c6256.chunk.js.map