import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Container from './components/common/container'
import NavBar from './components/ui/NavBar'
import routes from './routes'
import { ToastContainer } from 'react-toastify'
import { QualitiesProvider, useQualities } from './hooks/useQualities'
import 'react-toastify/dist/ReactToastify.css'

const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    return <Route path={prop.path} component={prop.component} key={key} />
  })
}

// const QualitiesLoading = ({ children }) => {
//   const { isLoading } = useQualities()
//   if (!isLoading) {
//     return children
//   }
//   return <h1>Qualities are loading...</h1>
// }

function App() {
  return (
    <div className='App'>
      <NavBar routes={routes} />
      {/* <QualitiesContext.Provider value={'simple text'}> */}
      <QualitiesProvider>
        {/* <QualitiesLoading> */}
          <Container>
            <Switch>
              {getRoutes(routes)}
              <Redirect to='/' />
            </Switch>
          </Container>
          {/* </QualitiesContext.Provider> */}
        {/* </QualitiesLoading> */}
      </QualitiesProvider>
      <ToastContainer />
    </div>
  )
}

export default App
