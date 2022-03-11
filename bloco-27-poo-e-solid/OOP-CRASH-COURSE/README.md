# What is OOP? - Introduction

  > This course will assume you already have **some knowledge of the basics of programming**

  > This series will not be language-specific
  > Examples will be not require knowledge of the language being used

----------------------------------------------------------------------------------------

> In order to understand what **object oriented programming is**, it's best to first understand **what objects are**

> In order to understand **what objects are**, it's best to first understand **what primitive data types are**

## Primitive Data
**Primitive data types** store **single, simple values**

* Examples include:

  1. Byte
  2. Int
  3. Float

Programs at that time weren't very complicated compared to today.

As programs became larger and more complex, only using primitive data types wasn't sufiicient anymore

Programmers began to need to **group similar pieces of data together**

### Example:
When trying to develop a Chess Game, to set a Horse Stone you must have the variables: Position(number), Captured(boolean), Color(string).

## The Structure

1. The Structure
  * Stores many pieces of data
  * **CAN** store different types of data

2. The Array
  * Stores many pieces of data
  * **CANNOT** store different types of data

In a structure you could store Ints and Strings together with another data types

That's why it's useful in the Chess Game Example, you would have a structure called "struct Knights" that represents all of the knights; another to black and white horses and it's singularities; etc.

* The main issue with structures is that you **cannot define functions** within one

* Thinking about the chess example, this prevents you from **defining a function specific to the knights**, such as their move function, within the structure

## Objects

* Objects are **instances of a class**
* Classes are **templates for objects**

## Classes
Let's say I define a Knight class, that contains all the info coming from a horse.

This would be mainly the way knights would be able to move.

> move() function --> method
  Function is specific to knights, as other pieces move in a different manner

> Position variable --> attribute
> Color --> attribute
  Color and position are not initialized, as **different instances** of a Knight will have **different values** for these variables

### Conclusion
* **Object oriented programming** helps programmers create complex programs by **grouping together related data and functions**

* Throughout this course we will explain OOP using its four main principles:
  > Encapsulation
  > Abstraction
  > Inheritance
  > Polymorphism
