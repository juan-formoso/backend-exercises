# Encapsulation - Introduction

* Encapsulation refers to **bundling data with methods** that can operate on that data within a class

* Essentially, it is the idea of **hiding data** within a class, **preventing anything outside that class from directly interacting with it**

* This **does not mean** that members of other classes cannot interact at all with the attributes of another object

* Members of other classes can **interact with the attributes of another object through its methods**

* Remember, methods are the **functions defined within the class**

1. Getting Methods
  > Retrieving information

2. Setting Methods
  > Changing information

### Example: Encapsulation - Chess Example

For a piece to capturate another piece I need to know the piece Color via `piece.getColor()` --> which checks the color of any given piece from anywhere in the program

### Encapsulation - Methods
* Setting methods also allow the programmer to easily keep track of attributes that depend on one another

**Method 1** -> **Method 2**

### Encapsulation - Game Example
* Class Player

> Methods:
  `Player.maxHealth`
  `Player.currentHealth`
  `Player.levelUp`
    When this method happens I want to the Player's health to increase. But instead of adding another method I'll use the:
  **Setting Method**

* The setting method allows **both attributes to be changed as they should**, rather than requiring you to individually change them

`currentHealth` -> `maxHealth`

* The below example ensures that the change to the attribute is within the bounds of what is allowed

```
def setCurrentHealth(newHealth):
  player.currentHealth = newHealth
  if player.currentHealth > player.maxHealth
    player.currentHealth = player.maxHealth
```

* You may also want some attributes to be "**read only**" from the outside

* To do this, you would **define a getter method but not a setter method**
* The variable could **only be referenced, not changed**

* Class Piece
  > `Piece.rank`
  > `Player.file`
  > `Piece.move()`
    Allows validation and can carry out other methods
  
  OBS: The piece would not be able to move to the same place another piece is going to. Just like other validations.

* It's generally best to not allow **external classes** to **directly edit an object's attributes**

* This is very important when working on large and complex programs

* Each piece should not **have access** to or **rely on** the **inner working of other sections of code**

* This idea will be revisited very soon.

* **Information hiding**, or keeping the data of one class hidden from external classes, helps you **keep control of your program** and **prevent it from becoming too complicated**

### Encapsulation - Overview
Encapsulation is a vital principle in Object Oriented Programming

  * Keeps the programmer in **control of access to data**
  
  * Prevents the program from ending up in any **strange or unwanted states**
