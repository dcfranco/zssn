import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import routeCodes from 'constants/routeCodes'
import { Redirect } from 'react-router-dom'
import ErrorReportModal from 'components/ErrorReportModal'
import { clearErrors } from 'actions/errors'

@connect(state => ({
  errorCode: state.errors.get('code'),
}))
class Error500 extends PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    errorCode: PropTypes.number,
  }

  static defaultProps = {
    errorCode: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      isReportModalOpened: false,
    }
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#F0F0F7'
  }

  onOpenReportModal = () => {
    this.setState({
      isReportModalOpened: true,
    })
  }

  onCloseReportModal = () => {
    this.setState({
      isReportModalOpened: false,
    })
  }

  onBackClick = async () => {
    const { history, dispatch } = this.props
    await dispatch(clearErrors())
    history.push(routeCodes.INDEX)
  }

  render() {
    const { isReportModalOpened } = this.state
    const { errorCode } = this.props

    if (errorCode !== 500) {
      return (
        <Redirect
          to={ routeCodes.INDEX }
        />
      )
    }

    return (
      <div className='container errors'>
        <div className='row h-100 justify-content-md-center align-items-md-center mt-md-n5'>
          <div className='col-12 col-md-8 p-md-5'>
            <div className='shadow-sm mt-n3'>
              <div className='err-header err-500'>
                <h2 className='d-block font-weight-light'>Ops, ocorreu um erro inesperado.</h2>
              </div>
              <div className='err-content bg-white'>
                <div className='links'>
                  <div className='link'>
                    <button type='button' onClick={ this.onBackClick } className='btn btn-link'>
                      Voltar a página inicial
                    </button>
                  </div>
                  <div className='link'>
                    <button type='button' onClick={ this.onOpenReportModal } className='btn btn-link'>
                      Relatar erro ao suporte do sistema
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ErrorReportModal
          isOpen={ isReportModalOpened }
          onClose={ this.onCloseReportModal }
        />
      </div>
    )
  }
}

export default Error500
