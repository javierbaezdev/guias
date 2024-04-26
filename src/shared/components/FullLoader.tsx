import { Image } from '@/shared/components'
import logo from '@/assets/logo.webp'
import logoText from '@/assets/logoText.svg'

const FullLoader = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-2'>
      <Image
        src={logo}
        width='105px'
        className='animate-jump animate-iteration-count-infinite animate-steps-retro'
      />
      <Image src={logoText} width='250px' />
    </div>
  )
}

export default FullLoader
