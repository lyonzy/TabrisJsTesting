var Firebase = require('./firebase.js');
var shelvableDb = new Firebase('http://booklist1.firebaseio.com/');

items = [];
shelvableDb.child('bookCache').child('0bMLHltYucsC').once('value', function(data) {
    for (key in data.val()) {
        items.push(key);
    }
});


var page = tabris.create("Page", {
  title: "Hello, World!",
  topLevel: true
});

var list = tabris.create("CollectionView", {
  items: items
}).appendTo(page);

var button = tabris.create("Button", {
  text: "Native Widgets",
  layoutData: {centerX: 0, top: 100}
}).appendTo(page);

var label = tabris.create("TextView", {
  font: "24px",
  layoutData: {centerX: 0, top: [button, 50]}
}).appendTo(page);

button.on("select", function() {
  label.set("text", "Totally Rock!");
});

page.open();
