interface MainProps {
  children: React.ReactNode
}

const Main: React.FC<MainProps> = (props: MainProps) => {
  return <main className='container mx-auto py-12'>{props.children}</main>
}

export default Main
