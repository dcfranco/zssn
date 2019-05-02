import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Edit } from '@material-ui/icons'
import { Table, TableHead, TableHeader, TableCell, TableBody, TableRow } from 'components/Table'
import Layout, { ColumnWrapper, ColumnLeft, FormWrapper, FormTitle, FormData, ColumnRight } from 'components/Layout'
import { peopleAsyncRequest } from 'actions/people'
import routeCodes from 'constants/routeCodes'

@connect(
  state => ({
    peoples: state.people.get('results')
  })
)
class UpdateLocation extends Component {
  componentDidMount(){
    const { dispatch } = this.props

    dispatch(peopleAsyncRequest())
  }

  render() {
    const { peoples } = this.props

    return (
      <Layout container={true}>
        <ColumnWrapper>
          <ColumnLeft><h1 className='py-4'>Update Location</h1></ColumnLeft>
        </ColumnWrapper>
        <Table>
          <TableHead>
            <TableHeader style={ { width: '90%', marginRight: '10px' } }>
              Name
            </TableHeader>
            <TableHeader style={ { paddingLeft: 35 } }>
              Edit
            </TableHeader>
          </TableHead>
          <TableBody>
            {
              peoples && peoples.map((people) => {
                return (
                  <TableRow key={people.get('created_at')}>
                    <TableCell style={ { width: '90%', marginRight: '10px' } }>
                      { people.get('name') }
                    </TableCell>
                    <TableCell>
                      <Link to={`${ routeCodes.UPDATE_LOCATION }/${ people.get('id') }`}>
                        <button type='button' className='btn'><Edit /></button>
                      </Link>
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </Layout>
    )
  }
}

export default UpdateLocation
