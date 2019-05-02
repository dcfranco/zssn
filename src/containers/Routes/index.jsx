import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AsyncComponentHOC from 'components/HOC/AsyncComponentHOC'
import CustomRoute from 'containers/Routes/CustomRoute'
import routeCodes from 'constants/routeCodes'
import { Spy } from 'containers/Spy'

// Errors
import Error401 from 'containers/Errors/401'
import Error403 from 'containers/Errors/403'
import Error500 from 'containers/Errors/500'
import Error505 from 'containers/Errors/505'

// Lazy Loading
const AsyncAddSurvivor = AsyncComponentHOC(() => import('containers/AddSurvivor'))
const AsyncReportInfected = AsyncComponentHOC(() => import('containers/ReportInfected'))
const AsyncUpdateLocation = AsyncComponentHOC(() => import('containers/UpdateLocation'))
const AsyncTradeItems = AsyncComponentHOC(() => import('containers/TradeItems'))
const AsyncReports = AsyncComponentHOC(() => import('containers/Reports'))

const Routes = ({ childProps }) => {
  return (
    <Router>
      <Fragment>
        <Spy />
        <Switch>
          <CustomRoute
            path={ routeCodes.INDEX }
            exact
            component={ AsyncAddSurvivor }
            props={ childProps }
            metaTitle='Add Survivor'
          />
          <CustomRoute
            path={ routeCodes.REPORT_INFECTED }
            exact
            component={ AsyncReportInfected }
            props={ childProps }
            metaTitle='Report Infected'
          />
          <CustomRoute
            path={ routeCodes.UPDATE_LOCATION }
            exact
            component={ AsyncUpdateLocation }
            props={ childProps }
            metaTitle='Update Location'
          />
          <CustomRoute
            path={ `${routeCodes.UPDATE_LOCATION}/:subRoute` }
            exact
            component={ AsyncAddSurvivor }
            props={ childProps }
            metaTitle='Update Location'
          />
          <CustomRoute
            path={ routeCodes.TRADE_ITEMS }
            exact
            component={ AsyncTradeItems }
            props={ childProps }
            metaTitle='Trade Items'
          />
          <CustomRoute
            path={ routeCodes.REPORTS }
            exact
            component={ AsyncReports }
            props={ childProps }
            metaTitle='Reports'
          />
          <Route exact path={ routeCodes.ERROR_401 } component={ Error401 } />
          <Route exact path={ routeCodes.ERROR_500 } component={ Error500 } />
          <Route exact path={ routeCodes.ERROR_505 } component={ Error505 } />
          <Route component={ Error403 } />
        </Switch>
      </Fragment>
    </Router>
  )
}

Routes.propTypes = {
  childProps: PropTypes.object.isRequired,
}

export default Routes
