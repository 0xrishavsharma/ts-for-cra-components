import { createContext, FC, ReactElement, ReactNode, useState } from 'react'
import './App.css'
import Person from './components/Person'
import City from './components/City'
import { Safe } from './components/City'
import { AppContextProps } from './Interfaces'
import { CityType } from './Enums'

const AppContext = createContext<null | AppContextProps>(null)

const contextValue: AppContextProps = {
  name: 'Rishav',
  age: 23,
}

const App: FC = () => {
  const title: string = 'React TypeScript'

  const handleFunction: Function = (str: string, num: number): ReactElement => {
    return <div>{`${str}: ${num}`}</div>
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className='App'>
        <h1>{title}</h1>
        {handleFunction('Age', 23)}
      </div>
      <div>
        <h2 className='mt-12 text-2xl font-black'>Person details</h2>
        <Person
          name='Rishav'
          age={23}
          email='anemail@email.com'
          getAge={() => 23}
        />
        <City
          name='New York'
          population={1000000}
          country='USA'
          cityType={CityType.Big}
          safe='Yes'
        />
      </div>
    </AppContext.Provider>
  )
}

export default App
