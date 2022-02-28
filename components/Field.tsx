import React, { ReactElement } from 'react'
import { Controller } from 'react-hook-form'
import { styled } from '@mui/material/styles'
import { Box, IconButton, InputAdornment, TextField } from '@mui/material'

interface IField {
  control: any
  name: string
  label: string
  icon: ReactElement
  type?: string
  color?: 'primary' | 'secondary'
}

export const Field: React.FC<IField> = ({ control, name, label, type = 'text', color = 'primary', icon }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({ field, fieldState: { error } }) => (
        <Input
          color={color}
          size='small'
          label={
            <Box
              display='flex'
              alignItems={'center'}
              sx={{
                'svg': {
                  fontSize: 20,
                  marginRight: '5px',
                },
              }}
            >
              {icon}
              {label}
            </Box>
          }
          variant='outlined'
          helperText={error?.message}
          fullWidth
          error={!!error?.message}
          type={type}
          {...field}
        />
      )}
    />
  )
}

const Input = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'isOwn',
})<{ color?: 'primary' | 'secondary' }>(({ theme, color }) => ({
  margin: '8px 0',

  '.MuiOutlinedInput-root': {
    background: '#141B3C',
    position: 'relative',
    '&:hover': {
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.grey[800],
      },
    },
  },

  '.Mui-error': {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: `${theme.palette.error.light} !important`,
    },
    '&:hover': {
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.error.light,
      },
    },
    '&.MuiInputLabel-root': {
      color: theme.palette.error.light,
    },
    '&.Mui-focused': {
      '&.MuiOutlinedInput-root': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.error.light,
        },
      },
      '&.MuiInputLabel-root': {
        color: theme.palette.error.light,
      },
    },
  },

  '.MuiInputLabel-root': {
    color: theme.palette.grey[600],
    lineHeight: 1.3,
    fontSize: '15px',
  },

  '.MuiOutlinedInput-input': {
    color: '#fff',
    fontSize: '15px',

    '&:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 1000px ${theme.palette.background.default} inset`,
    },
  },

  '.MuiOutlinedInput-notchedOutline': {
    color: '#fff',
    borderColor: theme.palette.grey[800],
    borderWidth: '1px',
  },

  '.Mui-focused': {
    '&.MuiOutlinedInput-root': {
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    },
    '&.MuiInputLabel-root': {
      color: theme.palette.primary.main,
    },
  },

  '.MuiFormHelperText-root': {
    marginLeft: '5px',
    color: `${theme.palette.error.light} !important`,
  },
}))
