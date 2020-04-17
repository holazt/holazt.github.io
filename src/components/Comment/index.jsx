import React from 'react'
import 'disqusjs/dist/disqusjs.css'
import DisqusJS from 'disqusjs'
import config from '../../config/blog-config'

class Comment extends React.Component {
  componentDidMount() {
    new DisqusJS({
      shortname: config.author.disqus,
      siteName: config.siteName,
      identifier: document.location.pathname,
      url: document.location.origin + document.location.pathname + document.location.search,
      title: document.title,
      api: 'https://disqus.com/api',
      apikey: ['',
              ''],
      nesting: '4'
    })
  }
  render() {
    return <div id="disqus_thread" />
  }
}
export default Comment