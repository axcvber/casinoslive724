import Image from 'next/image'
import React from 'react'
import Modal from '../Modal'
import { useGlobalModalContext } from './GlobalModal'

interface InitialModalProps {
  link: string
  img: any
}

const InitialModal: React.FC<InitialModalProps> = ({ link, img }) => {
  const { store, hideModal } = useGlobalModalContext()

  return (
    <Modal disableGutters open={store.isOpen} onClose={hideModal}>
      <div style={{ width: '100%', position: 'relative', overflow: 'hidden', borderRadius: '10px' }}>
        <a href={link} target='_blank' rel='noreferrer'>
          <Image
            placeholder='blur'
            blurDataURL={img.url}
            priority
            layout='responsive'
            width={1024}
            height={505}
            src={img.url}
            alt={img.alternativeText}
          />
        </a>
      </div>
    </Modal>
  )
}

export default InitialModal
