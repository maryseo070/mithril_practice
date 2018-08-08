import m from "mithril";

var Form = {
  view: function() {
    // return m("div", "hello from the form");
    return m(
      "",
      m("input[type=text][placeholder=Add To Do]"),
      m("button", "Add")
    );
  }
};

export default Form;
