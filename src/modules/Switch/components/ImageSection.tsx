import { Image } from '@/shared/components'

interface Props {
  title: JSX.Element | string
  src: string
}

const ImageSection = ({ src, title }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <h1 className='md:text-lg'>{title}</h1>
      <Image
        src={src}
        width='100%'
        className='rounded-md border-2 border-carissma-400/40'
        style={{
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
        }}
      />
    </div>
  )
}

export default ImageSection
