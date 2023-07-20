import Heading from '@/components/employers/heading'
import Hired from '@/components/employers/hired'
import Interview from '@/components/employers/interview'
import Press from '@/components/employers/press'
import Recruit from '@/components/employers/recruit'
import Signup from '@/components/employers/signup'
import Works from '@/components/employers/works'
import React from 'react'

const Employers = () => {
  return (
    <div>
      <Heading/>
      <Recruit/>
      <Works/>
      <Hired/>
      <Signup/>
      <Press/>
      <Interview/>
    </div>
  )
}

export default Employers
