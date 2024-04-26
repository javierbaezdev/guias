import { Image } from '@/shared/components'
import logo from '@/assets/logo.webp'
import logoText from '@/assets/logoText.svg'

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src={logo}
        width='35px'
        className='animate-jiggle animate-iteration-count-infinite animate-steps-retro'
      />
      <Image src={logoText} width='100px' />
    </div>
  )
}

export default Logo
