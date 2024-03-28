/**
 * Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties
 *  for make, model, and year. Then, show how you can access the model property of the car.

Explain & TIP: Objects are collections of properties, kind of like a box for storing related information. 
You can create an object to group related data and access its properties using either dot notation or bracket
 notation.
 * 
 * 
 */
console.log("Object is created");
 const car={
    make:"honda",
    model:"civic",
    year:2018
 }

 console.log("Car model is "+car.model);
 console.log("Car make is "+car['make']);
 console.log("Car year is "+car.year);
console.log("Object is updated.");
 car.make="toyota";
 car.model="camry";
 car.year=2020;

 console.log("Car model is "+car.model);
 console.log("Car make is "+car['make']);
 console.log("Car year is "+car.year);

