import React, { ReactElement, ReactNode, useState } from 'react'
import './App.css'

// Conventional props
function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>
}
function HeadingWithContent({
  children,
}: {
  children: ReactNode
}): ReactElement | null {
  return <h1>{children}</h1>
}

// Default props
const defaultContainerProps = {
  heading: <strong>First heading</strong>,
}

type ContainerProps = {
  heading: ReactNode
  children: ReactNode
} & typeof defaultContainerProps

function Container({ heading, children }: ContainerProps): ReactElement | null {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  )
}

Container.defaultProps = defaultContainerProps

// Functional properties
function TextWithNumber({
  children,
}: {
  children: (num: number) => ReactNode
}) {
  const [state, setState] = useState<number>(1)
  return (
    <div>
      <div>{children(state)}</div>
      <div>
        <button type='button' onClick={(e) => setState(state + 1)}>
          Add
        </button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className='App'>
      <Heading title='Hey, you got this!' />
      <HeadingWithContent>
        You don't have to worry about anything at all my friend
      </HeadingWithContent>
      <Container>A kind of children you can say</Container>
      <TextWithNumber>
        {(num: number) => <div>Your lucky number for today is: {num}</div>}
      </TextWithNumber>
    </div>
  )
}

export default App
