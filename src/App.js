import React from 'react';
import './App.css';
import ContinuousSlider from "./ContinuousSlider";
import History from "./History";
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


const App = props => {
  const [ page, setPageState ] = React.useState(1);
  const [ chapter, setChapterState ] = React.useState(chapterNames[0]);
  const [ inView, setInViewState ] = React.useState(false);
  const [ historyState, setHistoryState ] = React.useState({
    lastPage:1,
    lastSavedPage:1,
    historyIsAvailable: false,
    historyDirection: null,
  });

  const handlePageCommit= () => {
    let newDirection;
    page > historyState.lastSavedPage ? newDirection = 'left' : newDirection = 'right';
    let newLastPage = historyState.lastSavedPage
    let newHistoryObj = {lastPage: newLastPage, lastSavedPage: page, historyIsAvailable: true, historyDirection: newDirection};
    setHistoryState(newHistoryObj);
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
    // setTimeout(()=>{
    //   setHistoryState(prevHistory => {
    //   return {
    //     ...prevHistory,
    //     historyIsAvailable: false
    //     }
    //   })
    // },6000)
  };

  const handlePageChange = (event, pageCurrent) => {
    setPageState(pageCurrent);
  };

  const historyNav = () => {
    setPageState(historyState.lastPage)
    let newPage = historyState.lastPage
    let newDirection;
    newPage > historyState.lastSavedPage ? newDirection = 'left' : newDirection = 'right';
    let newLastPage = historyState.lastSavedPage
    let newHistoryObj = {lastPage: newLastPage, lastSavedPage: newPage, historyIsAvailable: true, historyDirection: newDirection};
    setHistoryState(newHistoryObj);
  }

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
  }

  const renderHeader = () => {
    if(inView === true){
        return (
            <header>
                <div>
                  <svg focusable="false" aria-hidden="true">
                    <path xmlns="http://www.w3.org/2000/svg" d="M7.2642591,12.6772865 C6.90261436,12.2849891 6.91215906,11.6736274 7.29289322,11.2928932 L14.2928932,4.29289322 C14.6834175,3.90236893 15.3165825,3.90236893 15.7071068,4.29289322 C16.0976311,4.68341751 16.0976311,5.31658249 15.7071068,5.70710678 L9.41421356,12 L15.7071068,18.2928932 C16.0976311,18.6834175 16.0976311,19.3165825 15.7071068,19.7071068 C15.3165825,20.0976311 14.6834175,20.0976311 14.2928932,19.7071068 L7.29289322,12.7071068 C7.28297167,12.6971852 7.27343586,12.6872407 7.2642591,12.6772865 Z" fillRule="nonzero"/>
                  </svg>
                  <Drawer toc={chapterNames}></Drawer>
                </div>
                <div className="right-icons">
                  <svg focusable="false" aria-hidden="true">
                    <path xmlns="http://www.w3.org/2000/svg" d="M17.9097583,16.4457485 L22.6967936,21.2327838 C23.1010688,21.637059 23.1010688,22.2925185 22.6967936,22.6967936 C22.2925185,23.1010688 21.637059,23.1010688 21.2327838,22.6967936 L16.4457485,17.9097583 C14.8180853,19.2175068 12.7504232,20 10.5,20 C5.25329488,20 1,15.7467051 1,10.5 C1,5.25329488 5.25329488,1 10.5,1 C15.7467051,1 20,5.25329488 20,10.5 C20,12.7504232 19.2175068,14.8180853 17.9097583,16.4457485 Z M10.5,17.9 C14.5869071,17.9 17.9,14.5869071 17.9,10.5 C17.9,6.41309285 14.5869071,3.1 10.5,3.1 C6.41309285,3.1 3.1,6.41309285 3.1,10.5 C3.1,14.5869071 6.41309285,17.9 10.5,17.9 Z" fillRule="nonzero"/>
                  </svg>
                  <svg focusable="false" aria-hidden="true">
                    <path xmlns="http://www.w3.org/2000/svg" d="M18,3 L6,3 L6,19.7672659 L11.9999999,14.4127077 L18,19.7672659 L18,3 Z M11.9999999,17.0933232 L5.66583691,22.7460971 C5.25377873,23.1138287 4.62163425,23.0778949 4.25390268,22.6658367 C4.09037716,22.4825997 4,22.2455937 4,21.9999998 L4,3 C4,1.8954305 4.8954305,1 6,1 L18,1 C19.1045695,1 20,1.8954305 20,3 L20,22 C20,22.5522847 19.5522847,23 19,23 C18.754406,23 18.5174001,22.9096228 18.3341631,22.7460973 L11.9999999,17.0933232 Z"/>
                  </svg>
                  <svg focusable="false" aria-hidden="true">
                    <path xmlns="http://www.w3.org/2000/svg" d="M14.8277967,18.5740416 L18.0740636,10.6193217 C18.2827396,10.1079776 18.8664312,9.86261672 19.3777753,10.0712927 C19.6266925,10.1728742 19.8242229,10.3704045 19.9258043,10.6193217 L23.8809444,20.3110793 C23.9852824,20.5667514 23.862602,20.8585972 23.6069299,20.9629352 C23.546952,20.9874117 23.4827893,21 23.4180092,21 L22.6079606,21 C22.4047763,21 22.2217969,20.8770431 22.1450254,20.6889207 L21.4557884,19 L16.5440794,19 L15.8548424,20.6889207 C15.778071,20.8770431 15.5950916,21 15.3919073,21 L13.9936699,21 C13.7904856,21 13.6075062,20.8770431 13.5307348,20.6889207 L12.0253114,17 L3.57270308,17 L2.06727972,20.6889207 C1.99050827,20.8770431 1.8075289,21 1.60434455,21 L0.524279716,21 C0.248137341,21 0.0242797159,20.7761424 0.0242797159,20.5 C0.0242797159,20.43522 0.0368679692,20.3710572 0.0613445425,20.3110793 L6.64166931,4.18651471 C6.90251434,3.54733462 7.63212886,3.24063345 8.27130896,3.50147849 C8.58245547,3.62845525 8.82936841,3.8753682 8.95634518,4.18651471 L14.8277967,18.5740416 Z M4.38888943,15 L11.2091251,15 L7.79900724,6.64377641 L4.38888943,15 Z M20.7416254,17.25 L18.9999339,12.9821231 L17.2582425,17.25 L20.7416254,17.25 Z"/>
                  </svg>
                </div>
            </header>
            )
      } else{
        return null
      }
  }

  const renderFooter = () => {
    if(inView === true){
        return (
           <footer>
            <div className="location-container">
              <div className="location-text">
                <p>{chapter}</p>
                <p>{page} of 55</p>
              </div>
              <div className="location-bar" style={{left: left + 'px'}}>
                <div className="mark mark1"></div>
                <div className="mark mark2"></div>
                <div className="mark mark3"></div>
                <div className="mark mark4"></div>
                <div className="mark mark5"></div>
              </div>
            </div>
            <div className="slide-container">
              <p><span>{Math.round((page * 100) / 55)}</span>%</p>
              <ContinuousSlider change={handlePageChange} commit={handlePageCommit} value={page} history={historyState.lastPage}></ContinuousSlider>
            </div>
          </footer>
        )
      } else{
        return null
      }
  }


  const left = 166 - (page * 10);
  const url = `https://pearsonux.sfo2.digitaloceanspaces.com/sample_pdf/${page}.png`

  return (
    <div className="App">
      {renderHeader()}
      <section>
        <CSSTransition
          in={historyState.historyIsAvailable}
          timeout={300}
          classNames="history"
        >
        <History isAvailable={historyState.historyIsAvailable} direction={historyState.historyDirection} prev={historyState.lastPage} prevSection={chapter} click={historyNav}/>
        </CSSTransition>
        <img alt="page" src={url} onClick={handleShowHide}/>
      </section>
      {renderFooter()}
    </div>
  );
}

export default App;
