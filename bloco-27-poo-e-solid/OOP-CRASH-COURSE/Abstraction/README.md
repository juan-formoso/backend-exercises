# Abstraction - Introduction

* This segment we will be looking at the next of the four main principes of object-oriented-programming: **Abstraction**

* Abstraction refers to **only showing essential details** and keeping everything else hidden

## Car example
How to drive a car:

  * Important to most people.
  * How the steering whell steers the car.
  * How the gas and brake pedals affect the car.

How the car works:

  * Not important to most people.
  * How exactly the car functions internally

As long as you understand the outcome, the process is not very important to you

## Abstraction - Explanation

* This idea extends to object-oriented-programming

* The classes you create should act like your car. **Users of your classes should not worry about the inner details of those classes**

* This is similar to encapsulation

* Classes should **not directly interact** with other classes' data.

* This is very important when working on your program incrementally

Section 1 -> Section 2 -> Section 3

* Modern programs are very complex to the point where **multiple programmers tend to work on one program**

* In this case, it's best if the section that you work on is able to function without knowledge of the inner workings of your colleague's section

* To think of this is better when thinking and using: Interface and Implementation.

## Abstraction - Interface and Implementation

* **The interface** refers to the way sections of code can **comunicate with one another**

* This tipically is done through methods that each class is able to access

* **The implementation** of these methods, or how these methods are coded, should be hidden
  > Using the car as an example again:
    `car.pushGas()` -> `Car moves forward`
    The "how" is not important

### Abstraction - Chess Example
You are coding the Knight Class and your partner the King Class

INTERFACE:

KNIGHT <- Information <- King's methods <- KING
CLASS  Knight's methods -> Information -> CLASS

King's implementation is not important to you

This prevents two classes to be redundant!

* If classes are **entangled**, then one change creates a **ripple effect that causes many more changes**

* Creating an interface through which classes can interact ensures that **each piece can be individually developed**

## Abstraction - Overview

* Abstraction **allows the program to be worked on incrementally** and prevents it from becoming entangled and complex

* Determine **specific points of contact** that can act as an interface between classes, and **only worry about the implementation when coding it**
