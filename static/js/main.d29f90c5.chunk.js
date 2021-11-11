(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(7),s=n.n(r),o=(n(15),n(10)),i=n(3),b=n(8),u=n.n(b),j=n(19),l=n(9),d=n.n(l),h=n(0);function O(t){var e=t.handleSubmit,n=t.handleChange,a=t.name,c=t.number;return Object(h.jsxs)("form",{onSubmit:e,children:[Object(h.jsxs)("label",{children:["Name ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:n,value:a})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{children:["Number ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:n,value:c})]}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:d.a.btn,type:"submit",children:"Add contact"})]})}var m=function(t){var e=t.handleChange;return Object(h.jsxs)("label",{children:["Find contact by name",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"filter",onChange:e})]})},f=n(6),p=n.n(f);function x(t){var e=t.contacts,n=t.filter,a=t.onDeleteBtn;return Object(h.jsx)("ul",{className:p.a.ContactList,children:e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})).map((function(t){return Object(h.jsxs)("li",{id:t.id,children:[t.name,": ",t.number,Object(h.jsx)("button",{className:p.a.ContactListBtn,onClick:a,children:"delete"})]},t.id)}))})}function C(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),b=s[0],l=s[1],d=Object(a.useState)(""),f=Object(i.a)(d,2),p=f[0],C=f[1],g=Object(a.useState)(""),v=Object(i.a)(g,2),k=v[0],L=v[1],S=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":l(a);break;case"number":C(a);break;case"filter":L(a);break;default:return}};return Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(h.jsxs)("div",{className:u.a.App,children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(O,{handleSubmit:function(t){if(t.preventDefault(),n.find((function(t){return t.name.toLowerCase()===b.toLowerCase()})))return alert('The name "'.concat(b,'" is already in contacts.'));c([{id:Object(j.a)(),name:b,number:p}].concat(Object(o.a)(n))),l(""),C("")},handleChange:S,name:b,number:p}),n.length>0&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Contacts"}),n.length>1&&Object(h.jsx)(m,{handleChange:S}),Object(h.jsx)(x,{contacts:n,filter:k,onDeleteBtn:function(t){c(n.filter((function(e){return e.id!==t.nativeEvent.path[1].id})))}})]})]})}s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__1tukT",ContactListBtn:"ContactList_ContactListBtn__PMCUA"}},8:function(t,e,n){t.exports={App:"App_App__1pD1O"}},9:function(t,e,n){t.exports={btn:"ContactForm_btn__2WaQz"}}},[[17,1,2]]]);
//# sourceMappingURL=main.d29f90c5.chunk.js.map