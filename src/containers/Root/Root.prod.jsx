import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Routes from 'containers/Routes'
import moment from 'moment'

@connect(state => ({
  loading: state.app.get('spinner'),
}))
export default class Root extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    moment.locale('pt-br')
  }

  render() {
    const { loading } = this.props
    const childProps = { loading }
    return (
      <Fragment>
        <Routes childProps={ childProps } />
      </Fragment>
    )
  }
}
