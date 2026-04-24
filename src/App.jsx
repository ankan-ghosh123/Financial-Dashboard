import { useEffect, useState } from 'react'
import { DashboardContext, DashboardContextProvider } from './conteext/DashBoard.jsx'
import { SummaryCard } from './components/SummaryCard.jsx'
import './App.css'
import { useAuth0 } from "@auth0/auth0-react";
import { Admin } from './components/Admin.jsx'
import { useContext } from 'react';
import { TimeBasedVisual } from './components/TimeBasedVisual.jsx'
import { CatagoryBasedVisual } from './components/CatagoryBasedVisual.jsx'
import { TransactionsHistory } from './components/TansactionsHistory.jsx';
function App() {
  // const [isAdmin, setIsAdmin] = useState(false);
  const [text, setText] = useState("")

  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    isLoading
  } = useAuth0();

  if (isLoading)
    return <h2>Loading...</h2>;


  return (

    <DashboardContextProvider>
      <nav className='nav'>

        <p className='guid'>
          {isAuthenticated
            ? "Admin"
            : "Login / Signup as Admin"}
        </p>
        {
          !isAuthenticated ? (

            <div className='login-signup-div'>

              <button className='login-btn'
                onClick={() =>
                  loginWithRedirect()
                }
              >
                Login
              </button>

              <button className='signup-btn'
                onClick={() =>
                  loginWithRedirect({
                    authorizationParams: {
                      screen_hint: "signup"
                    }

                  })
                }
              >
                Sign Up
              </button>

            </div>

          ) : (

            <button className='logout-btn'
              onClick={() =>
                logout({
                  logoutParams: {
                    returnTo:
                      window.location.origin +"/Financial-Dashboard/"
                  }
                })
              }
            >
              Logout
            </button>

          )
        }

      </nav>

      {/* <nav className='nav'>
        <label > admin?</label>
        <input type="checkbox"
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)} />
      </nav> */}

      {
        // isAdmin ? (<Admin />)

        isAuthenticated ? (<Admin />)

          : (

            <div className="main-container">

              <div className="summary-container">
                <SummaryCard />
              </div>

              <div className="visual-container">
                <div className="top">
                  <TimeBasedVisual />
                </div>
                <div className="bottom">
                  <CatagoryBasedVisual />
                </div>
              </div>
              <div className="tans-history">
                <TransactionsHistory />
              </div>
            </div>

          )
      }

    </DashboardContextProvider>
  )

}

export default App
