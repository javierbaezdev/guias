interface Props {
  position: number
  children: JSX.Element
}

const TimeLineItem = ({ children, position }: Props) => {
  return (
    <li className='mb-10 md:ms-8'>
      <span className='absolute -start-3 hidden h-6 w-6 items-center justify-center rounded-full bg-carissma-600 font-black ring-8 ring-carissma-800 md:flex'>
        {position}
      </span>
      <div className='relative items-center justify-between rounded-lg border  border-carissma-400 bg-cod-gray-950 p-4 shadow-sm sm:flex'>
        <span className='absolute -top-3 right-2 flex h-2 w-2 items-center justify-center rounded-full bg-carissma-600 p-3 font-black md:hidden'>
          {position}
        </span>
        {children}
      </div>
    </li>
  )
}

export default TimeLineItem
