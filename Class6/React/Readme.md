# React
## React's documentation is mantained and updated by Facebook
https://github.com/facebook/create-react-app


# What is React?
https://www.youtube.com/watch?v=N3AkSS5hXMA

----------------------------------------------------------

# How to create a new React App
## * Important
Make sure that NodeJS installed in your computer.
(We won't code in NodeJS, but the comands used to run the React application use Node)

https://reactjs.org/docs/create-a-new-react-app.html


## Create a directory where you're going to store your app. 
cd directory-name

## Run the following command
npx create-react-app app-name

• (npx is a npm package runner. the X probalbly stands for excecute. This allows you to download and run the package)

## A second way of creating your app
npm install -g create-react-app
• (-g stands for globally)

And then 
create-react-app app-name

* Important: If you're using Mac or Linux, most likeley you will have to type sudo in front of the comand line, and then imput your password

## Input the app root
cd app-name

## Execute the app
To start the developer server use 
yarn start 

you can also use 
npm start

(if access is denied, you might use sudo in front)


(If you use instead npm start is going to work as well. They are equivalent) 
(This command is used for development, but notice that the development build the app is not optimized. To create a production build to deploy your app, use yarn build)

Your app is going to run in localhost:3000


-------------------------------------------------------------

# Example 1

1. Let's look an understand the structure of the files.
2. Delete the innecesary elements
3. Let's create our own app

## Understanding JS vs JSX
When it comes to the extension, there is not noticible diference. 
JS is standard javascript, JSX is an HTML-like syntax that you can use with React.

## How to define a JS component 

(start creating a JS class | then the name of the class | extends is a keyword used to inherit the component feature from React Library)

class App extends Component {

    render(){       //Render is a method that is going to be called by react to  
                    // excecute the different functions.  

        return();   //Here is the output that is going to be returned
    
    }

}

* Important, the Component feauture needs to be imported in the top of your code

import React, {Component} from 'react';


## Let's add some code
   
    <div className="App">
        <h1>This is my React App</h1>
        <p>This is pretty cool</p>
    </div>

## Now let's add a component

Technically you could use the same structure that you had in the App component
e.g:

    class Header extends Component{
        render(){
            return <h1>This is another component</h1>

        }
    }

    * Don't forget to export the component.

   ----- export default App;

 However, you don't want to use this structure if you are not execuing functions inside this component. In that case, you can store the information on a variable and pass it along  

## Import a component to the app
In the top of the App component you will need to import the new component

---  import Header from './components/Header/Header';

Then inside your root div you can call the component
    <ComponentName/>

## Create Dynamic content

    const anotherComponent  = ()=>{
        return (
            <div>
                <h2 className='text'>Number: {Math.floor(Math.random() * 30)}</h2>
            </div>
        
        );
    }

## Declare values and defind them in the App component
Something else that we can do is create dynamic content. This allow us to reuse the components that we create. 

## ComponentName Component
    const people  = (props)=>{
  
    return (
        <div>
            
            <h2 className='text'>I'm {props.name}, I am {props.age} years old</h2>
        
        </div>
    
    );

            
    }

## App Component
    <Header name = 'Karla' age = '30'></Header>


## State
    React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

E.g.

    state = {
        persons:[
        {name:'Karla' , age:30},
        {name:'Brandon' , age:26},
        {name:'Tuba' , age:29}

        ]
    }


## Functions
    You can also build functions. Notice that React uses ES6

   E.g.
        switchName = ()=>{
             console.log('Button clicked');
        }



------------------------------------------

Remember, this is just the beggining
If you're interested in learning more with React, this is an amazing class

https://www.udemy.com/course/react-the-complete-guide-incl-redux/