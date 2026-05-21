import React from 'react'
import Card from './Card';
function Status() {
  return (
    <section className='py-4'>
     <div className="container">
        <div className="row">
          <Card icon="fa-users" title="total users" counter="120"/>
          <Card icon="fa-building" title="projects" counter="45"/>
          <Card icon="fa-code" title="developers" counter="30"/>
          <Card icon="fa-check-circle" title="tasks" counter="150"/>
        </div>
        
    </div>
    </section>
  )
}

export default Status;
