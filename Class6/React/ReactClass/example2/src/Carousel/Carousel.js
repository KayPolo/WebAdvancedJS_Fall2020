// import React from 'react';
import React, {Component} from 'react';
import './Carousel.css';



// const Carousel = ()=>{

//     return(
//         <div className = "Carousel">
//             <div className= 'green block'></div>
//             <div className= 'yellow block'></div>
//             <div className= 'blue block'></div>

//         </div>
//     )

// }


class Carousel extends Component{


constructor(props){
    super(props);

    this.state = {

        changeOne:"",
        changeTwo:"",
        changeThree:""

    }
}

boxOneClick = ()=>{
    this.setState({
        changeOne: "gold"
    })
}


boxTwoClick = ()=>{
    this.setState({
        changeTwo: "gray"
    })
}

boxThreeClick = ()=>{
    this.setState({
        changeThree: "black"
    })
}


render(){
    return(

    <div className = "Carousel">
        <div className= 'green block' 
        style = {{backgroundColor: this.state.changeOne}} onClick = {this.boxOneClick}>
        </div>


        <div className= 'yellow block'
        style = {{backgroundColor: this.state.changeTwo}} onClick = {this.boxTwoClick}>
        </div>

        <div className= 'blue block' 
        style = {{backgroundColor: this.state.changeThree}} onClick = {this.boxThreeClick}>
        </div>
    </div>

    )

}


}


export default Carousel;