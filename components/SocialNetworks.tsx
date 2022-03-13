import Image from 'next/image'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from './Layout'

const SocialNetworks = () => {
  const { socialNetworks } = useGlobalContext()
  return (
    <Wrapper>
      {socialNetworks &&
        socialNetworks.map((item) => (
          <li key={item?.id}>
            <a href={item?.link} target={'_blank'} rel='noreferrer'>
              <Image
                priority
                src={item?.icon.data?.attributes?.url || ''}
                width={25}
                height={25}
                alt={item?.icon.data?.attributes?.alternativeText || ''}
              />
            </a>
          </li>
        ))}
    </Wrapper>
  )
}

const Wrapper = styled('ul')({
  display: 'flex',
  'li': {
    marginRight: '15px',
    display: 'flex',
    '&:last-child': {
      marginRight: '0',
    },
  },
})

export default SocialNetworks
