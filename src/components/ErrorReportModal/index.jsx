import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, Field, reset } from 'redux-form/immutable'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ReduxFormInput from 'components/Forms/ReduxFormInput'
import ReduxFormTextArea from 'components/Forms/ReduxFormTextArea'
import { required } from 'components/Forms/validators'

@connect()
@reduxForm({
  form: 'errorReportModal',
})
export default class ErrorReportModal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  onTryToClose = () => {
    const { dispatch, onClose } = this.props
    dispatch(reset('errorReportModal'))
    onClose()
  }

  onSubmit = () => {
  }

  render() {
    const { isOpen, handleSubmit } = this.props

    return (
      <Modal isOpen={ isOpen } toggle={ this.onTryToClose } centered={ true } size='md'>
        <ModalHeader toggle={ this.onTryToClose }>
          Relatar possível falha de sistema
          <p className='p-0 m-0'>
            <small>Preencha os campos, nossa equipe vai analisar o problema.</small>
          </p>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={ handleSubmit(this.onSubmit) }>
            <div className='row'>
              <div className='col-12'>
                <Field
                  label='Nome'
                  name='name'
                  id='name'
                  component={ ReduxFormInput }
                  validate={ required }
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <Field
                  label='Email'
                  name='email'
                  id='email'
                  component={ ReduxFormInput }
                  validate={ required }
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <Field
                  label='Relatar o problema'
                  name='report'
                  id='report'
                  component={ ReduxFormTextArea }
                  validate={ required }
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <button type='button' onClick={ this.onTryToClose } className='btn btn-light'>Cancelar</button>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </ModalFooter>
      </Modal>
    )
  }
}
