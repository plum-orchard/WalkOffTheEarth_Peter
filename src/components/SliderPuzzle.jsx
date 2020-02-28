import React, { Component } from 'react';
import styled from 'styled-components';
import SlidingTilePuzzle from 'react-sliding-tile-puzzle';


class SliderPuzzle extends Component{
    render(){ 
        return(
            <div className="sliderPuzzle">
                <div>
                <SlidingTilePuzzle
                maxIterations={300}
                image={"img/" + this.state.currentData}
                size={600}
              />;
                </div>

                <div>
                    <h1>Sliding Tile Puzzle</h1>
                    <p>Click around to solve the puzzle!</p>
                </div>
            </div>
        )
    }
}


export default SliderPuzzle