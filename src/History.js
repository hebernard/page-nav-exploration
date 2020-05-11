import React from 'react';

const History = props => {
   const isAvailable = props.isAvailable;
  if (isAvailable) {
    return(
        <div className={'history ' + props.direction} onClick={props.click}>
          <p>Back to pg {props.prev}</p>
          <p>Section 1.1</p>
        </div>
    );
  }
  return null;
}

export default History;