(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2696:function(e,t,o){Promise.resolve().then(o.t.bind(o,8173,23)),Promise.resolve().then(o.bind(o,6769)),Promise.resolve().then(o.bind(o,4200))},6769:function(e,t,o){"use strict";var i=o(7437),s=o(7952),n=o(6648),l=o(2265),c=o(2531),d=o.n(c);t.default=()=>{let[e,t]=(0,l.useState)(1920);return(0,l.useEffect)(()=>(t(window.innerWidth),window.addEventListener("resize",()=>{t(window.innerWidth)}),()=>{window.removeEventListener("resize",()=>{t(window.innerWidth)})}),[]),(0,i.jsxs)("div",{className:d().image,children:[e>480&&(0,i.jsx)(n.default,{...s.m.backgroundDesktop}),e<=480&&(0,i.jsx)(n.default,{...s.m.backGroundMobile})]})}},4200:function(e,t,o){"use strict";o.d(t,{default:function(){return g}});var i=o(7437),s=o(2265),n=o(8165),l=o.n(n),c=e=>{let{activeFilter:t,setActiveFilter:o}=e;return(0,i.jsxs)("div",{className:l().filterBlock,children:[(0,i.jsx)("button",{className:t&&"all"===t?l().activeFilter:"",onClick:()=>o("all"),children:"All"}),(0,i.jsx)("button",{className:t&&"active"===t?l().activeFilter:"",onClick:()=>o("active"),children:"Active"}),(0,i.jsx)("button",{className:t&&"completed"===t?l().activeFilter:"",onClick:()=>o("completed"),children:"Completed"})]})},d=o(435),r=o(6235),a=o(4080),h=e=>{let{setToDos:t}=e,[o]=d.Z.useForm();return(0,i.jsx)("div",{children:(0,i.jsx)(d.Z,{form:o,layout:"vertical",onFinish:e=>{t(t=>[...t,{id:"".concat(Date.now()),todo:e.todo,isComplete:!1}]),r.ZP.success("ToDo item added"),o.resetFields()},onFinishFailed:()=>{r.ZP.error("Add ToDo failed")},autoComplete:"off",children:(0,i.jsx)(d.Z.Item,{name:"todo",rules:[{required:!0},{type:"string",min:2}],children:(0,i.jsx)(a.Z,{placeholder:"Create a new todo..."})})})})},m=o(7952),u=o(6648),p=o(5426),_=o(2039),f=o.n(_),x=e=>{let{toDos:t,setToDos:o,activeFilter:s}=e,n=e=>{o(t=>t.filter(t=>t.id!==e))},l=e=>{o(t=>t.map(t=>t.id===e?{...t,isComplete:!t.isComplete}:t))},c=e=>{o(e=>e.filter(e=>!0!==e.isComplete))},d=((e,t)=>{switch(t){case"active":return e.filter(e=>!e.isComplete);case"completed":return e.filter(e=>e.isComplete);default:return e}})(t,s);return(0,i.jsxs)("div",{className:f().todoListItems,children:[(0,i.jsx)(p.Z5,{onDragEnd:e=>{if(!e.destination)return;let i=Array.from(t),[s]=i.splice(e.source.index,1);i.splice(e.destination.index,0,s),o(i)},children:(0,i.jsx)(p.bK,{droppableId:"droppable",children:e=>(0,i.jsxs)("ul",{className:"".concat(f().todoList),...e.droppableProps,ref:e.innerRef,children:[d.map((e,t)=>(0,i.jsx)(p._l,{draggableId:e.id,index:t,children:t=>(0,i.jsxs)("li",{className:f().todoItem,ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,children:[(0,i.jsx)("input",{type:"checkbox",id:e.id,className:f().toDoCheckbox,onChange:()=>l(e.id)}),(0,i.jsxs)("label",{htmlFor:e.id,className:"".concat(f().toDoLabel," ").concat(e.isComplete&&f().complete),children:[(0,i.jsx)("span",{className:"".concat(f().checkedIcon," ").concat(e.isComplete&&f().done),children:e.isComplete&&(0,i.jsx)(u.default,{...m.m.checked})}),e.todo]}),(0,i.jsx)("button",{onClick:()=>n(e.id),children:(0,i.jsx)(u.default,{...m.m.delete})})]})},e.id)),e.placeholder]})})}),(0,i.jsxs)("div",{className:f().additionalInfo,children:[(0,i.jsxs)("span",{children:[t.filter(e=>!0!==e.isComplete).length," items left"]}),(0,i.jsx)("button",{onClick:()=>c(t),children:"Clear Completed"})]})]})},j=o(809),b=o.n(j),g=e=>{let{title:t,image:o}=e,[n,l]=(0,s.useState)([]),[d,r]=(0,s.useState)("all");return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:b().mainWrapper,children:[(0,i.jsxs)("div",{className:b().head,children:[(0,i.jsx)("h1",{children:t}),o]}),(0,i.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,i.jsx)(h,{setToDos:l}),(0,i.jsx)(x,{toDos:n,setToDos:l,activeFilter:d}),(0,i.jsx)(c,{activeFilter:d,setActiveFilter:r})]})]})})}},7952:function(e,t,o){"use strict";o.d(t,{m:function(){return i}});let i={backGroundMobile:{src:"/bg-mobile-light.jpg",width:480,height:200,alt:"background"},backgroundDesktop:{src:"/bg-desktop-light.jpg",width:1920,height:600,alt:"background"},moon:{src:"/icon-moon.svg",width:20,height:20,alt:"moon"},delete:{src:"/icon-cross.svg",width:15,height:15,alt:"delete toDo"},checked:{src:"/icon-check.svg",width:15,height:10,alt:"checked"}}},2531:function(e){e.exports={image:"Background_image__nIDg7"}},8165:function(e){e.exports={filterBlock:"FilterComponent_filterBlock__61Mal",activeFilter:"FilterComponent_activeFilter__XYhGX"}},2039:function(e){e.exports={todoListItems:"ToDoList_todoListItems__eNtAU",todoList:"ToDoList_todoList__AjEQ9",todoItem:"ToDoList_todoItem__YCHXf",toDoCheckbox:"ToDoList_toDoCheckbox__hXoXa",toDoLabel:"ToDoList_toDoLabel__qRvTb",complete:"ToDoList_complete__W74MF",checkedIcon:"ToDoList_checkedIcon__mQ4DF",done:"ToDoList_done__IhVZO",additionalInfo:"ToDoList_additionalInfo__mhYOE"}},809:function(e){e.exports={mainWrapper:"ToDo_mainWrapper__VTxka",head:"ToDo_head__1SghQ"}}},function(e){e.O(0,[571,216,955,971,23,744],function(){return e(e.s=2696)}),_N_E=e.O()}]);