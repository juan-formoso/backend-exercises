# Inheritance - Introduction

* This segment we will be looking at the next of the four main principles of object-oriented-programming: **Inheritance**

* **Inheritance** is the principle that allows classes to derive from other classes

## Inheritance - Game Example

> Class Weapon
  * Contains methods aand attributes common to all weapons:
    `Weapon.Damage`
    `Weapon.Attack()`
  
  > class Sword
      `weapon.damageType = "sharp"`
  > class Club
      `weapon.damageType = "blunt"`

    They share the same behavior!

Class Weapon: Superclass
Classes Sword and Club: Subclasses

* Subclasses inherit from superclass

## Inheritance - Class Hierarchy

* Any sword or club would require the methods and attributes present in the weapon class in order to function

* In most cases the **class hierarchy** you create will have many more layers with many more classes in each layer

class Item:
  class Weapon:
    class Sword:
      class Sword
      class Sword
    class Club
  class Tool

* The **class hierarchy** acts as a web of classes with different relationships to one another

Superclass:
  Subclass
  Subclass

## Inheritance - Access Modifiers

* **Access modifiers** change which classes have access to other classes, methods or attributes

* The three main access modifiers we will be covering are:
  > Public
  > Private
  > Protected

* **Public members** can be accessed from anywhere in your program

* This includes anywhere both inside of the class hierarchy it is defined as well as outside in the rest of the program

Food: ***
  Fruit: ***
    Apple ***
    Orange ***
  Vegetable: ***
    Broccolis ***

OBS: Any of them can be accessed from anywhere in the program

* **Private members** can only be accessed from within the same class that the member is defined
  > It's good to do this when you don't need to access this on another parts of the code

* This allows you to create multiple private members of the same name in different locations so that they don't conflict with one another

Food:
  Fruit: ***
    Apple
    Orange
  Vegetables:
    Broccolis

OBS: a fruit object can only be accessed from inside of the fruit class

* **Protected members** can be accessed within the class it is defined, as well as any subclasses of that class.

* This essentially makes protected members private to the hierarchy in which they are defined

Food:
  Fruit: ***
    Apple ***
    Orange ***
  Vegetables:
    Broccolis
