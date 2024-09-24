interface LargeLabelProps {
  title: string
  style?: string
}

const LargeLabel: React.FC<LargeLabelProps> = (props: LargeLabelProps) => {
  return <h1 className={`text-2xl font-bold ${props.style}`}>{props.title}</h1>
}

export default LargeLabel
