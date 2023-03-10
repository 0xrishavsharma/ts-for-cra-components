import { Safe } from './components/City'
import { CityType } from './Enums'

export interface PersonProps {
  name: string
  age: number
  email: string
  getAge: (name: string) => number
}

export interface CityProps {
  name: string
  population: number
  country: string
  cityType: CityType
  safe: Safe
}

export interface AppContextProps {
  name: string
  age: number
}
