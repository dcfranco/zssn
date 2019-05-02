import React from 'react'
import Loadable from 'react-loadable'
import Spinner from 'components/Spinner'

export default function AsyncComponentHOC(loader) {
  return Loadable({
    loader,
    loading: () => <Spinner />,
  })
}
