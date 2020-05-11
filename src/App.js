import React from 'react';
import './App.css';
import ContinuousSlider from "./ContinuousSlider";
import History from "./History";


const App = props => {
  const [ page, setPageState ] = React.useState(1);
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
    // setTimeout(()=>{
    //   setHistoryState({historyIsAvailable: false, historyDirection: null});
    // },3000)

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

  const left = 166 - (page * 10);
  const url = `https://pearsonux.sfo2.digitaloceanspaces.com/sample_pdf/${page}.png`

  return (
    <div className="App">
      <header>
        <p>Test deploy</p>
        <div>
          <svg focusable="false" aria-hidden="true">
            <path xmlns="http://www.w3.org/2000/svg" d="M7.2642591,12.6772865 C6.90261436,12.2849891 6.91215906,11.6736274 7.29289322,11.2928932 L14.2928932,4.29289322 C14.6834175,3.90236893 15.3165825,3.90236893 15.7071068,4.29289322 C16.0976311,4.68341751 16.0976311,5.31658249 15.7071068,5.70710678 L9.41421356,12 L15.7071068,18.2928932 C16.0976311,18.6834175 16.0976311,19.3165825 15.7071068,19.7071068 C15.3165825,20.0976311 14.6834175,20.0976311 14.2928932,19.7071068 L7.29289322,12.7071068 C7.28297167,12.6971852 7.27343586,12.6872407 7.2642591,12.6772865 Z" fillRule="nonzero"/>
          </svg>
          <svg focusable="false" aria-hidden="true">
            <rect x="4" y="6" width="16" height="2" rx="1"/>
            <rect x="4" y="11" width="16" height="2" rx="1"/>
            <rect x="4" y="16" width="16" height="2" rx="1"/>
          </svg>
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
      <section>
        <History isAvailable={historyState.historyIsAvailable} direction={historyState.historyDirection} prev={historyState.lastPage} click={historyNav}/>
        <img alt="page" src={url}/>
      </section>
      <footer>
        <div className="location-container">
          <div className="location-text">
            <p>1.1 Section Name</p>
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
    </div>
  );
}

export default App;
