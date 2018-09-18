//Define database as object

const HomeInventoryDatabase = {};

//Define arrays (tables) in database to store each item

HomeInventoryDatabase.furniture = [];
HomeInventoryDatabase.crafts = [];
HomeInventoryDatabase.electronics = [];

// The record player is an electronic data item
const recordPlayer = {
  name: "Record Player",
  location: "Kitchen wood shelf",
  description:
    "I enjoy listening to my father's old vinyal collection on this record player while I cook food."
};

// The wood kitchen table is a furniture data item
const woodKitchenTable = {
  name: "Wood Kitchen Table",
  location: "Kitchen",
  description: "This is a bar-style kitchen table that I found on craigslist."
};

//The flatscreen television is an electronic data item
const flatscreenTelevison = {
  name: "Flatscreen Televison",
  location: "Family room",
  description: "This is a 2 year old TV that I watch mostly sports on."
};

//The couch is a furniture data item
const couch = {
  name: "Couch",
  location: "Family room",
  description:
    "I sit on this green piece of furniture to relax or watch television."
};

//The bed is a furniture data item
const bed = {
  name: "Bed",
  location: "Master Bedroom",
  description:
    "I share this queen-size bed with my fiance and dog. I wish it was a king-size bed."
};

//The sewing box is a craft data item
const sewingBox = {
  name: "Sewing Box",
  location: "Master Bedroom nightstand",
  description: "My fiance likes to do cross-stich when laying in bed at night."
};

//This nightstand is a furniture data item
const nightstand = {
  name: "Nightstand",
  location: "Master Bedroom",
  description:
    "This is a hand-painted, white nightstand that I refinished after finding it at a flea market in 2015."
};

//This crib is a furniture data item
const crib = {
  name: "Crib",
  location: "Nursery",
  description:
    "This is a new, white crib purchashed from Pottery Barn Baby (e_e)"
};

//This colored pencil set is a craft data item
const coloredPencilSet = {
  name: "Colored Pencil Set",
  location: "Kitchen wood shelf",
  description:
    "This is a 64-piece colored penicil set used frequently by my fiance and I to color with our child."
};

//This Apple Desktop is an electronic data item
const appleDesktop = {
  name: "Apple Desktop",
  location: "Kicten Built-In Desk",
  description:
    "This is an Apple desktop computer that my fiance and I share. Unfortunatly, is it readily used."
};

HomeInventoryDatabase.electronics.push(recordPlayer);
HomeInventoryDatabase.furniture.push(woodKitchenTable);
HomeInventoryDatabase.electronics.push(flatscreenTelevison);
HomeInventoryDatabase.furniture.push(couch);
HomeInventoryDatabase.furniture.push(bed);
HomeInventoryDatabase.crafts.push(sewingBox);
HomeInventoryDatabase.furniture.push(nightstand);
HomeInventoryDatabase.furniture.push(crib);
HomeInventoryDatabase.crafts.push(coloredPencilSet);
HomeInventoryDatabase.electronics.push(appleDesktop);

const saveDatabase = function(HomeInventoryDatabase, localStorageKey) {
  const stringifiedDatabase = JSON.stringify(HomeInventoryDatabase);
  localStorage.setItem(localStorageKey, stringifiedDatabase);
};

const loadDatabase = function(localStorageKey) {
  const databaseString = localStorage.getItem(localStorageKey);
  return JSON.parse(databaseString);
};

saveDatabase(HomeInventoryDatabase, "HomeInventory");
