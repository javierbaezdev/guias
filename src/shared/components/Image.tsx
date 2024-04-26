interface Props extends React.HTMLAttributes<HTMLImageElement> {
  width?: string
  height?: string
  src?: string
}

const Image = ({ className, ...rest }: Props) => {
  return (
    <img loading='eager' decoding='async' className={className} {...rest} />
  )
}

export default Image
