import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

class MetaTags extends PureComponent {
  static propTypes = {
    metaTitle: PropTypes.string,
    metaTitleSuffix: PropTypes.string,
    metaDescription: PropTypes.string,
    metaKeywords: PropTypes.string,
    canonicalPath: PropTypes.string,
    shouldBeIndexed: PropTypes.bool,
  }

  static defaultProps = {
    metaTitle: '',
    metaTitleSuffix: ' | ZSSN',
    metaDescription: '',
    metaKeywords: '',
    canonicalPath: '',
    shouldBeIndexed: true,
  }

  getURL(locationHref) {
    const urlParts = locationHref.split('/')
    return `${ urlParts[0] }//${ urlParts[2] }`
  }

  getRobotsValue() {
    const { shouldBeIndexed } = this.props
    return shouldBeIndexed ? 'index,follow' : 'noindex,follow'
  }

  render() {
    const baseUrl = 'https://zssn.com'
    const {
      metaTitle,
      metaTitleSuffix,
      metaDescription,
      metaKeywords,
      canonicalPath,
    } = this.props
    const fullMetaTitle = `${ metaTitle }${ metaTitleSuffix }`
    const canonicalUrl = `${ baseUrl }${ canonicalPath }`

    return (
      <Helmet>
        <title>{fullMetaTitle}</title>
        <meta name='description' content={ metaDescription } />
        <meta name='keywords' content={ metaKeywords } />
        <link rel='canonical' href={ canonicalUrl } />
        <meta name='robots' content={ this.getRobotsValue() } />
      </Helmet>
    )
  }
}

export default MetaTags
