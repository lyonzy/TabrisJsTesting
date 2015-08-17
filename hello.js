var node = require('tabris-js-node');
var Firebase = require('firebase');
var shelvableDb = new Firebase('http://booklist1.firebaseio.com/');

items = [];
shelvableDb.child('bookCache').child('0bMLHltYucsC').once('value', function(data) {
    for (key in data.val()) {
        console.log(key);
        items.push(key);
    }
});


var page = tabris.create("Page", {
  title: "Hello, World!",
  topLevel: true
});

var list = tabris.create("CollectionView", {
  layoutData: {left: 0, top: 0, right: 0, bottom: 0},
  itemHeight: 25,
  items: [1,2,3],
  initializeCell: function(cell) {
    var textView = tabris.create("TextView", {
      layoutData: {left: 30, top: 0, right: 30},
      alignment: "center"
    }).appendTo(cell);
    console.log('created textview');
    cell.on("change:item", function(widget, item) {
      console.log('change:item');
      textView.set("text", item);
    });
  }
}).appendTo(page);
console.log('created list');

page.open();
