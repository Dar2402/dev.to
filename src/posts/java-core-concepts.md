---
title: "Java Core Concepts "
author: "Ayush Sharma "
date: 2025-07-07T06:37:08.402Z
tags:
  - Java
  - JavaCore
excerpt: Java
---
Here is your **Java Core Concepts Summary** in **Markdown format** with appropriate headings and code blocks where needed. You can copy-paste this into your blog platform.

- - -

# Java Core Concepts Summary

This post covers all essential **Core Java concepts** every developer should know, grouped under major topics for clarity.

- - -

## 1. Java Basics

* Java is an object-oriented, class-based, platform-independent language.
* Code is compiled into bytecode and run on the Java Virtual Machine (JVM).
* Principle: **Write Once, Run Anywhere (WORA)**.

- - -

## 2. Data Types and Variables

* **Primitive types**: `int`, `float`, `char`, `boolean`, `double`, etc.
* **Reference types**: objects, arrays, classes.
* Java is **statically typed**.

```java

```

```markdown

```

- - -

## 3. Operators

* **Arithmetic**: `+`, `-`, `*`, `/`, `%`
* **Relational**: `==`, `!=`, `>`, `<`, `>=`, `<=`
* **Logical**: `&&`, `||`, `!`
* **Assignment**: `=`, `+=`, `-=`, etc.

- - -

## 4. Control Statements

* **Conditional**: `if`, `else`, `switch`
* **Loops**: `for`, `while`, `do-while`
* **Branching**: `break`, `continue`, `return`

```java
if (age > 18) {
    System.out.println("Adult");
}

```

- - -

## 5. Object-Oriented Programming (OOP)

* Four pillars: **Encapsulation**, **Inheritance**, **Polymorphism**, **Abstraction**
* Java revolves around **classes** and **objects**.

- - -

## 6. Classes and Objects

```java
class Car {
    String model;
    void drive() {
        System.out.println("Driving...");
    }
}

Car c = new Car();
c.drive();

```

- - -

## 7. Constructors

* Initializes objects.
* Same name as class.
* No return type.

```java
class Person {
    Person() {
        System.out.println("Constructor called");
    }
}

```

- - -

## 8. Inheritance

* Reuse code via `extends`.
* Java supports **single inheritance**.

```java
class Animal {
    void eat() {}
}

class Dog extends Animal {
    void bark() {}
}

```

- - -

## 9. Polymorphism

* **Compile-time**: method overloading
* **Runtime**: method overriding

```java
class Shape {
    void draw() {}
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing circle");
    }
}

```

- - -

## 10. Abstraction

* Hides internal details, shows functionality.
* Done via **abstract classes** or **interfaces**.

```java
abstract class Animal {
    abstract void sound();
}

```

- - -

## 11. Encapsulation

* Wrapping data using **private** fields and **public** getters/setters.

```java
class Student {
    private int age;

    public void setAge(int a) {
        age = a;
    }

    public int getAge() {
        return age;
    }
}

```

- - -

## 12. Interfaces

* Defines a contract.
* Supports multiple inheritance.

```java
interface Flyable {
    void fly();
}

```

- - -

## 13. Packages and Access Modifiers

* Packages group classes: `java.util`, `java.io`
* Access levels: `private`, `default`, `protected`, `public`

- - -

## 14. Exception Handling

* Manages runtime errors.

```java
try {
    int x = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("Finally block");
}

```

- - -

## 15. Collections Framework

* Interfaces: `List`, `Set`, `Map`, `Queue`
* Classes: `ArrayList`, `HashMap`, `HashSet`

```java
List<String> list = new ArrayList<>();
list.add("Java");

```

- - -

## 16. Multithreading

* Run tasks concurrently using `Thread` or `Runnable`.

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running");
    }
}

```

- - -

## 17. Java I/O

* Input/output via `java.io` and `java.nio`.

```java
BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

```

- - -

## 18. Java 8 Features

* **Lambda expressions**, **Streams**, **Functional interfaces**, **Optional**

```java
List<String> names = Arrays.asList("A", "B", "C");
names.forEach(n -> System.out.println(n));

```

- - -

## 19. Wrapper Classes

* Wrap primitive types in objects.

```java
int a = 10;
Integer obj = Integer.valueOf(a);

```



- - -

## 20. JVM Architecture

* Includes **Class Loader**, **Memory Areas**, **Execution Engine**
* Executes bytecode and manages resources.

- - -

*Happy Coding! Follow for more Java insights.*

```

```