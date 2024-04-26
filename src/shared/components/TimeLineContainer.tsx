interface Props {
  children: JSX.Element[]
}

const TimeLineContainer = ({ children }: Props) => {
  return (
    <ol className='relative border-cod-gray-400 md:border-s'>{children}</ol>
  )
}

export default TimeLineContainer
