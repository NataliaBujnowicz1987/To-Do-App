(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),i=(a(14),a(6)),o=a(1),s=a(2),u=a(4),d=a(3),m=a(5),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",checked:!1,date:a.minDate},a.handleText=function(e){a.setState({text:e.target.value})},a.handleChecked=function(e){a.setState({checked:e.target.checked})},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleClick=function(){var e=a.state,t=e.text,n=e.date,l=e.checked;t.length>2?a.props.add(t,n,l)&&a.setState({text:"",checked:!1,date:a.minDate}):alert("Sorry, this text is too short")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=1*this.minDate.slice(0,4)+1;return e+="-12-31",l.a.createElement("div",{className:"addTask"},l.a.createElement("h2",null,"Add your task:"),l.a.createElement("input",{type:"text",placeholder:"Add a new task",value:this.state.text,onChange:this.handleText}),l.a.createElement("label",{htmlFor:"priority",style:{color:"red"}}," Priority "),l.a.createElement("input",{type:"checkbox",checked:this.state.checked,id:"priority",onChange:this.handleChecked}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"date"},"When is deadline? "),l.a.createElement("input",{type:"date",value:this.state.date,min:this.minDate,max:e,onChange:this.handleDate}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.handleClick},"Add a new task"))}}]),t}(n.Component),k=function(e){var t={color:"red"},a=e.task,n=a.text,r=a.date,c=a.id,i=a.active,o=a.priority,s=a.finishDate;if(i)return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"activeTasks-desktop"},l.a.createElement("strong",{style:o?t:null},n," "),"| Deadline: ",l.a.createElement("span",null," ",r," | "),l.a.createElement("button",{onClick:function(){return e.change(c)}},"Done"),l.a.createElement("button",{onClick:function(){return e.delete(c)}},"Delete")),l.a.createElement("div",{className:"activeTasks-tablet"},l.a.createElement("strong",{style:o?t:null},n," "),"| Deadline: ",l.a.createElement("span",null," ",r," "),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return e.change(c)}},"Done"),l.a.createElement("button",{onClick:function(){return e.delete(c)}},"Delete")),l.a.createElement("div",{className:"activeTasks-mobile"},l.a.createElement("strong",{style:o?t:null},n," "),l.a.createElement("br",null),"Deadline: ",l.a.createElement("span",null," ",r," "),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return e.change(c)}},"Done"),l.a.createElement("button",{onClick:function(){return e.delete(c)}},"Delete")));var u=new Date(s).toLocaleString();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"doneTasks-desktop"},l.a.createElement("p",null,l.a.createElement("b",null,n)," | Deadline: ",r,l.a.createElement("br",null),"Completed: ",l.a.createElement("span",null," ",u," "),l.a.createElement("button",{onClick:function(){return e.delete(c)}},"Delete"))),l.a.createElement("div",{className:"doneTasks-mobile"},l.a.createElement("p",null,l.a.createElement("b",null,n)," ",l.a.createElement("br",null),"Deadline: ",r," ",l.a.createElement("br",null),"Completed: ",l.a.createElement("span",null," ",u," ")," ",l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return e.delete(c)}},"Delete"))))},E=function(e){var t=e.tasks.filter(function(e){return e.active}),a=e.tasks.filter(function(e){return!e.active});a.sort(function(e,t){return t.finishDate-e.finishDate}),t.sort(function(e,t){return e.date<t.date?-1:e.date>t.date?1:0});var n=t.map(function(t){return l.a.createElement(k,{key:t.id,task:t,delete:e.delete,change:e.change})}),r=a.map(function(t){return l.a.createElement(k,{key:t.id,task:t,delete:e.delete,change:e.change})});return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"activeTask"},l.a.createElement("h3",null,"To-Do List:"),n.length>0?n:l.a.createElement("p",null,"you don't have any tasks to complete")),l.a.createElement("div",{className:"doneTask"},l.a.createElement("h3",null,"Done tasks: (",a.length,")"),r))},f=(a(15),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).counter=3,a.state={tasks:[{id:0,text:"learn react native",date:"2020-05-30",priority:!1,active:!0,finishDate:null},{id:1,text:"create portfolio webpage",date:"2020-06-30",priority:!0,active:!0,finishDate:null},{id:2,text:"visit Zermatt",date:"2020-09-30",priority:!1,active:!0,finishDate:null}]},a.deleteTask=function(e){var t=Object(i.a)(a.state.tasks),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),a.setState({tasks:t})},a.changeStatus=function(e){var t=Array.from(a.state.tasks);t.forEach(function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())}),a.setState({tasks:t})},a.addTask=function(e,t,n){var l={id:a.counter,text:e,date:t,priority:n,active:!0,finishDate:null};return a.counter++,a.setState(function(e){return{tasks:[].concat(Object(i.a)(e.tasks),[l])}}),!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{add:this.addTask}),l.a.createElement(E,{tasks:this.state.tasks,delete:this.deleteTask,change:this.changeStatus}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d092f8c5.chunk.js.map