import React from 'react'
import { Component1,Component2,Component3 } from '../components/Pulsar-Components'
import ResearchNavbar from '../components/ResearchNavbar';
function pulsarfunctions() {
  const aboutLink = '/projects/pulsarFunctions';
  const classifyLink = '/pulsar/classify';
  const discussLink = '/pulsar/discuss';
  const collectionLink = '/pulsar/collections';
  return (
    
    <div>
      <ResearchNavbar 
      about={aboutLink}
      classify={classifyLink}
      discuss={discussLink}
      collection={collectionLink}/>
        <Component1/>
        <Component2/>
        <Component3/>
      hello
    </div>
  )
}

export default pulsarfunctions
