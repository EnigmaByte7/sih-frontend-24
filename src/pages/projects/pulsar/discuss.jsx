import React from 'react'
import ResearchNavbar from '/src/components/ResearchNavbar.jsx';

function discuss() {
    const about = "/projects/pulsar/about";
    const classify = '/projects/pulsar/classify';
    const discuss = '/projects/pulsar/discuss';
    const collection = '/projects/pulsar/collection';
  return (
    <div>
      <ResearchNavbar 
                about={about}
                classify={classify}
                discuss={discuss}
                collection={collection}/>
      discuss
    </div>
  )
}

export default discuss
