import React from 'react'
import { LibraryAdd, Report, Update, CompareArrows, LibraryBooks } from '@material-ui/icons'
import routeCodes from './routeCodes'

export const isActiveRoute = ((location, route) => {
  return location.pathname.indexOf(route) > -1 || false
})

const MENU_LINKS = [
  {
    route: routeCodes.INDEX,
    name: 'Add Survivors',
    icon: () => <LibraryAdd />,
    isActive: (location) => location && location.pathname === routeCodes.INDEX,
  }, {
    route: routeCodes.REPORT_INFECTED,
    name: 'Report Infected',
    icon: () => <Report />,
    isActive: (location) => isActiveRoute(location, routeCodes.REPORT_INFECTED),
  }, {
    route: routeCodes.UPDATE_LOCATION,
    name: 'Update Location',
    icon: () => <Update />,
    isActive: (location) => isActiveRoute(location, routeCodes.UPDATE_LOCATION),
  }, {
    route: routeCodes.TRADE_ITEMS,
    name: 'Trade Items',
    icon: () => <CompareArrows />,
    isActive: (location) => isActiveRoute(location, routeCodes.TRADE_ITEMS),
  }, {
    route: routeCodes.REPORTS,
    name: 'Reports',
    icon: () => <LibraryBooks />,
    isActive: (location) => isActiveRoute(location, routeCodes.REPORTS),
  },
]

export default MENU_LINKS
