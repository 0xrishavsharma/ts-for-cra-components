import { ChangeEvent, FC, useState } from 'react'
import { CityType } from '../Enums'
import { CityProps } from '../Interfaces'

export type Safe = 'Yes' | 'No'

const anythingElseHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   console.log('anythingElseHandler')
}
const City: FC<CityProps> = ({ name, population, country, cityType, safe }) => {
  const [anythingElse, setAnythingElse] = useState<null | string>('')
  return (
    <div>
      <h1>City name:{name}</h1>
      <h1>City type:{cityType}</h1>
      <h1>Population:{name}</h1>
      <h1>Country:{name}</h1>
      <input
        type='text'
        placeholder='Anything else...'
        onChange={anythingElseHandler}
      />
      {anythingElse}
    </div>
  )
}

export default City
