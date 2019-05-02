import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export class Table extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    showToast: PropTypes.bool,
  }

  static defaultProps = {
    className: '',
    showToast: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      toastView: true,
    }
  }

  componentDidMount() {
    document.addEventListener('touchstart', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('touchstart', this.handleClickOutside)
  }

  handleClickOutside = () => {
    const sidePanel = document.getElementsByClassName('sidepanel active')
    if (sidePanel && sidePanel.length === 0) {
      this.setState({ toastView: false })
      document.removeEventListener('touchstart', this.handleClickOutside)
    }
  }

  render() {
    const { children, className, showToast } = this.props
    const { toastView } = this.state

    return (
      <div className='w-100 px-3 bg-container-light mb-4 position-relative'>
        <div className='w-100 overflow-auto'>
          <table className={ classNames('table', className) }>
            { children }
          </table>
        </div>
      </div>
    )
  }
}
