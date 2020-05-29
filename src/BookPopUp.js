import React from 'react';
import pageSvg from './images/page.svg';
import chapterSvg from './images/chapter.svg';
import bookmarkSvg from './images/bookmark.svg';


const BookPopUp = props => {
  const arrowLeft = (props.page * 6.1);
  const rowLeft = -(props.page * 12);
  const pageList = [];
  for(var i = 1; i < 56; i++){
     let image;
     if(i === 1 || i === 11 || i === 21 || i === 31 || i === 41){
        image = chapterSvg
      } else if(i === 4 || i === 22 || i === 35){
        image = bookmarkSvg
      } else {
        image = pageSvg;
      }
     pageList.push(<li id={'page'+i} key={i} className={props.page === i ? 'active' : null}><img src={image} alt={i}></img></li>)
  }
    return(
        <div className="book-popup">
              <div className="location-text">
                  <p>{props.chapter}</p>
                  <p><span>{Math.round((props.page * 100) / 55)}</span>% complete</p>
              </div>
              <div className="page-row-container">
                <ul className="page-row" style={{left: rowLeft + 'px'}}>{pageList}</ul>
              </div>
              <div className="arrow" style={{left: arrowLeft + 'px'}}></div>
         </div>
    );
}

export default BookPopUp;