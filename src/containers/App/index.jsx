import React, { Component, createContext } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from 'components/NavBar'
import SideBar from 'components/SideBar'
import Errors from 'containers/Errors'
import { ToastContainer, toast } from 'react-toastify'

export const ToastContext = createContext()

@connect(state => ({
  hasCriticalError: state.errors.hasCriticalError(),
  errorCode: state.errors.get('code'),
}))
class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
    hasCriticalError: PropTypes.bool.isRequired,
    errorCode: PropTypes.number,
  }

  static defaultProps = {
    errorCode: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      menuVisible: false,
    }
  }

  onChangeMenuVisible = () => {
    if (window.innerWidth <= 991) {
      const { menuVisible } = this.state
      this.setState({
        menuVisible: !menuVisible,
      })
    }
  }

  showSuccessToast = (toastObject) => {
    toast(toastObject.message, {
      type: toast.TYPE.SUCCESS,
      closeButton: false,
      hideProgressBar: true,
      autoClose: 3000,
      draggable: false,
    })
  }

  render() {
    const { menuVisible } = this.state
    const { children, location, hasCriticalError, errorCode } = this.props

    if (hasCriticalError) {
      return <Errors code={ errorCode } />
    }

    return (
      <div>
        <ToastContainer position={ toast.POSITION.TOP_CENTER } />
        <ToastContext.Provider
          value={ {
            showSuccessToast: this.showSuccessToast,
          } }
        >
          <NavBar changeMenuVisible={ this.onChangeMenuVisible } />
          <main className='container-fluid'>
            <SideBar
              location={ location }
              menuVisible={ menuVisible }
            />
            <div
              style={ { paddingBottom: '1px' } }
              role='presentation'
              onClick={ () => {
                if (menuVisible) {
                  this.onChangeMenuVisible()
                }
              } }
            >
              { children }
            </div>
          </main>
        </ToastContext.Provider>
      </div>
    )
  }
}

export default withRouter(App)
