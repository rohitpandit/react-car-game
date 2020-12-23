import React from 'react';
import './Car.css';


class Car extends React.Component {
    constructor(props){
        super(props);
        this.state={
            posX:0
        }
    }

    componentDidMount(){
      document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleKeyDown=(e)=>{
      if(e.keyCode === 37){
        this.setState((state, props)=>({
          posX : Math.max(state.posX-1, 0)
        }));
      }else if(e.keyCode === 39){
        this.setState((state, props)=>({
          posX : Math.min(state.posX+1, 25)
        }))
      }
    }

  render() {
    return (
      <div  className="car" style={{left:this.state.posX +'rem'}}>
      </div>
    );
  }
}

export default Car;
