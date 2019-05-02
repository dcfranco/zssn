import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { submit } from 'redux-form'
import { Field, reduxForm, Form } from 'redux-form/immutable'
import { get } from 'lodash'
import { getSearchFormValues } from 'selectors/addSurvivorForm'
import { peopleCreate, peopleCleanRequest, peopleIdAsyncRequest, peopleSave, peopleCleanSelected } from 'actions/people'
import Layout, { ColumnWrapper, ColumnLeft, FormWrapper, FormTitle, FormData, ColumnRight } from 'components/Layout'
import ReduxFormInput from 'components/Forms/ReduxFormInput'
import ReduxFormSelect from 'components/Forms/ReduxFormSelect'
import { required } from 'components/Forms/validators'

@connect(
  state => ({
    initialValues: getSearchFormValues(state),
    successRequest: state.people.get('options').get('successRequest'),
    errors: state.errors.get('error'),
  }),
)
@reduxForm({
  form: 'addSurvivorForm',
  enableReinitialize: true,
})
class AddSurvivor extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    errors: PropTypes.object,
  }

  static defaultProps = {
    errors: null,
  }

  state = {
    title: 'Add Survivor'
  }

  componentDidMount(){
    const { match, dispatch } = this.props
    const { subRoute } = get(match, 'params')
    
    if (subRoute) {
      dispatch(peopleIdAsyncRequest(subRoute))
      return this.setState({ title: 'Update Location'})
    }

    dispatch(peopleCleanRequest())
    dispatch(peopleCleanSelected())
  }

  componentWillUnmount(){
    const { dispatch } = this.props

    dispatch(peopleCleanRequest())
  }

  onSubmit = (data) => {
    const { dispatch, match } = this.props
    const { subRoute } = get(match, 'params')
    const longitude = data.get('longitude')
    const latitude = data.get('latitude')
    const inventory = data.get('inventory')
    const keys = inventory._keys
    let inventoryParam = ''
    let newData = null

    newData = data.set('lonlat', `Point(${longitude} ${latitude})`)
    keys.map((key) => {
      let text = `${key.charAt(0).toUpperCase() + key.slice(1)}:${inventory.get(key)}`
      inventoryParam += inventoryParam === '' ? text : `;${text}`
    })
    newData = newData.set('items', inventoryParam)

    if (subRoute) {
      return dispatch(peopleSave(newData, subRoute))
    }
    return dispatch(peopleCreate(newData))
  }

  render() {
    const { handleSubmit, dispatch, errors, successRequest, match } = this.props
    const { subRoute } = get(match, 'params')
    const { title } = this.state

    if (successRequest) {
      setTimeout(() => dispatch(peopleCleanRequest()), 7000)
    }

    return (
      <Layout container={true}>
        <ColumnWrapper>
          <ColumnLeft><h1 className='py-4'>{ title }</h1></ColumnLeft>
          <ColumnRight><button type='submit' onClick={() => dispatch(submit('addSurvivorForm'))} className='btn btn-primary'>Save</button></ColumnRight>
        </ColumnWrapper>
        {
          successRequest && (
            <div class="alert alert-success" role="alert">
              Information saved successfully
            </div>
          )
        }
        <Form onSubmit={ handleSubmit(this.onSubmit) } id='addSurvivorForm' name='addSurvivorForm' style={ { minWidth: 250 } }>
          <FormWrapper>
            <FormTitle>
              Informations
            </FormTitle>
            <FormData>
              <div className='col-12 col-md-4'>
                <Field
                  label='Name'
                  type='text'
                  name='name'
                  id='name'
                  component={ ReduxFormInput }
                  validate={ required }
                  errorText={ get(errors, 'name') }
                  disabled={ !!subRoute }
                />
              </div>
              <div className='col-12 col-md-4'>
                <Field
                  label='Age'
                  type='number'
                  name='age'
                  id='age'
                  component={ ReduxFormInput }
                  validate={ required }
                  errorText={ get(errors, 'age') }
                  disabled={ !!subRoute }
                />
              </div>
              <div className='col-12 col-md-4'>
                <Field
                  label='Gender'
                  type='text'
                  name='gender'
                  id='gender'
                  options={[
                    {
                      label: 'Male',
                      value: 'M',
                    },
                    {
                      label: 'Female',
                      value: 'F',
                    },
                  ]}
                  component={ ReduxFormSelect }
                  validate={ required }
                  errorText={ get(errors, 'gender') }
                  disabled={ !!subRoute }
                />
              </div>
            </FormData>
          </FormWrapper>
          <FormWrapper className='border-top-0'>
            <FormTitle>
              Localization
            </FormTitle>
            <FormData>
              <div className='col-12 col-md-3'>
                <Field
                  label='Longitude'
                  type='number'
                  name='longitude'
                  id='longitude'
                  component={ ReduxFormInput }
                  errorText={ get(errors, 'lonlat') }
                />
              </div>
              <div className='col-12 col-md-3'>
                <Field
                  label='Latitude'
                  type='number'
                  name='latitude'
                  id='latitude'
                  component={ ReduxFormInput }
                  errorText={ get(errors, 'lonlat') }
                />
              </div>
            </FormData>
          </FormWrapper>
          <FormWrapper className='border-top-0'>
            <FormTitle>
              Inventory
            </FormTitle>
            <FormData>
              <div className='col-12 col-md-3'>
                <Field
                  label='Water'
                  type='number'
                  name='inventory[water]'
                  id='Water'
                  component={ ReduxFormInput }
                  disabled={ !!subRoute }
                />
              </div>
              <div className='col-12 col-md-3'>
                <Field
                  label='Food'
                  type='number'
                  name='inventory[food]'
                  id='Food'
                  component={ ReduxFormInput }
                  disabled={ !!subRoute }
                />
              </div>
              <div className='col-12 col-md-3'>
                <Field
                  label='Medication'
                  type='number'
                  name='inventory[medication]'
                  id='name'
                  component={ ReduxFormInput }
                  disabled={ !!subRoute }
                />
              </div>
              <div className='col-12 col-md-3'>
                <Field
                  label='Ammunition'
                  type='number'
                  name='inventory[ammunition]'
                  id='Ammunition'
                  component={ ReduxFormInput }
                  disabled={ !!subRoute }
                />
              </div>
            </FormData>
          </FormWrapper>
        </Form>
      </Layout>
    )
  }
}

export default AddSurvivor
