function flipCard() {
    card.classList.toggle('is-flipped');

    card.classList.contains('is-flipped') ? document.querySelector(".front-back-indicator").innerHTML = "Back" : document.querySelector(".front-back-indicator").innerHTML = "Front";

}

function showQuestion() {
    card.classList.toggle('is-flipped', false);

    document.querySelector(".front-back-indicator").innerHTML = "Front";
}

function pickCard() {
    document.querySelector(".flashcard-face-front").innerHTML = "<h2>" + flash_questions[currentCard].question + "</h2>";
    document.querySelector(".flashcard-face-back").innerHTML = "<h2>" + flash_questions[currentCard].answer + "</h2>";
    document.querySelector(".flash-control-counter").innerHTML = "<p>" + (currentCard + 1) + "/" + flash_questions.length + "</p>";
}

function nextCard() {
    // to make sure they arent looking at the next answer
    showQuestion();
    setTimeout(function() {
        if (currentCard < flash_questions.length - 1) {
            currentCard++;
            pickCard();
        }
    }, 180);

}

function prevCard() {
    // to make sure they arent looking at the next answer
    showQuestion();
    setTimeout(function() {
        if (currentCard > 0) {
            currentCard--;
            pickCard();
        }
    }, 180);

}

/**
 * Shuffles array in place using Fisher–Yates shuffle algorithm
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


var flash_questions = [{
        "question": "JIT",
        "answer": "Just in time compiler: compiles a set of byte-code at a time"
    },
    {
        "question": "Primitive types",
        "answer": "int, double, float, byte"
    },
    {
        "question": "Class type",
        "answer": "String, Double, Integer, BankAccount, Person"
    },
    {
        "question": "What does \"this.\" refer to?",
        "answer": "to the current instance of the object it is being called in"
    },
    {
        "question": "what can a public var/method/class be accessed by",
        "answer": "everything"
    },
    {
        "question": "what can a private var/method be accessed by",
        "answer": "can only be accessed within that class"
    },
    {
        "question": "Instance variable",
        "answer": "Variables belonging to a class"
    },
    {
        "question": "Advantage of inheritance",
        "answer": "You can first build a class for the general case and then add more specialized classes for special cases"
    },
    {
        "question": "abstract class",
        "answer": "a class that cannot be instantiated"
    },
    {
        "question": "class",
        "answer": "a group of objects that share the same set of attributes and operations. template for creating objects"
    },
    {
        "question": "concrete class",
        "answer": "a class that can have instances"
    },
    {
        "question": "encapsulation",
        "answer": "packaging of data and process within one single unit"
    },
    {
        "question": "inheritance",
        "answer": "the mechanism by which a subclass incorporates the behavior of a superclass"
    },
    {
        "question": "instance",
        "answer": "the concrete manifestation of the attributes and the operations of a class."
    },
    {
        "question": "interface",
        "answer": "the service and the operations that the object makes available to the outside world."
    },
    {
        "question": "polymorphism",
        "answer": "the ability of objects belonging to different classes to perform the same behavior differently"
    },
    {
        "question": "subclass",
        "answer": "a class that is less abstract than another class. a child class."
    },
    {
        "question": "superclass",
        "answer": "a class that is more abstract than another class. a parent class."
    },
    {
        "question": "UML",
        "answer": "a modeling language for object-oriented system analysis, design and deployment"
    },
    {
        "question": "A ___________ is a template for multiple objects with similar features and it is a blueprint for objects.",
        "answer": "class"
    },
    {
        "question": "A _______________ is a special type of method that determines how an object is initialized when it is created.",
        "answer": "constructor"
    },
    {
        "question": "An ____________ is an instance of a class and it is a software unit that combines a structured set of data with a set of operations for inspecting and manipulating that data",
        "answer": "object"
    },
    {
        "question": "The default visibility modifier for class methods and instance variables is _______________ .",
        "answer": "protected"
    },
    {
        "question": "___________________, also called information hiding, is the packing of data and functions into a single component and keeps both safe from outside interference and misuse.",
        "answer": "Encapsulation"
    },
    {
        "question": "What are the 4 different visibility modifiers?",
        "answer": "public, package-private, private, protected"
    },
    {
        "question": "A _____________ instance variable can only be accessed and used within the class in which it is declared.",
        "answer": "private"
    },
    {
        "question": "__________________ is where two methods in a class have the same method name with different parameters/arguments.",
        "answer": "Method overloading"
    },
    {
        "question": "__________ and _________ are methods that are used to retrieve and modify private instance variables.",
        "answer": "Getters (aka accessors), Setters (aka mutators)"
    },
    {
        "question": "True or False? If you create a constructor in a class, Java will create the default, no-arg constructor for you.",
        "answer": "False. If you have not created a constructor, Java will create one for you. However, if you created a constructor (it doesn't matter which if it is the default or not), Java will not create one for you."
    },
    {
        "question": "The _______ keyword is used to refer to the current object.",
        "answer": "this"
    },
    {
        "question": "A ___________ instance variable can be access from any other class or classes in different packages.",
        "answer": "public"
    },
    {
        "question": "A _________ instance variable can only be accessed in classes that live in the same package.",
        "answer": "protected"
    },
    {
        "question": "What are the differences between a constructor and a method?",
        "answer": "Constructors do not have return types. Constructors must have the same name of the class. A constructor will be automatically invoked when an object is created, whereas method has to be called explicitly using the dot operator."
    },
    {
        "question": "Objects live in memory on the _______ .",
        "answer": "heap"
    },
    {
        "question": "Primitive types and reference variables live in memory on the ____________ .",
        "answer": "stack"
    },
    {
        "question": "True or False. Instance variables and local variables can have the same name in the same class.",
        "answer": "True! You use the this keyword to distinguish between the instance variable and the local variable - otherwise the local variable takes precedence."
    },
    {
        "question": "Instance variables belong to an _________ .",
        "answer": "object"
    },
    {
        "question": "Static variables belong to a ____________ .",
        "answer": "class"
    },
    {
        "question": "True or False? Static methods can use instance variables.",
        "answer": "False. Static methods can only use static variables or call other static methods (static cling!)."
    },
    {
        "question": "True or False? Each instance of a particular class (i.e. an object) that you create gets its own copy of any static variables.",
        "answer": "False. Objects share static variables."
    },
    {
        "question": "__________ are the parts of a class that define what an object can do (i.e. the behaviors).",
        "answer": "Methods"
    },
    {
        "question": "__________ are the parts of a class that define the state of an object.",
        "answer": "Instance variables (aka properties, data fields, class members, attributes)"
    },
    {
        "question": "True or False? You do not need to create an object (i.e. instance of a class) in order to access a static variable or invoke a static method.",
        "answer": "True. Static variables and methods belong to a class, not an object and do not need an object in order to be used."
    },
    {
        "question": "True or False: Getter methods take a parameter in the method header.",
        "answer": "False. Getters do not take any parameters - they return the value of an instance variable."
    },
    {
        "question": "Setter methods have a return type of _______ .",
        "answer": "void"
    },
    {
        "question": "Passing a primitive type to a method as a parameter is called __________________ because the local parameters are copies of the original arguments passed in.",
        "answer": "pass by value"
    },
    {
        "question": "Passing a reference variable to a method as a parameter is called ____________________ because the local parameters are references to the storage locations of the original arguments passed in.",
        "answer": "pass by reference"
    },
    {
        "question": "A class that has (1) All private instance variables, (2) No public setter methods, and (3) No getter methods that return a reference to a data field that is changeable, is called _____________",
        "answer": "immutable"
    },
    {
        "question": "The scope of instance variables in a class is the _______________ .",
        "answer": "entire class"
    },
    {
        "question": "The scope of a local variable is __________________ .",
        "answer": "only inside the method in which it is declared."
    },
    {
        "question": "Variables with final modifier can be modified",
        "answer": "A: false"
    },
    {
        "question": "What is the difference between a mutable class and an immutable class ",
        "answer": "Mutable classes have publicly available mutator methods"
    },
    {
        "question": "What is a deep copy vs a shallow copy?",
        "answer": "Deep copy is a copy of an object that has no references in common to the original, with the exception of immutable objects"
    },
    {
        "question": "How would you call a constructor of a parent class?",
        "answer": "super();"
    },
    {
        "question": "Final methods can be overridden by sub-classes",
        "answer": "A: false"
    },
    {
        "question": "Can you inherit from a final class?",
        "answer": "no"
    },
    {
        "question": "A class/method/var with no modifier can be accessed by anything within the same class",
        "answer": "A: true"
    },
    {
        "question": "What is the difference between getClass() and instanceOf()?",
        "answer": "getClass(a) will return true even if the current instance is a subclass of a "
    },
    {
        "question": "(+) in UML refers to",
        "answer": "public access"
    },
    {
        "question": "(-) in UML refers to",
        "answer": "private access"
    },
    {
        "question": "(#) in UML refers to",
        "answer": "protected access"
    },
    {
        "question": "(~) in UML refers to",
        "answer": "package access"
    },
    {
        "question": "in UML, what is the symbol for package access?",
        "answer": "(~)"
    },
    {
        "question": "in UML, what is the symbol for protected access?",
        "answer": "(#)"
    },
    {
        "question": "in UML, what is the symbol for private access?",
        "answer": "(-)"
    },
    {
        "question": "in UML, what is the symbol for public access?",
        "answer": "(+)"
    },
    {
        "question": "Polymorphism",
        "answer": "Declaring a variable to have one type while it refers to an object of a subclass of that type."
    },
    {
        "question": "Design Paterns",
        "answer": "Reuse of Design"
    },
    {
        "question": "Upcasting",
        "answer": "Type cast to the type of an ancestor class. Is usually done automatically."
    },
    {
        "question": "Downcasting",
        "answer": "Type cast to the type of a descendant class; may cause runtime errors."
    },
    {
        "question": "Singleton Pattern",
        "answer": "This pattern ensures you have at most one instance of a class in your application"
    },
    {
        "question": "Iterator Pattern",
        "answer": "The design pattern that provides a way to access the elements of an aggregate object sequentially without exposing the underlying representation."
    },
    {
        "question": "An ______ does not have a body",
        "answer": "abstract method"
    },
    {
        "question": "An abstract method only has a ______",
        "answer": "method signature"
    },
    {
        "question": "______ cannot be instantiated",
        "answer": "Interfaces and abstract classes"
    },
    {
        "question": "The keyword used to inherit an Interface is...",
        "answer": "implements"
    },
    {
        "question": "The ______ operator can be used to return a boolean indicating if the first argument is a type equal to the second argument",
        "answer": "instanceof"
    },
    {
        "question": "In Java, all classes inherit from the ______ class by default",
        "answer": "Object"
    },
    {
        "question": "The Object class provides three important methods to all of its children: _____, _____, and _____",
        "answer": ".equals(), .toString(), .hashCode()"
    },
    {
        "question": "Taking an object reference and treating it as a reference to its base type is called _____",
        "answer": "upcasting"
    },
    {
        "question": "Describe late/dynamic binding",
        "answer": "when a method is looked up at runtime to see which version of it to use depending on the calling object"
    },
    {
        "question": "When method definition is decided at compile time it is called _______ binding",
        "answer": "early"
    },
    {
        "question": "A static method uses late binding (T/F)",
        "answer": "f, uses early"
    },
    {
        "question": "A private method uses early binding (T/F)",
        "answer": "True!"
    },
    {
        "question": "A final method uses early binding (T/F)",
        "answer": "True!"
    },
    {
        "question": "When an object of a derived class is assigned to a variable of a base class it is called _______________",
        "answer": "upcasting. "
    },
    {
        "question": "Sale simple = new Sale();    DiscountSale discount = (DiscountSale)simple; is an example of __________",
        "answer": "downcasting"
    },
    {
        "question": "Will an upcasted item call its methods or its base class methods on invokation?",
        "answer": "Its methods - this is late binding"
    },
    {
        "question": "What is the purpose of the clone() method?",
        "answer": "To return a deep copy of the calling object"
    },
    {
        "question": "Which method must a class have to be able to implement cloneable?",
        "answer": "compareTo(Object otherObject) {….}"
    },
    {
        "question": "What is a checked exception",
        "answer": "exception that must be either caught or declared in the method in which it is thrown using:  throw new exceptionName();"
    },
    {
        "question": "What is an unchecked exception",
        "answer": "Unchecked, uncaught or runtime exceptions are exceptions that can be thrown without being caught or declared:"
    },
    {
        "question": "What two types of Java collections are there?",
        "answer": "Set<T> and List<T>"
    },
    {
        "question": "What is the difference between the interfaces Set<T> and List<T>",
        "answer": "set cannot have more than one of the same element, while list has indexed and repeatable elements"
    },
    {
        "question": "What is the point of a singleton pattern?",
        "answer": "To ensure only one instance of that class exists"
    }
];

var currentCard = 0;
var card = document.querySelector(".flashcard");
var prevArrow = document.querySelector(".prev-arrow");
var nextArrow = document.querySelector(".next-arrow");

shuffle(flash_questions);
pickCard();

card.addEventListener('click', flipCard);
prevArrow.addEventListener('click', prevCard);
nextArrow.addEventListener('click', nextCard);