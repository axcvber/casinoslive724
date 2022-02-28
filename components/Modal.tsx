import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Grow from '@mui/material/Grow'
import { TransitionProps } from '@mui/material/transitions'
import { Box } from '@mui/material'
import { GrClose } from 'react-icons/gr'
import { VscChromeClose } from 'react-icons/vsc'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Grow ref={ref} {...props} />
})

interface IModal {
  open: boolean
  onClose: () => void
  title?: string
  subtitle?: string
  children: React.ReactChild
  disableGutters?: boolean
  width?: string
  isClosingOverlay?: boolean
}

const Modal: React.FC<IModal> = ({
  open,
  onClose,
  title,
  subtitle,
  children,
  disableGutters,
  width,
  isClosingOverlay,
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={isClosingOverlay ? onClose : () => {}}
      aria-describedby='alert-dialog-slide-description'
      maxWidth={'md'}
      PaperProps={{
        sx: {
          width: width || '100%',
          overflowY: 'visible',
          backgroundImage: 'none',
          borderRadius: '10px',
          // width: '320px',
          // bgcolor: 'primary.dark',
        },
      }}
    >
      <Box
        component={'span'}
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: -30,
          right: -30,
          transform: 'rotate(0deg)',
          transition: 'transform ease .3s',
          cursor: 'pointer',
          '&:hover': {
            transform: 'rotate(180deg)',
          },
        }}
      >
        <VscChromeClose fontSize={28} />
      </Box>
      {title && <DialogTitle sx={{ textTransform: 'uppercase' }}>{title}</DialogTitle>}

      <DialogContent sx={{ padding: disableGutters ? 0 : '20px 24px' }}>
        {subtitle && (
          <DialogContentText sx={{ pb: 1, fontSize: 14, color: 'gray' }} id='alert-dialog-slide-description'>
            {subtitle}
          </DialogContentText>
        )}
        {children}
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
      </DialogActions> */}
    </Dialog>
  )
}

export default Modal
