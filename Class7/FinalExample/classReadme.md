# Angular
Class example based on Brad Traversy code (ToDo List) https://github.com/bradtraversy/angular-crash-todolist

------------------------------

## Set an Angular environment 
https://angular.io/guide/setup-local

### Prerequisites
Before you begin, make sure your development environment includes Node.js and an npm package manager.


### Step 1: Install the Angular CLI
    npm install -g @angular/cli

### Step 2: Create a workspace and initial application
    ng new app-name

    (The ng new command prompts you for information about features to include in the initial app.)

### Step 3: Run the application
    cd app-name
    ng serve --open


--------------------------------------

## App

#### => app.components.html

You can directly start to write HTML content

  <h1>Hello Karla</h1>

You can also have dynamic content  
  <h1>Hello {{name}}</h1>
And you will have to declare the data in => app.components.ts

#### => app.components.ts

(TS stands for TypeScript)



  <!-- Here you can also add JavaScript expressions -->
  <!-- {{2 * 8 + 7}} -->

  <!-- Or you can add methodes -->
  <!-- <h1>Hello {{name.toUpperCase()}}</h1> -->

  <!-- Angular also has something call Pipes -->

  <!-- <h1>Hello {{lastname | uppercase}}</h1>
  <app-header>This is some extra content</app-header> -->



export class AppComponent {
  name = 'Karla';

  // However, it's recommended to use typescript here, so we can specify why value are we expecting

  lastname:string = 'Polo';

  constructor(){
    console.log(12345);
    this.lastname = 'Palmer';
   
  }

  // You can also have declare a function and call it in the constructor

  changeName = (name:string)=>{
      this.name = name;
  }

  myFunction = ()=>{
    console.log('CLICK!!!');
  }

  constructor(){
    this.changeName('Brandon');
    this.myFunction();
  }

}

--------------------------------------

## Create a new component
    ng generate component component-name
    or
    ng g component component-name



------------------------------------

## For Loops

### Generate the Array

#### header.components.ts

export class HeaderComponent implements OnInit {

  data = [
    {
      name: 'Awosome Project',
      description: 'This is the best you've seen'
    },
    {
      name: 'Great Project',
      description: 'A great project ... hire me'
    },
    {
      name: 'Super Cool Project',
      description: 'What else do you wanna know?'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

#### header.components.html
  <div *ngFor="let project of data">
      <h3>
        {{ project.name }}
    </h3>
    
  </div>


