import React from 'react';
import historySvg from './images/history.svg'

const History = props => {
    return(
        <div className={'history ' + props.direction} onClick={props.click} onTouchStart={props.onTouchStart} onTouchMove={props.onTouchMove} onTouchEnd={props.onTouchEnd}>
          <img src={historySvg} alt="clock with back arrow"></img>
          <p>page {props.prev}</p>
        </div>
    );
}

export default History;