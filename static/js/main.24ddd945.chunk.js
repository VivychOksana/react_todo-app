(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,o){e.exports=o(18)},16:function(e,t,o){},17:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var n=o(0),l=o.n(n),a=o(5),i=o.n(a),r=(o(16),o(3)),c=o(2),d=o(6),s=o(7),u=o(9),m=o(8),f=o(10),h=function(e){var t=e.todo,o=e.currentIndex,n=e.handleChange,a=e.handleSubmit;return l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement("form",{onSubmit:function(e){return a(t,o,e)}},l.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:t,onChange:n})))},p=o(1),L=o.n(p),E=function(e){var t=e.todo,o=e.handleCheck,n=e.handleRemove,a=e.filterField,i=e.showTodos;return l.a.createElement("li",{className:L()({completed:t.completed})},l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",className:"toggle",id:t.id,checked:t.completed,onChange:function(e){return o(e,t,a,i)}}),l.a.createElement("label",{htmlFor:t.id},t.todoTitle),l.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return n(t)}})))},b=function(e){var t=e.filteredTodosList,o=e.handleCheck,n=e.handleRemove,a=e.toggleCompleted,i=e.filterField,r=e.showTodos;return l.a.createElement("section",{className:"main",style:{display:"block"}},l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onClick:function(e){return a(e)}}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),l.a.createElement("ul",{className:"todo-list"},t.map(function(e){return l.a.createElement(E,{key:e.id,todo:e,handleCheck:o,handleRemove:n,filterField:i,showTodos:r})})))},g=function(e){var t=e.todosList,o=e.filteredTodosList,n=e.filterField,a=e.showTodos,i=e.deleteAllCompleted;return l.a.createElement("footer",{className:"footer",style:{display:"block"}},l.a.createElement("span",{className:"todo-count"},"".concat(t.filter(function(e){return!1===e.completed}).length," "),"items left"),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("a",{href:"#/",className:L()({selected:"all"===n}),onClick:a},"All")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/active",className:L()({selected:"active"===n}),onClick:function(){return a("active")}},"Active")),l.a.createElement("li",null,l.a.createElement("a",{href:"#/completed",className:L()({selected:"completed"===n}),onClick:function(){return a("completed")}},"Completed"))),l.a.createElement("button",{type:"button",className:"clear-completed",style:{display:o.some(function(e){return!0===e.completed})?"block":"none"},onClick:function(){return i(a)}},"Clear completed"))},v=(o(17),function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),a=0;a<n;a++)l[a]=arguments[a];return(o=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={todo:"",currentIndex:0,todosList:[],filteredTodosList:[],filterField:"all"},o.handleChange=function(e){var t=e.target.value;o.setState({todo:t.trimLeft()})},o.handleSubmit=function(e,t,n){if(n.preventDefault(),e){var l={todoTitle:e,id:t,completed:!1};o.setState(function(e){return Object(c.a)({},e,{todo:"",currentIndex:e.currentIndex+1,todosList:[].concat(Object(r.a)(e.todosList),[l]),filteredTodosList:[].concat(Object(r.a)(e.todosList),[l]),filterField:"all"})})}},o.handleCheck=function(e,t,n,l){var a=e.target;function i(e,t,o){return e.map(function(e){return e.id===t?Object(c.a)({},e,{completed:o}):e})}o.setState(function(e){return{todosList:i(e.todosList,t.id,a.checked),filteredTodosList:i(e.filteredTodosList,t.id,a.checked)}}),"active"===n?l(n):"completed"===n&&l(n)},o.handleRemove=function(e){function t(e,t){return e.filter(function(e){return e.id!==t})}o.setState(function(o){return{todosList:t(o.todosList,e.id),filteredTodosList:t(o.filteredTodosList,e.id)}})},o.showTodos=function(e){switch(e){case"active":return o.setState(function(e){return{filteredTodosList:e.todosList.filter(function(e){return!1===e.completed}),filterField:"active"}});case"completed":return o.setState(function(e){return{filteredTodosList:e.todosList.filter(function(e){return!0===e.completed}),filterField:"completed"}});default:return o.setState(function(e){return{filteredTodosList:e.todosList,filterField:"all"}})}},o.toggleCompleted=function(e){var t=e.target;function n(e,t){return e.map(function(e){return Object(c.a)({},e,{completed:t})})}o.setState(function(e){return{filteredTodosList:n(e.filteredTodosList,t.checked),todosList:n(e.todosList,t.checked)}})},o.deleteAllCompleted=function(e){o.setState(function(e){return{filteredTodosList:e.todosList.filter(function(e){return!1===e.completed}),todosList:e.todosList.filter(function(e){return!1===e.completed})}}),e("all")},o}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todosList,o=e.todo,n=e.filteredTodosList,a=e.filterField,i=e.currentIndex;return t.length<1?l.a.createElement("section",{className:"todoapp"},l.a.createElement(h,{todo:o,currentIndex:i,handleChange:this.handleChange,handleSubmit:this.handleSubmit})):l.a.createElement("section",{className:"todoapp"},l.a.createElement(h,{todo:o,currentIndex:i,handleChange:this.handleChange,handleSubmit:this.handleSubmit}),l.a.createElement(b,{filteredTodosList:n,handleCheck:this.handleCheck,showTodos:this.showTodos,handleRemove:this.handleRemove,toggleCompleted:this.toggleCompleted,filterField:a}),l.a.createElement(g,{todosList:t,filteredTodosList:n,filterField:a,showTodos:this.showTodos,deleteAllCompleted:this.deleteAllCompleted}))}}]),t}(l.a.Component));i.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.24ddd945.chunk.js.map