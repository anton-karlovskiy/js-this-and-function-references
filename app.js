
/**
 * MEMO: JavaScript reached that code from top to bottom and it does read and parse that code when the script gets first executed,
 * which happens when the browser parses this HTML file and reaches this script import, it then immediately goes to the script file and parses that.
 * this is important because this allows us to start our scripts when the page is loaded and load everything into memory and let the browser do its job.
 */

class NameField {
  constructor(name) {
    const field = document.createElement('li');
    field.textContent = name;
    const nameListHook = document.querySelector('#names');
    nameListHook.appendChild(field);
  }
}

class NameGenerator {
  // MEMO: constructor functions are normal functions which you can call to create a new object and initialize them with some properties and methods in object oriented development
  constructor() {
    const btn = document.querySelector('button');
    /**
     * MEMO: it's now not a constant or a varaible anymore.
     * instead you could say it's a variable attached to this class or so-called property or field
     */
    this.names = ['Max', 'Manu', 'Anna'];
    this.currentName = 0;

    /**
     * MEMO: this would be wrong due to two reasons.
     * first of all, if we specify like this ("addName()") JavaScript would look for a variable called "addName" or a function called "addName" in the scope of this constructor,
     * and if it doesn't find it there in the global scope, in the overall file you could say in the whole window to which this script is attached.
     * now we've got no "addName" variable or function in the constructor and we've also got none in the overall file or anywhere else in this app.
     * so this will not work.
     * outputs Uncaught ReferenceError: addName is not defined
     */
    // btn.addEventListener('click', addName);

    /**
     * MEMO: if we wanna tell JavaScript that I wanna access a function that is attached to the class, we need that special "this" keyword.
     * this essentially refers to the object the code is in
     * outputs [NameGenerator addName] this =>  <button>​Add Name​</button>​
     * I'm just passing a reference to my function so like an address to that event listener
     * so I'm basically telling JavaScript hey! here is the address of the function or method you should execute when the click occurs
     * so that you know where to find it when you need to call it
     */
    // btn.addEventListener('click', this.addName);

    /**
     * MEMO: outputs [NameGenerator addName] this =>  NameGenerator {names: Array(3), currentName: 0}
     * bind actually allows us to tell JavaScript what this should be referring to in the function that will eventually get executed.
     * so bind still does not immediately execute the function we keep that behavior of that just passing the address
     * but we configure the fuction for that time when it will get executed so to say.
     * we do so with the first argument by telling it what should this refer to in the function when it gets executed in the future no matter who executes it.
     * 
     */
    // btn.addEventListener('click', this.addName.bind(this));

    /**
     * MEMO: outputs Uncaught TypeError: this.addName is not a function
     * this is the same as btn.addEventListener('click', this.addName);
     */
    // btn.addEventListener('click', function() {
    //   this.addName();
    // });

    /**
     * MEMO: outputs [NameGenerator addName] this =>  NameGenerator {names: Array(3), currentName: 0}
     * arrow functions specifically solve that problem of this behaving differently because often you don't want it to behave differently
     * therefore arrow functions were introduced to basically keep the context of this or the reference of this.  
     */
    btn.addEventListener('click', () => {
      this.addName();
    });
  }

  // MEMO: a method is just a function in a class
  addName() {
    /**
     * e.g. btn.addEventListener('click', this.addName);
     * MEMO: this does not always refer to the surrounding objects, so to say to the class.
     * it's generally what it refers to you could say in most cases
     * but actually this is defined a bit differently in JavaScript.
     * this refers to whoever called the function in which you use this.
     * this referes to what's executing the code.
     */
    const name = new NameField(this.names[this.currentName]);
    console.log('[NameGenerator addName] this => ', this);
    this.currentName++;
    if (this.currentName >= this.names.length) {
      this.currentName = 0;
    }
  }
}

const gen = new NameGenerator();
