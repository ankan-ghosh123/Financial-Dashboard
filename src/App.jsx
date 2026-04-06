import { useEffect, useState } from 'react'
import { DashboardContext, DashboardContextProvider } from './conteext/DashBoard.jsx'
import { SummaryCard } from './components/SummaryCard.jsx'
import './App.css'
import { Admin } from './components/Admin.jsx'
import { useContext } from 'react';
import { TimeBasedVisual } from './components/TimeBasedVisual.jsx'
import { CatagoryBasedVisual } from './components/CatagoryBasedVisual.jsx'
import { TransactionsHistory } from './components/TansactionsHistory.jsx';
function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (


    < DashboardContextProvider>

      <nav className='nav'>
        <lable > admin? <input type="checkbox"
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)} />
        </lable>
      </nav>
      {isAdmin ? (<Admin />)

        : (<div className="main-container">

          <div className="summary-container">
            <SummaryCard />
          </div>

          <div className="visual-container">
            <div className="top">
              <TimeBasedVisual /></div>
            <div className="bottom">
              <CatagoryBasedVisual /></div>
            <div className="tans-history">
              <TransactionsHistory />
            </div>
          </div>

        </div>

        )}
    </DashboardContextProvider>

  )

}

export default App
