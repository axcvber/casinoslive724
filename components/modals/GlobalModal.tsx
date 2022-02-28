import React, { useState, createContext, useContext, ReactElement } from 'react'
import BonusesModal from './BonusesModal'
import ContactUsModal from './ContactUsModal'
import CouponModal from './CouponModal'
import InitialModal from './InitialModal'

// export const MODAL_TYPES = {
//   CONTACT_US_MODAL: 'CONTACT_US_MODAL',
//   INITIAL_MODAL: 'INITIAL_MODAL',
// }

export enum MODAL_TYPES {
  CONTACT_US_MODAL = 'CONTACT_US_MODAL',
  INITIAL_MODAL = 'INITIAL_MODAL',
  BONUSES_MODAL = 'BONUSES_MODAL',
  COUPON_MODAL = 'COUPON_MODAL',
}

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.CONTACT_US_MODAL]: ContactUsModal,
  [MODAL_TYPES.INITIAL_MODAL]: InitialModal,
  [MODAL_TYPES.BONUSES_MODAL]: BonusesModal,
  [MODAL_TYPES.COUPON_MODAL]: CouponModal,
}

interface IStore {
  modalType: string
  modalProps: any
  isOpen: boolean
}

type GlobalModalContext = {
  showModal: (modalType: string, modalProps?: any) => void
  hideModal: () => void
  store: IStore
}

const initialState: GlobalModalContext = {
  showModal: () => {},
  hideModal: () => {},
  store: {
    modalType: '',
    modalProps: null,
    isOpen: false,
  },
}

const GlobalModalContext = createContext(initialState)
export const useGlobalModalContext = () => useContext(GlobalModalContext)

export const GlobalModal: React.FC<{}> = ({ children }) => {
  const [store, setStore] = useState<IStore>(initialState.store)
  const { modalType, modalProps } = store || {}

  const showModal = (modalType: string, modalProps: any = {}) => {
    setStore({
      ...store,
      modalType,
      modalProps,
      isOpen: true,
    })
  }

  const hideModal = () => {
    setStore({
      ...store,
      // modalType: null,
      // modalProps: {},
      isOpen: false,
    })
  }

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType]
    if (!modalType || !ModalComponent) {
      return null
    }
    return <ModalComponent id='global-modal' {...modalProps} />
  }

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  )
}
