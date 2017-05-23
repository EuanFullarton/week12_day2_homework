use cupboard;
db.dropDatabase();

use cupboard;
db.cupboard.insert({
  itemName: "Sugar",
  flavourType: "Sweet"
});

db.cupboard.insert({
  itemName: "Coffee",
  flavourType: "Bitter"
});

db.cupboard.insert({
  itemName: "Crackers",
  flavourType: "Savoury"
});

db.cupboard.insert({
  itemName: "Tinned Soup",
  flavourType: "Sour"
});

db.cupboard.find();

db.cupboard.update(
{ itemName: "Tinned Soup"},
{
  $set: { flavourType: "Savoury"}
});

db.cupboard.find();

db.cupboard.remove( {itemName: "Crackers"} );

db.cupboard.find();