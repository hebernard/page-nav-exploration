import React from 'react';
import Slider from '@material-ui/core/Slider';

const ContinuousSlider = props => {

  let past = props.value > 1 ? props.history : null;

  return (
    <div>
          <Slider value={props.value} min={1} max={55} onChange={props.change} onChangeCommitted={props.commit} marks={[{value:past}]} />
    </div>
  );
}

export default ContinuousSlider;