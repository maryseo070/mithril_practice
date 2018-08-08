import m from "mithril";
var root = document.body;

import Form from "./FormComponent.js";

var App = {
  todos: {
    "buy milk": "not done",
    "take floyd to the vet": "done"
  },
  view: function(vnode) {
    return m("div", m(Form));
  }
};

m.mount(root, App);

// m.render(root, "Hello World");

// NOTES
// var header = m("h1", { class: "title" }, "Mithril App");
// var button = m("button", { class: "buttons" }, "Click me!");
// var main = m("main", [
//   m("h1", { class: "title" }, "Title"),
//   m("button", { class: "buttons" }, "click me")
// ]);
// // component
// var count = 0;
// var HelloComponent = {
//   view: function() {
//     return m("main", [
//       m("h1", { class: "title" }, "Component Render"),
//       m(
//         "button",
//         {
//           class: "buttons",
//           onclick: () => count++
//         },
//         count + " clicks"
//       )
//     ]);
//   }
// };
//
// var Splash = {
//   view: function() {
//     return m("a", { href: "#/!/hello" }, "Enter!");
//   }
// };

// var increment = function() {
//   m.request({
//     method: "PUT",
//     url: "//rem-rest-api.herokuapp.com/api/tutorial/1",
//     data: { count: count + 1 },
//     withCredentials: true
//   }).then(function(data) {
//     count = parseInt(data.count);
//   });
// };
// calling the incrememnt function upserts an object {count: 1} to the /api/tutorial/1 endpoint
// this endpoint returns an object with the same counte variable that was sent to it
// Notice that the count variable is only updated after the request completes,
// and is updated with the response value from the server now.

// m.render(root, main);
// to activate a component, use m.mount

// m.mount(root, HelloComponent);
// m(HelloComponent, {style: 'color: red;'}, "hello")

// The m.route function has the same auto-redrawing funcitonality
// that m.mount does. It also enables URL awarenes -- it lets Mithril know what to do when
// it sees a #! in the URL
// The 'root, "/splash"' means that's the default route
// m.route(root, "/splash", {
//   "/splash": Splash,
//   "/hello": HelloComponent
// });

// using m.mount, you don't need to manually call m.render to apply changes to the count
// variable.

// Mithril is very fast at rendering updates because it only touches the parts
// of the DOM it absolutely needs to

// Routing - going from one screen to another in an application with several screens (splash)

// The #! part is known as a hashbang, and it's a common convention used in
// Single Page Applications to indicate that the stuff after it (the /hello part)
// is a route path.

// XHR
// The XHR is just a way to talk to a server
