import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '90%',
    margin: '0 auto',
    paddingTop: '21px',
  },
});

const ContinuousSlider = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Slider value={props.value} min={1} max={55} onChange={props.change} onChangeCommitted={props.commit} marks={[{value:props.history}]} />
    </div>
  );
}

export default ContinuousSlider;