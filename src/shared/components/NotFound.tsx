import { IrregularButton } from './buttons'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <h1>404 - ¡Por Aquí no es mi rey!🤔</h1>
      <IrregularButton onClick={() => (window.location.href = '/')}>
        Volver al inicio
      </IrregularButton>
    </div>
  )
}

export default NotFound
