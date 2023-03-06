import { FC, ReactElement, ReactNode, useState } from 'react'
import './App.css'

const App: FC = () => {
  const [count, setCount] = useState(0)

  const title: string = 'React TypeScript'

  const handleFunction: Function = (str: string, num: number): ReactElement => {
    return <div>{`${str}: ${num}`}</div>
  }

  return (
    <div className='App'>
      <h1>{title}</h1>
      {handleFunction('Age', 23)}
    </div>
  )
}

export default App
