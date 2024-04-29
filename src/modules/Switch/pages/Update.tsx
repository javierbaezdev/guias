import { TimeLineContainer, TimeLineItem } from '@/shared/components'
import { ImageSection } from '../components'
import {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
} from '@/assets/NintendoSwitchUpdate'
import { dayBreak, hbMenu } from '@/assets'
import { usePageTitle } from '@/shared/hooks'

const TITLE = 'Actualización nintendo switch mágica (versión MARIKO)'

const Update = () => {
  usePageTitle(TITLE)
  return (
    <section className='flex flex-col gap-2 pb-2 md:gap-8'>
      <h1 className='text-center md:text-xl'>{TITLE}</h1>
      <TimeLineContainer>
        <TimeLineItem position={1}>
          <div className='flex flex-col gap-8'>
            <h3 className='text-lg'>Recursos necesarios a descargar:</h3>
            <div className='flex flex-col gap-2'>
              <a
                href='https://darthsternie.net/switch-firmwares/'
                target='_blank'
                className='hover:scale-105'
              >
                👉 Versiones de Firmware
              </a>
              <a
                href='https://drive.google.com/drive/folders/1HAe-aLxZFsZDk2Ay5YUrMvOPnY1mOd1X?usp=sharing'
                target='_blank'
                className='hover:scale-105'
              >
                👉 Pre releases
              </a>
            </div>
          </div>
        </TimeLineItem>
        <TimeLineItem position={2}>
          <div className='flex flex-col gap-8'>
            <h3 className='text-lg'>Preparativos para la instalación:</h3>
            <div className='md: flex flex-col gap-6 '>
              <p className='text-pretty'>
                Borrar contenido de la tarjeta SD: Elimina todo el contenido de
                la tarjeta SD, asegurándote de conservar únicamente las carpetas
                <strong className='text-carissma-500'> "emuMMC"</strong> y
                <strong className='text-carissma-500'> "Nintendo"</strong>. Esto
                se puede hacer conectando la tarjeta SD a una computadora y
                borrando los archivos manualmente.
              </p>
              <p className='text-pretty'>
                Copiar contenido descargado previamente en{' '}
                <strong className='text-carissma-500'> "Pre releases"</strong>:
                Localiza los archivos que has descargado en la carpeta "Pre
                releases" y cópialos. Luego, pégalos en la raíz de la tarjeta
                SD.
              </p>
              <p className='text-pretty'>
                Agregar la última versión del{' '}
                <strong className='text-carissma-500'> Firmware</strong>: Busca
                y descarga la última versión del firmware de la Nintendo Switch.
                Una vez descargado, copia el archivo de firmware a la raíz de la
                tarjeta SD.
              </p>
              <p className='text-pretty'>
                Insertar la tarjeta SD en la Nintendo Switch: Después de
                completar los pasos anteriores, vuelve a insertar la tarjeta SD
                en la ranura correspondiente de tu Nintendo Switch. Asegúrate de
                que esté bien colocada para evitar problemas de lectura o
                conexión.
              </p>
            </div>
          </div>
        </TimeLineItem>
        <TimeLineItem position={3}>
          <div className='flex flex-col gap-8'>
            <h3 className='text-lg'>Actualización del modo liberado:</h3>
            <div className='flex-col gap-6 md:flex '>
              <p className='text-pretty'>
                Una vez que estés en el modo liberado, abrir la aplicación
                <strong className='text-carissma-500'> "bhmenu"</strong>.
              </p>
              <p className='text-pretty'>
                Dentro de
                <strong className='text-carissma-500'> "bhmenu"</strong>,
                ejecutar la aplicación{' '}
                <strong className='text-carissma-500'> "Daybreak"</strong>.
              </p>

              <ImageSection
                title={
                  <h3>
                    Seleccionar
                    <strong className='text-carissma-500'> "bhmenu"</strong>.
                  </h3>
                }
                src={hbMenu}
              />
              <ImageSection
                title={
                  <h3>
                    Seleccionar
                    <strong className='text-carissma-500'> "Daybreak"</strong>.
                  </h3>
                }
                src={dayBreak}
              />

              <p className='text-pretty'>
                Ahora debes seguir los pasos mostrados en las siguientes
                imágenes:
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <ImageSection
                title={
                  <h3>
                    Seleccionar
                    <strong className='text-carissma-500'> "Install"</strong>.
                  </h3>
                }
                src={one}
              />
              <ImageSection
                title={
                  <h3>
                    Seleccionar
                    <strong className='text-carissma-500'>
                      {' '}
                      "Firmware xx.xx"
                    </strong>
                    .
                  </h3>
                }
                src={two}
              />
              <ImageSection
                title={
                  <h3>
                    Seleccionar
                    <strong className='text-carissma-500'> "Continue"</strong>.
                  </h3>
                }
                src={three}
              />
              <ImageSection
                title={
                  <h3>
                    Seleccionar
                    <strong className='text-carissma-500'>
                      {' '}
                      "Preserve settings"
                    </strong>
                    .
                  </h3>
                }
                src={four}
              />
              <ImageSection
                title={
                  <h3>
                    Seleccionar
                    <strong className='text-carissma-500'>
                      {' '}
                      "Install (FAT32 + exFAT)"
                    </strong>
                    .
                  </h3>
                }
                src={five}
              />
              <ImageSection
                title={
                  <h3>
                    Seleccionar
                    <strong className='text-carissma-500'> "Continue"</strong>.
                  </h3>
                }
                src={six}
              />
              <ImageSection
                title='Esperar a que termine de actualizar.'
                src={seven}
              />
              <ImageSection
                title={
                  <h3>
                    Seleccionar
                    <strong className='text-carissma-500'> "Reboot"</strong>.
                  </h3>
                }
                src={eight}
              />
            </div>
          </div>
        </TimeLineItem>
        <TimeLineItem position={4}>
          <div className='flex flex-col gap-8'>
            <h3 className='text-lg'>Últimos Pasos:</h3>
            <div className='flex-col gap-6 md:flex'>
              <p className='text-pretty'>
                Ahora, volvemos a entrar al modo liberado para confirmar la
                versión de la consola. Si todo resultó como se esperaba y quedó
                actualizado, podrás entrar al modo normal o stock y actualizar
                normalmente el modo legal.😎
              </p>
            </div>
          </div>
        </TimeLineItem>
      </TimeLineContainer>
    </section>
  )
}

export default Update
