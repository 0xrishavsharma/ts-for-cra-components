import React, { FC, useState } from 'react'
import { PersonProps } from '../Interfaces'

const Person = ({ name, age, email, getAge }: PersonProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{email}</p>
      <p>{getAge(name)}</p>
    </div>
  )
}

export default Person
