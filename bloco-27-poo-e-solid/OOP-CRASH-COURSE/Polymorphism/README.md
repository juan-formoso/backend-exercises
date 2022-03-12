# Polymorphism - Introduction

* Polymorphism describes **methods that are able to take on many forms**

* There are two types of polymorphism

* The first type is known as **dynamic polymorphism**

* Dynamic polymorphism occurs **during the runtime of the program**

* This type of polymorphism describes when a **method signature is in both a subclass and a superclass**

* The methods share the **same name** but have **different implementation**

## Car Example

`class Car` --> `.drive(miles)` --> `{Car.gas -= 0.04 * miles}`
`class sportsCar` --> `.drive(miles)` --> `{Car.gas -= 0.02 * miles}`

If you create an instance called `mySportsCar.drive()` this would overwrite the generic car version of the method

However if you create an instance called `myCar.drive()` it would also overwrite but the other way around

## Dynamic

* This works because the **form of the method** is decided **based on where in the class hierarchy it is called**

* The implementation of a method signature that will be used is **determined dynamically as the program is run**

### More examples
You could add more subclasses each one with your own method but extending the same implementation

The main benefit of Polymorphism is the ability to write methods to many classes without have to create conditionals for each case when the method is called

class Car
class sportsCar

class Porsche
class BMW

## Static Polymorphism

* Static polymorphism occurs during **compile-time** rather than during runtime

* This refers to when multiple **methods with the same name but different arguments** are defined in the same class

> Ways to differentiate methods of the same name:
  > Different number of parameters
  > Different types of parameters
  > Different order of parameters

* This is known as **method overloading**

* Despite the methods having the same name, their signatures are different due to their different arguments

## Car example

Let's say you are working with the Car class

class Car
  .drive(int speed, string destination) -> 1
    .drive(int speed, int dist) -> 2
  .drive(string destination, int speed) -> 3

The computer is able to differentiate it because their orders are different

1 -> myCar.drive(45, "Work")
2 -> myCar.drive(15, 60)
3 -> myCar.drive("School", 30)

When using method overloading the implementation is different but the results are similar

* Keep in mind that **method overloading can cause trouble** if you don't keep straight **which parameters you need for which implementation**

* Using the incorrect argument may not cause an error if it matches that of another form of the method, which can cause issues

### Polymorphism - Overview

* Overall, polymorphism allows methods to take on many different forms

* When utilizing polymorphism and method overloading, be sure that oyu are calling the correct form of the method
