import React from 'react';
import './App.css';
import Header from "./Header";
import ContinuousSlider from "./ContinuousSlider";
import History from "./History";
import BookPopUp from "./BookPopUp";
import Drawer from "./Drawer";
import { CSSTransition } from 'react-transition-group';

const chapterNames = [
    '1. Functions',
    '1.1 Review of Functions',
    '1.2 Representing Functions',
    '1.3 Trigonometric Functions',
    '2. Limits',
    '2.1 The Idea of Limits',
    '2.2 Definitions of Limits',
    '2.3 Techniques for Computing Limits',
    '3. Derivatives',
    '3.1 Introducing the Derivative',
    '3.2 The Derivative as a Function',
    '3.3 Rules of Differentiation',
    '4. Applications of the Derivative',
    '4.1 Maxima and Minima',
    '4.2 Mean Value Theorem',
    '4.3 What Derivatives Tell Us',
    '5. Integration',
    '5.1 Approximating Areas under Curves',
    '5.2 Definite Integrals',
   '5.3 Fundamental Theorem of Calculus',
   '5.4 Working with Integrals',
   '5.5 Substitution Rule',
]


const App = () => {
  const [ page, setPageState ] = React.useState(1);
  const [ chapter, setChapterState ] = React.useState(chapterNames[0]);
  const [ lastChapter, setLastChapterState ] = React.useState(chapterNames[0]);
  const [ inView, setInViewState ] = React.useState(true);
  const [showBookPopUp, setShowBookPopUp] = React.useState(false)
  const [ historyState, setHistoryState ] = React.useState({
    lastPage:1,
    lastSavedPage:1,
    historyIsAvailable: false,
    historyDirection: null,
  });

  const url = `https://pearsonux.sfo2.digitaloceanspaces.com/sample_pdf/${page}.png`;
  let touchXStart = 0;
  let touchXEnd = 0;

  let touchHistoryXStart = 0;
  let touchHistoryXEnd = 0;


  const handlePageCommit = () => {
    let newDirection;
    page > historyState.lastSavedPage ? newDirection = 'left' : newDirection = 'right';
    let newLastPage = historyState.lastSavedPage
    let newHistoryObj = {lastPage: newLastPage, lastSavedPage: page, historyIsAvailable: true, historyDirection: newDirection};
    setHistoryState(newHistoryObj);
    setLastChapterState(chapter)
    chapterSwitch(page)
    let textInput = document.querySelector('input[type="number"]')
    textInput.value = page
    setShowBookPopUp(false)
  };

  const chapterSwitch = (page) => {
    if(page === 1){setChapterState(chapterNames[0])}
    else if(page > 1 && page < 5){setChapterState(chapterNames[1])}
    else if(page > 4 && page < 8){setChapterState(chapterNames[2])}
    else if(page > 7 && page < 11){setChapterState(chapterNames[3])}
    else if(page === 11){setChapterState(chapterNames[4])}
    else if(page > 11 && page < 15){setChapterState(chapterNames[5])}
    else if(page > 14 && page < 18){setChapterState(chapterNames[6])}
    else if(page > 17 && page < 21){setChapterState(chapterNames[7])}
    else if(page === 21){setChapterState(chapterNames[8])}
    else if(page > 21 && page < 25){setChapterState(chapterNames[9])}
    else if(page > 24 && page < 28){setChapterState(chapterNames[10])}
    else if(page > 27 && page < 31){setChapterState(chapterNames[11])}
    else if(page === 31){setChapterState(chapterNames[12])}
    else if(page > 31 && page < 35){setChapterState(chapterNames[13])}
    else if(page > 34 && page < 38){setChapterState(chapterNames[14])}
    else if(page > 37 && page < 41){setChapterState(chapterNames[15])}
    else if(page === 41){setChapterState(chapterNames[16])}
    else if(page > 42 && page < 45){setChapterState(chapterNames[17])}
    else if(page > 42 && page < 45){setChapterState(chapterNames[18])}
    else if(page > 44 && page < 48){setChapterState(chapterNames[19])}
    else if(page > 47 && page < 51){setChapterState(chapterNames[20])}
    else if(page >= 51 && page <= 55){setChapterState(chapterNames[21])}
  }

  const handlePageChange = (event, pageCurrent) => {
    setPageState(pageCurrent);
    chapterSwitch(page);
    let textInput = document.querySelector('input[type="number"]')
    textInput.value = page
    setShowBookPopUp(true)
  };

  const handleEnableInput = (event) => {
    event.target.removeAttribute('value');
  };

  const handleDisableInput = (event) => {
    event.target.setAttribute('value', page);
    event.target.value = page
  };

  const handleInput = (event) => {
    event.preventDefault()
    const input = event.target.children[0]
    if(input.value >= 1){
        setPageState(input.value)
        let newDirection;
        input.value > historyState.lastSavedPage ? newDirection = 'left' : newDirection = 'right';
        let newLastPage = historyState.lastSavedPage
        let newHistoryObj = {lastPage: newLastPage, lastSavedPage: input.value, historyIsAvailable: true, historyDirection: newDirection};
        setHistoryState(newHistoryObj);
        setLastChapterState(chapter)
        chapterSwitch(input.value)
    }
  };

  const historyNav = () => {
    chapterSwitch(historyState.lastPage)
    setPageState(historyState.lastPage)
    let newPage = historyState.lastPage
    let textInput = document.querySelector('input[type="number"]')
    textInput.value = newPage
    let newDirection;
    newPage > historyState.lastSavedPage ? newDirection = 'left' : newDirection = 'right';
    let newLastPage = historyState.lastSavedPage
    let newHistoryObj = {lastPage: newLastPage, lastSavedPage: newPage, historyIsAvailable: true, historyDirection: newDirection};
    setHistoryState(newHistoryObj);
    setLastChapterState(chapter)
  };

  const handleShowHide = () => {
    let newInView = !inView
    setInViewState(newInView);
    if(historyState.historyIsAvailable === true){
    setHistoryState(prevHistory => {
      return {
        ...prevHistory,
        historyIsAvailable: false
        }
      })
    }
    // const pageImg = document.querySelector('section img')
    // pageImg.classList.contains('fullsize') ? pageImg.classList.remove('fullsize') : pageImg.classList.add('fullsize')
  };

  const handleTouchPage = (event) => {
    touchXStart = event.targetTouches[0].pageX
  }

  const handleSwipePage = (event) => {
    touchXEnd = event.targetTouches[0].pageX
  }

  const handleTouchPageEnd = (event) => {
      if(touchXEnd > 0){
        let newLastPage = page;
        let newPage;
        if(touchXEnd > touchXStart){
            newPage = page - 1
        }else{
            newPage = page + 1
        }
        let newDirection;
        newPage > historyState.lastSavedPage ? newDirection = 'left' : newDirection = 'right';
        let newHistoryObj = {lastPage: newLastPage, lastSavedPage: newPage, historyIsAvailable: false, historyDirection: newDirection};
        chapterSwitch(newPage)
        setPageState(newPage)
        setHistoryState(newHistoryObj);
        setLastChapterState(chapter)
        let textInput = document.querySelector('input[type="number"]')
        textInput.value = newPage
      }
  };

  const handleHistorySwipeStart = (event) => {
    console.log(event)
    touchHistoryXStart = event.targetTouches[0].pageX
  };

  const handleHistorySwipe = (event) => {
    touchHistoryXEnd = event.targetTouches[0].pageX
  };

  const handleHistorySwipeEnd = (event) => {
    console.log(touchHistoryXEnd)
    if(touchHistoryXEnd > 0){
        setHistoryState({...historyState, historyIsAvailable: false})
    }
  };

  const renderFooter = () => {
    if(inView === true){
        return (
           <footer>
            <form onSubmit={handleInput}>
                <input type="number" pattern="[0-9]*" inputMode="numeric" defaultValue={page} onFocus={handleEnableInput} onBlur={handleDisableInput}/>
            </form>
            <div className="slide-container">
              <ContinuousSlider change={handlePageChange} commit={handlePageCommit} value={page} history={historyState.lastPage}></ContinuousSlider>
            </div>
          </footer>
        )
      } else{
        return null
      }
  };

  return (
    <div className="App">
      <Header isAvailable={inView} chapterNames={chapterNames} page={page}></Header>
      <CSSTransition
          in={historyState.historyIsAvailable}
          timeout={300}
          classNames="history"
          unmountOnExit
        >
            <History direction={historyState.historyDirection} prev={historyState.lastPage} click={historyNav} onTouchStart={handleHistorySwipeStart} onTouchMove={handleHistorySwipe} onTouchEnd={handleHistorySwipeEnd}/>
        </CSSTransition>
        <CSSTransition
          in={showBookPopUp}
          timeout={300}
          classNames="book-popup"
          unmountOnExit
        >
            <BookPopUp chapter={chapter} page={page}></BookPopUp>
        </CSSTransition>
      <section>
        <img alt="page" src={url} onClick={handleShowHide} onTouchStart={handleTouchPage} onTouchMove={handleSwipePage} onTouchEnd={handleTouchPageEnd}/>
      </section>
      {renderFooter()}
    </div>
  );
};

export default App;
