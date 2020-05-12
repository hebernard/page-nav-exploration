import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels={false}
      className={classes.root}
    >
      <BottomNavigationAction icon={<img src={require('./images/list-view-24.svg')}/>}/>
      <BottomNavigationAction icon={<img src={require('./images/notebook-24.svg')}/>}/>
      <BottomNavigationAction icon={<img src={require('./images/study-tools-24.svg')}/>}/>
      <BottomNavigationAction icon={<img src={require('./images/bookmark-off-24.svg')}/>}/>
    </BottomNavigation>
  );
}