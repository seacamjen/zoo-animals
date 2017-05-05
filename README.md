## Zoo animals

_Do you need a simple way to keep track of all the animals at your zoo? This simple program will allow you to view all the animals at your zoo. Then you may sort this view by age or diet. Each animal display shows their species, order, family in their taxonomy, as well as their name, age, diet type, likes, dislikes, gender, and number of caretakers they need. You also have the ability to add new animals and update existing animals._

### Configuration / Dependancies
* One Model: Animals
* Model is defined in zoo-animals.model.ts
* Animal will include 11 attributes species, order, family, name, age, diet, location, caretakers, sex, likes, dislikes.

### Specs
1. Behavior: Add New Animal
  * Input: Tiger, Carnivore, Cat, Kitty, 2, Carnivore, Siberia, 4, Male, beef, carrots
  * Output: "Tiger, Carnivore, Cat, Kitty, 2, Carnivore, Siberia, 4, Male, beef, carrots" saved to array
2. Behavior: View All Animals
  * Input: Load Page
  * Output: All Animals are shown
3. Behavior: Sort View by Age
  * Input: Select Young
  * Output: View only animals younger than 2 years old
4. Behavior: Edit Animals Name, Age, Caretakers
  * Input: Tiger, Carnivore, Cat, Kat(Kitty), 3(2), Carnivore, Siberia, 6(4), Male, beef, carrots
  * Output:Tiger, Carnivore, Cat, Kat, 3, Carnivore, Siberia, 6, Male, beef,
5. Behavior: Sort View by Diet
  * Input: Select Omnivore
  * Output: Only animals that are Omnivores are shown

### Integration
* One Index page to show all lists
* A template for animal-list, new-animal, edit-animal

### Prerequisites
You will need the following properly installed on your computer

* Git
* Node.js
* Bower

### Installation
* git clone https://github.com/seacamjen/zoo-animals
* cd zoo-animals
* npm install
* bower install

### Running / Development
* gulp serve
* Visit your app at http://localhost:3000.

#### Building
* gulp build

### Contact
Feel free to contact with questions or comments jensenseanc@gmail.com
