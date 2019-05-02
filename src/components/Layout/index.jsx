import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import SidePanelLayout, { SidePanelLinks } from './SidePanel'
import { FormWrapper, FormTitle, FormData } from './Form'
import ColumnWrapper from './ColumnWrapper'
import ColumnLeft from './ColumnLeft'
import ColumnRight from './ColumnRight'
import Container from './Container'
import Empty from './Empty'
import RowWrapper from './RowWrapper'

export {
  SidePanelLayout,
  ColumnWrapper,
  ColumnLeft,
  ColumnRight,
  Container,
  Empty,
  RowWrapper,
  SidePanelLinks,
  FormWrapper,
  FormTitle,
  FormData,
}

const Layout = ({ children, className, container }) => {
  return (
    <div className={ classNames(className, {
      'container': container,
    }) }
    >
      { children }
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  container: PropTypes.bool,
}

Layout.defaultProps = {
  className: '',
  container: false,
}

export default Layout
