(this["webpackJsonphunting-event"]=this["webpackJsonphunting-event"]||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},26:function(e,t){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),l=n.n(r),c=(n(24),n(7)),s=n(1),i=n(2),u=n(4),v=n(3),m=n(5),h=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:" event ",onClick:function(){return e.handleDetailsClick(e.props.event)}},o.a.createElement("h4",null,this.props.eventName," "),o.a.createElement("h6",null," ",this.props.questRank," "))}}]),t}(o.a.Component),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).AddEvent=function(e){console.log("Event add EVENT "),console.log("handling THE click!"),n.props.theEvent()},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.AddEvent}," Add "))}}]),t}(o.a.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.event.map((function(t){return o.a.createElement("div",null," ",o.a.createElement(h,{eventName:t.name,key:t.id,questRank:t.requirements,des:t.description,target:t.successConditions,location:t.location.name,start:t.startTimestamp,end:t.endTimestamp}),o.a.createElement(E,{theEvent:function(){return e.props.theEvent(t)}}))}));return o.a.createElement("div",null,t)}}]),t}(o.a.Component),p=(n(25),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).editEvent=function(e){console.log("Event edited "),console.log("handling THE click!")},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.editEvent}," Edit "))}}]),t}(o.a.Component)),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).RemoveEvent=function(e){console.log("Event removed "),console.log("handling THE REMOVE click!"),n.props.removeEvent()},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.RemoveEvent}," Remove "))}}]),t}(o.a.Component),b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).RemoveAllEvent=function(e){console.log("All Event removed "),console.log("handling THE REMOVE click!"),n.props.removeAllEvents()},n.RemoveAllClear=function(e){console.log("All Completaed! Event removed "),console.log("handling THE REMOVE click!"),n.props.removeQuestClear()},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.RemoveAllEvent}," Remove All "),o.a.createElement("button",{onClick:this.RemoveAllClear}," Remove All Clear"))}}]),t}(o.a.Component),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(v.a)(t).call(this,e))).clear=function(e){console.log(" Quest Clear ...  "),n.props.QuestClear()},n.state={isComplete:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.clear}," COMPLETE "))}}]),t}(o.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.userEvents.map((function(t){return o.a.createElement("div",null,o.a.createElement(h,{eventName:t.name,key:t.id,questRank:t.requirements,des:t.description,target:t.successConditions,location:t.location.name,start:t.startTimestamp,end:t.endTimestamp}),"// Notes Here",o.a.createElement(p,{editEvent:function(){return e.props.editEvent(t)}}),o.a.createElement(f,{removeEvent:function(){return e.props.removeEvent(t)}}),o.a.createElement(O,{QuestClear:function(){return e.props.QuestClear(t)}}))})),n=new Date(this.props.start),a=("".concat(n.getFullYear()," / ").concat(n.getMonth()," / ").concat(n.getDay()),new Date(this.props.end));"".concat(a.getFullYear()," / ").concat(a.getMonth()," / ").concat(a.getDay());return o.a.createElement("div",null,o.a.createElement(b,{removeAllEvents:function(){return e.props.removeAllEvents(e.props.event)},removeQuestClear:function(){return e.props.removeQuestClear(e.props.event)}}),t)}}]),t}(o.a.Component),j=(n(26),n(8)),C=n.n(j),k=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(u.a)(this,Object(v.a)(t).call(this,e))).handleAddEvent=function(e){var t=Object(c.a)(n.state.UserEvents);t.push(e),console.log("addind ".concat(e.name," to the UserEvents")),n.setState({UserEvents:t}),console.log(t)},n.handleQuestClear=function(e){var t=Object(c.a)(n.state.QuestClear);t.push(e),console.log("Check  ".concat(e.name," to the UserEvents")),n.setState({QuestClear:t}),console.log(t)},n.handleRemoveQuestClear=function(e){var t=e.name;console.log("value "+t);var a=n.state.UserEvents.filter((function(e){return!e.name.includes(t)}));console.log("Clear all Quests"+a),n.setState({UserEvents:a})},n.handleRemoveEvent=function(e){var t=Object(c.a)(n.state.UserEvents),a=t.indexOf(e);t.splice(a,1),console.log("Removing ".concat(e.name," from UserEvents ")),n.setState({UserEvents:t}),console.log(t)},n.handleRemoveAllEvent=function(e){var t=Object(c.a)(n.state.UserEvents),a=Object(c.a)(n.state.QuestClear);t=[],a=[],console.log("Removing All from UserEvents "),n.setState({UserEvents:t,QuestClear:a}),console.log(t)},n.handleDetailsClick=function(e){var t="https://mhw-db.com/events/".concat(e.id);C()({method:"get",url:t}).then((function(e){n.setState({current:e.data})})).catch((function(e){console.log("ERROR: ",e)}))},n.state={events:[],UserEvents:[],current:{},QuestClear:[]};return C()({method:"get",url:"https://mhw-db.com/events"}).then((function(e){n.setState({events:e.data})})).catch((function(e){console.log("ERROR: ",e)})),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"con"},o.a.createElement("div",{className:"div1"},o.a.createElement("h1",null," Event List "),o.a.createElement(d,{handleDetailsClick:this.handleDetailsClick,theEvent:this.handleAddEvent,event:this.state.events,userEvents:this.state.UserEvents})),o.a.createElement("div",{className:"div3"},"  "),o.a.createElement("div",{className:" div2 "},o.a.createElement("h1",null," User List "),o.a.createElement(g,{handleDetailsClick:this.handleDetailsClick,event:this.state.events,userEvents:this.state.UserEvents,removeEvent:this.handleRemoveEvent,removeAllEvents:this.handleRemoveAllEvent,QuestClear:this.handleQuestClear,removeQuestClear:this.handleRemoveQuestClear}))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.117c0a11.chunk.js.map