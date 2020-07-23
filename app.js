
class NameField {
  constructor(name) {
    const field = document.createElement('li');
    field.textContent = name;
    const nameListHook = document.querySelector('#names');
    nameListHook.appendChild(field);
  }
}

class NameGenerator {
  constructor() {
    const btn = document.querySelector('button');
    this.names = ['Max', 'Manu', 'Anna'];
    this.currentName = 0;
    // btn.addEventListener('click', this.addName); // MEMO: outputs [NameGenerator addName] this =>  <button>​Add Name​</button>​
    // btn.addEventListener('click', this.addName.bind(this)); // MEMO: outputs [NameGenerator addName] this =>  NameGenerator {names: Array(3), currentName: 0}
    btn.addEventListener('click', () => {
      this.addName(); // MEMO: outputs [NameGenerator addName] this =>  NameGenerator {names: Array(3), currentName: 0}
    });
  }

  addName() {
    console.log('[NameGenerator addName] this => ', this);
    const name = new NameField(this.names[this.currentName]);
    this.currentName++;
    if (this.currentName >= this.names.length) {
      this.currentName = 0;
    }
  }
}

const gen = new NameGenerator();