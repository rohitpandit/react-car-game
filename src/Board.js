import React from 'react';
import './Board.css';
import Lines from './Lines.js';

class Board extends React.Component{
    render(){
        return (
            <div className="board">
                <Lines />
            </div>
        )
    }
}

export default Board;