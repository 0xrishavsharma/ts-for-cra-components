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
  header,
  children,
}: {
  header: (num: number) => ReactNode
  children: (num: number) => ReactNode
}) {
  const [state, setState] = useState<number>(1)
  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>{children(state)}</div>
      <div>
        <button type='button' onClick={(e) => setState(state + 1)}>
          Add
        </button>
      </div>
    </div>
  )
}

// List
// Generic props
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[]
  render: (item: ListItem) => ReactNode
}) {
  return (
    <div>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{render(item)}</li>
        })}
      </ul>
    </div>
  )
}

// Class Components
class MyHeader extends React.Component<{ title: ReactNode }> {
  render() {
    return <h1>{this.props.title}</h1>
  }
}
function App() {
  return (
    <div className='App'>
      <Heading title='Hey, you got this!' />
      <HeadingWithContent>
        You don't have to worry about anything at all my friend
      </HeadingWithContent>
      <Container>A kind of children you can say</Container>
      <TextWithNumber header={() => <span>Header this is</span>}>
        {(num: number) => <div>Your lucky number for today is: {num}</div>}
      </TextWithNumber>
      <List
        items={['Rohit', 'Fin', 'Ferb', 'Raj']}
        render={(item: string) => (
          <div>
            This is the list item from the LIST component:{' '}
            <b>{item.toUpperCase()} </b>
          </div>
        )}
      ></List>
      <MyHeader title='This is a title from a CLASS based component' />
    </div>
  )
}

export default App
