
import Image from 'next/image'

const Bubble = ({ src, alt }) => {
  return (
    <div className="bubble w-48 h-48 rounded-full overflow-hidden text-center">
      <Image className='text-center rounded-full' src={src} alt={alt} />
    </div>
  )
}

export default Bubble