import React from 'react';
import Slider from '@material-ui/core/Slider';

const ContinuousSlider = props => {
  return (
    <div>
          <Slider value={props.value} min={1} max={55} onChange={props.change} onChangeCommitted={props.commit} marks={[{value:props.history}]} />
    </div>
  );
}

export default ContinuousSlider;