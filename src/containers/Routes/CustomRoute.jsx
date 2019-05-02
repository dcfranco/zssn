import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { get } from 'lodash'
import App from 'containers/App'
import MetaTags from 'components/MetaTags'
import Spinner from 'components/Spinner'

export default class CustomRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    props: PropTypes.object.isRequired,
    exact: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    metaTitle: PropTypes.string,
    metaDescription: PropTypes.string,
    metaKeywords: PropTypes.string,
    canonicalPath: PropTypes.string,
    defaultLayout: PropTypes.bool,
  }

  static defaultProps = {
    metaTitle: '',
    metaDescription: '',
    metaKeywords: '',
    canonicalPath: '',
    defaultLayout: true,
  }

  renderComponent(props) {
    const { component: C, props: cProps, defaultLayout } = this.props
    const { match } = props
    const subRoute = get(match, 'params.subRoute')

    if (defaultLayout) {
      return (
        <App location={ props.location }>
          <C { ...props } { ...cProps } key={subRoute}/>
          { cProps.loading && <Spinner /> }
        </App>
      )
    }

    return (
      <div className='container-fluid'>
        <C { ...props } { ...cProps } />
        { cProps.loading && <Spinner /> }
      </div>
    )
  }

  render() {
    const {
      exact,
      path,
      metaTitle,
      metaDescription,
      metaKeywords,
      canonicalPath,
    } = this.props
    return (
      <Fragment>
        <MetaTags
          metaTitle={ metaTitle }
          metaDescription={ metaDescription }
          metaKeywords={ metaKeywords }
          canonicalPath={ canonicalPath }
        />
        <Route
          exact={ exact }
          path={ path }
          render={ props => this.renderComponent(props) }
        />
      </Fragment>
    )
  }
}
