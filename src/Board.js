import React from 'react';
import './Board.css';
import Lines from './Lines.js';
import Objects from './Objects.js';

class Board extends React.Component{
    render(){
        return (
            <div className="board">
                <Lines />
                <Objects />
            </div>
        )
    }
}

export default Board;