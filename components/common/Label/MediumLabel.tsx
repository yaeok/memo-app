interface MediumLabelProps {
  title: string
  style?: string
}

const MediumLabel: React.FC<MediumLabelProps> = (props: MediumLabelProps) => {
  return <h2 className={`text-xl font-bold ${props.style}`}>{props.title}</h2>
}

export default MediumLabel
