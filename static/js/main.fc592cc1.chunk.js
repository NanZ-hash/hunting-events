(this["webpackJsonphunting-event"]=this["webpackJsonphunting-event"]||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},25:function(e,t){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(18),r=n.n(o),s=(n(24),n(7)),c=n(1),i=n(2),u=n(4),v=n(3),m=n(5),h=(n(25),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(v.a)(t).call(this,e))).editEvent=function(e){e.preventDefault(),n.setState({eventName:n.state.editThis,newItem:[]})},n.onTextBoxChange=function(e){e.stopPropagation(),n.setState({newItem:e.target.value,editThis:n.state.newItem,eventName:n.state.editThis})},n.callDetail=function(e){n.props.handleDetailsClick()},n.state={editTHis:[],newItem:[],eventName:n.props.eventName},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:" event "},l.a.createElement("h4",{onClick:this.callDetail},this.state.eventName," "),l.a.createElement("h6",null," ",this.props.questRank," "),l.a.createElement("h6",null,this.props.location),l.a.createElement("form",null,l.a.createElement("input",{type:"txet",placeholder:"",vlaue:this.state.newItem,onChange:this.onTextBoxChange}),l.a.createElement("button",{onClick:this.editEvent}," Save ")))}}]),t}(l.a.Component)),d=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).AddEvent=function(e){console.log("Event add EVENT "),console.log("handling THE click!"),n.props.theEvent()},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.AddEvent}," Add "))}}]),t}(l.a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.event.map((function(t){return l.a.createElement("div",null," ",l.a.createElement(h,{eventName:t.name,key:t.id,questRank:t.requirements,des:t.description,target:t.successConditions,location:t.location.name,start:t.startTimestamp,end:t.endTimestamp,handleDetailsClick:function(){return e.props.handleDetailsClick(t)}}),l.a.createElement(d,{theEvent:function(){return e.props.theEvent(t)}}))}));return l.a.createElement("div",null,t)}}]),t}(l.a.Component),p=(n(26),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).RemoveEvent=function(e){console.log("Event removed "),console.log("handling THE REMOVE click!"),n.props.removeEvent()},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.RemoveEvent}," Remove "))}}]),t}(l.a.Component)),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(l)))).RemoveAllEvent=function(e){console.log("All Event removed "),console.log("handling THE REMOVE click!"),n.props.removeAllEvents()},n.RemoveAllClear=function(e){console.log("All Completaed! Event removed "),console.log("handling THE REMOVE click!"),n.props.removeQuestClear()},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.RemoveAllEvent}," Remove All "),l.a.createElement("button",{onClick:this.RemoveAllClear}," Remove All Clear"))}}]),t}(l.a.Component),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(v.a)(t).call(this,e))).clear=function(e){console.log(" Quest Clear ...  "),n.setState({isComplete:!0})},n.state={isComplete:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("button",{onClick:this.clear},"Done")}}]),t}(l.a.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.userEvents.map((function(t){return l.a.createElement("div",null,l.a.createElement(h,{eventName:t.name,key:t.id,questRank:t.requirements,des:t.description,target:t.successConditions,location:t.location.name,start:t.startTimestamp,end:t.endTimestamp,handleDetailsClick:function(){return e.props.handleDetailsClick(t)}}),l.a.createElement(p,{removeEvent:function(){return e.props.removeEvent(t)}}),l.a.createElement(b,{QuestClear:function(){return e.props.QuestClear(t)}}))})),n=new Date(this.props.start),a=("".concat(n.getFullYear()," / ").concat(n.getMonth()," / ").concat(n.getDay()),new Date(this.props.end));"".concat(a.getFullYear()," / ").concat(a.getMonth()," / ").concat(a.getDay());return l.a.createElement("div",null,l.a.createElement(f,{removeAllEvents:function(){return e.props.removeAllEvents(e.props.event)},removeQuestClear:function(){return e.props.removeQuestClear(e.props.event)}}),t)}}]),t}(l.a.Component);function g(e){var t=l.a.createElement("div",null,l.a.createElement("div",{className:"imblem"},l.a.createElement("img",{src:"https://mhwtactics.files.wordpress.com/2018/10/cropped-mhw-research_expedition_emblem1.png"}),l.a.createElement("h1",null,e.details.name)),l.a.createElement("div",{className:"meta"},l.a.createElement("h2",{className:"tagline"}," ",e.details.successConditions," "),l.a.createElement("p",{className:"detail-overview"}," ",e.details.description)));return l.a.createElement("div",null,t)}var O=n(8),j=n.n(O),k=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(u.a)(this,Object(v.a)(t).call(this,e))).handleAddEvent=function(e){var t=Object(s.a)(n.state.UserEvents);t.push(e),console.log("addind ".concat(e.name," to the UserEvents")),n.setState({UserEvents:t}),console.log(t)},n.handleQuestClear=function(e){var t=Object(s.a)(n.state.QuestClear);t.push(e),console.log("Check  ".concat(e.name," to the UserEvents")),n.setState({QuestClear:t}),console.log(t)},n.handleRemoveQuestClear=function(e){var t=e.name;console.log("value "+t);var a=n.state.UserEvents.filter((function(e){return!e.name.includes(t)}));console.log("Clear all Quests"+a),n.setState({UserEvents:a})},n.handleRemoveEvent=function(e){var t=Object(s.a)(n.state.UserEvents),a=t.indexOf(e);t.splice(a,1),console.log("Removing ".concat(e.name," from UserEvents ")),n.setState({UserEvents:t}),console.log(t)},n.handleRemoveAllEvent=function(e){var t=Object(s.a)(n.state.UserEvents),a=Object(s.a)(n.state.QuestClear);t=[],a=[],console.log("Removing All from UserEvents "),n.setState({UserEvents:t,QuestClear:a}),console.log(t)},n.handleDetailsClick=function(e){var t="https://mhw-db.com/events/".concat(e.id);j()({method:"get",url:t}).then((function(e){n.setState({current:e.data})})).catch((function(e){console.log("ERROR: ",e)}))},n.state={events:[],UserEvents:[],current:{},QuestClear:[]};return j()({method:"get",url:"https://mhw-db.com/events"}).then((function(e){n.setState({events:e.data})})).catch((function(e){console.log("ERROR: ",e)})),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"con"},l.a.createElement("div",{className:"div1"},l.a.createElement("h1",null," Event List "),l.a.createElement(E,{handleDetailsClick:this.handleDetailsClick,theEvent:this.handleAddEvent,event:this.state.events,userEvents:this.state.UserEvents})),l.a.createElement("div",{className:" div2 "},l.a.createElement("h1",null," User List "),l.a.createElement(C,{handleDetailsClick:this.handleDetailsClick,event:this.state.events,userEvents:this.state.UserEvents,removeEvent:this.handleRemoveEvent,removeAllEvents:this.handleRemoveAllEvent,QuestClear:this.handleQuestClear,removeQuestClear:this.handleRemoveQuestClear})),l.a.createElement("div",{className:"div3"}," ",l.a.createElement(g,{details:this.state.current})," ")))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.fc592cc1.chunk.js.map