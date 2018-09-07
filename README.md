# traineeship2018-javascript Typescript exercises
# TEST DRIVEN???

* TODO 1 create a class Person
* TODO 2 add 2 properties (name of type string/ age of type number) to Person
* TODO 3 make sure the Person class can be initialised properly
* TODO 4 add 3 properties (name of type string/owner of type Person/creationDate of type Date) to Shop
* TODO 5 add 2 kinds of shops PhysicalShop and WebShop
* TODO 6 make sure the fields of Shop are available in PhysicalShop and WebShop
* TODO 7 create an enum ItemCategory with at lease 10 values
* TODO 8 create class Item
* TODO 9 add fields:
    * id of type string
    * name of type string
    * price of type number
    * purchasePrice of type number
    * category of type ItemCategory
* TODO 10 add a field stock (array of Item) and add to Shop, add sold (array of numbers) and add to Shop
* TODO 11 create a method addItem(item) to Shop
* TODO 12 create a method getItems to Shop
* TODO 13 create a method getItemsOfCategory(category) to Shop
* TODO 14 create a method getItem(id) to Shop
* TODO 15 add specific fields to PhysicalShop
    * location of type string
    * surface of type number
* TODO 16 add specific fields to WebShop
    * url of type string
* TODO 17 create a class Buyer which is a special Person
* TODO 18 add specific fields to Buyer
    * id of type string
    * shoppingCart which is a list of Item
* TODO 19 add a method to Buyer addToCart(item)
* TODO 20 add a method to Buyer displayCart()
* TODO 21 add a method to Buyer checkout() which empties shoppingCart
* TODO 21 add a method to Shop checkout(buyer) which returns a list of bought Items
    * method should remove items from stock
    * method should empty buyers shoppingCart
    * method should add the price of all sold items to Shop.sold
* TODO 22 add a method to Shop balance() which returns a number
    * method gives balance (items purchase price in stock - sold items price)
* TODO 23 add a method to shop summary() which gives a string representation of all Shop information (like pdf)
* TODO 24 make sure every kind of shop has his own summary implementation
* TODO 25 refactor Buyer.shoppingCart to a separate ShoppingCart class with the correct fields and methods
* TODO 26 refactor PhysicalShop.location to a separate Location class with the correct fields (some additional fields: longitude, latitude) and methods
* TODO 27 create a class Mall with a list of PhysicalShops
* TODO 28 add a method to Mall getShop(location) to get a Shop at a specific location in the mall
* TODO 29 add a class MallRent which contains a PhysicalShop and a rentPrice field
* TODO 30 add a field rents to Mall which is an array of MallRent
* TODO 31 add a field costs to Mall which is a number
* TODO 31 add a method to Mall getIncome() which gives the correct income of the Mall
* TODO 32 Think of some other classes you can integrate in our Shopping Mall System
