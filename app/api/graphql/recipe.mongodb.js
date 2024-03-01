/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

const database = "moms-recipes";
const collection = "recipes"

// Select the database to use.
use(database);

// Insert a few documents into the sales collection.
db.getCollection('recipes').insertMany([
  { 'name': 'Canh Ca Ngot', 'Ingredients': ['water', 'salt', 'Ca Ngot'], 'Instructions': ["1. Boil Water", "2. Add Salt"], "Category": "Soup" },
  { 'name': 'Pho', 'Ingredients': ['beef', 'salt', 'onion'], 'Instructions': ["1. Char onion", "2. Add Water"], "Category": "Entre" },
  { 'name': 'Picked Cucumbers', 'Ingredients': ['cucumber', 'salt'], 'Instructions': ["1. Thinly slice cucumbers", "Add Salt"], "Category": "Appetizer" },
  { 'name': 'Thit Kho', 'Ingredients': ["pork belly", "molasses", "egg"], 'Instructions': ["1. Saute Meat", "2. Boil Eggs"], 'Category': "Entree" },
  { 'name': 'Bun Bo Hue', 'Ingredients': ["paprika", "gochugaru", "lemongrass"], 'Instructions': ["1. Saute spices"], 'Category': "Entree" },
  { 'name': 'Italian Wedding Soup', 'Ingredients': ["pork", "kale", "carrot"], 'Instructions': ["1. Chop vegetables", "2. Stew"], 'Category': "Soup" },
  { 'name': 'Pickled Carrots', 'Ingredients': ["vinegar", "daikon", "carrot", "salt"], 'Instructions': ["1. Pickle"], 'Category': "Appetizer" },
]);
