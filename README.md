# PRACTICE: HOME INVENTORY DATA

To practice working with data, you are going to build a home inventory program. You will create a database of unique, or cool, items in your home, their location, and why they are special. By the end of this practice exercise, you will be able to store a JSON database in the local storage of your browser so that it can be retrieved, and modified again, at any time in the future.

### SETUP
In a new directory of your choosing, create an HTML file with a name of index.html, and a JavaScript file with a name of storage.js. Use a <script> tag to load your JavaScript file in the HTML.

In the JavaScript file, you are going to build the database using the guide below.

### DEFINE YOUR DATABASE
A database is a collection of data sets which are often related to each other. Start by defining the collections of data. This is how you will be defining databases in JavaScript until you learn how to use 3rd-party database systems later in the course.

You're going to be using a standard object as the database, so let's create that now.
```
// Define the database as an object
const HomeInventoryDatabase = {}
```
Next, we're going to add some keys to our database object. One for each set of data. I want to store information about furniture, crafting items, and electronics that I have in my home.
```
// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []
```
With this data structure, furniture is going to be a set of similar data, likewise for crafts and electronics. We use these sets of data to store similar information together so that when we want to display information to a human, getting the information is fast and easy.

In professional database systems, each of those unique sets (i.e. furniture, crafts, and electronics) are called tables of data. A database is a collection of tables.

### DEFINING DATA ITEMS
Each item that you want to store in your home inventory database will be defined as a standard object. First, I'm going to define two data items. One will be stored in the crafts tables in my database, and the other will be stored in the furniture table.
```
// The ink well is a craft data item
const vintageInkwell = {
  name: "Vintage Ink Well",
  location: "Writing desk",
  description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

// The writing desk is a furniture data item
const writingDesk = {
  name: "Shaker Writing Desk",
  location: "Bedroom",
  description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}
```
Your task is to define at least 10 data items to represent things that you have in your home.

# ADDING DATA ITEMS TO DATABASE 
Next, place each object that you have defined into the appropriate database table. I'm going to add the two items I created above into the appropriate tables. Remember, I'm using the term table because we're building a database, but the collections are actually arrays, so I can use the push() method.
```
HomeInventoryDatabase.crafts.push(vintageInkwell)
HomeInventoryDatabase.furniture.push(writingDesk)
```

### LOCAL STORAGE 
Now it's time to make your database persistent. Persistence is an important part of storing your data because you want any changes you make to your data to continue to exist in any processes that make those changes.

You're going to be using a mechanism in the browser called Local Storage to save your data. Once your database is safely in local storage, you will be able to write more code in the future to add, remove, or edit items in the database and those changes will be permanent, no matter how many applications use it.

### JSON.stringify TO STORE THE LOCAL DATA
As your applications become more complex and you start accepting user input, you will need to change your database and then immediately save it to local storage. It only takes two lines of code to accomplish this, but we want to keep our code DRY, and never write the same line of code twice.

Time to write a function.
```
const saveDatabase = function (databaseObject) {

}
```
This is not the final version of the function. Keep reading to see how you will be augmenting this function to perform the steps necessary to save the database to local storage.

The first step, is to refactor the function to receive an argument specifying the label for our database to be used in localStorage.

In the code below, you will see how to use the JSON.stringify method which allows you to take an in-memory object, and convert it to a string representation of the object that can be saved in local storage. This is important, because only strings can be saved in local storage.
```
const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
```

### JSON.parse TO READ THE DATA
To get the value back out of local storage so that it can be used in our application as an actual object again, we need to use the localStorage.getItem() method. We send in an argument value that is the name of the key we want to retrieve. Let's put these instructions in a function named loadDatabase.
```
const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

```
### SAVING THE DATABASE
Now you can use those two functions to save, and load, your home inventory database from localStorage. The only one that you're going to use right now is the saveDatabase function.

Here's what your database.js file should look like.
```
/*
    Initialize the database in memory as an object
*/
const HomeInventoryDatabase = {}

/*
    Initilize all of the tables (i.e. arrays) that you want to
    use in your database.
*/
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

/*
    Time to create some data that will inserted into the database
*/

// The ink well is a craft data item
const vintageInkwell = {
  name: "Vintage Ink Well",
  location: "Writing desk",
  description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

// The writing desk is a furniture data item
const writingDesk = {
  name: "Shaker Writing Desk",
  location: "Bedroom",
  description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}

// Add the data to the appropriate tables
HomeInventoryDatabase.crafts.push(vintageInkwell)
HomeInventoryDatabase.furniture.push(writingDesk)

// Persist the database to localStorage
saveDatabase(HomeInventoryDatabase, "HomeInventory")
```

## Run Program
1. open in code editor 
2. launch in browswer 
3. [Repo with Challenge Exercise for this "database"](https://github.com/millerac333/home-inventory)


