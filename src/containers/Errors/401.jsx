import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import routeCodes from 'constants/routeCodes'
import { Redirect } from 'react-router-dom'
import { clearErrors } from 'actions/errors'

@connect(state => ({
  errorCode: state.errors.get('code'),
}))
class Error401 extends PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    errorCode: PropTypes.number,
  }

  static defaultProps = {
    errorCode: null,
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#F0F0F7'
  }

  onBackClick = async () => {
    const { history, dispatch } = this.props
    await dispatch(clearErrors())
    history.push(routeCodes.INDEX)
  }

  render() {
    const { errorCode } = this.props

    if (errorCode !== 401) {
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
              <div className='err-header'>
                <h2 className='d-block font-weight-light'>Acesso restrito ou negado</h2>
              </div>
              <div className='err-content bg-white'>
                Talvez você não tenha permissão para acessar essa página.
                <div className='links'>
                  <div className='link'>
                    <button type='button' onClick={ this.onBackClick } className='btn btn-link'>
                      Voltar a página inicial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Error401
