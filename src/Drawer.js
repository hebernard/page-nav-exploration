import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import BottomNav from './BottomNav';

export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const listItems = props.toc.map((chapter) =>
    <li>{chapter}</li>
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const anchor = 'bottom'

  return (
    <div>
        <React.Fragment key={anchor}>
          <Button className="menuBtn" onClick={toggleDrawer(anchor, true)}>
             <svg focusable="false" aria-hidden="true">
              <rect x="4" y="6" width="16" height="2" rx="1"/>
              <rect x="4" y="11" width="16" height="2" rx="1"/>
              <rect x="4" y="16" width="16" height="2" rx="1"/>
            </svg>
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            <div className="book-card">
              <img src={require('./images/book-cover.jpg')}/>
              <p>Book Title</p>
            </div>
            <ul className="toc">{listItems}</ul>
            <BottomNav/>
          </Drawer>
        </React.Fragment>
    </div>
  );
}