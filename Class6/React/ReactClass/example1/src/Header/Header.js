// import React, {Component} from 'react';
import React from 'react';
import './Header';



// class Header extends Component{

//         render(){

//             return<h1>This is my componment!</h1>
//         }


// }

// function Header(){
//     return<h1>THis is anoter component!!!</h1>
// }

const Header = (props)=>{
    // return<h1>Third One!</h1>


    return(

        <div>

            <h2>My name is {props.name}, I'm {props.age} years old</h2>
        </div>
    )

}





export default Header;