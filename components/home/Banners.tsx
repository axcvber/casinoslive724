import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { styled } from '@mui/material/styles'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { GrPrevious, GrNext } from 'react-icons/gr'
import { ComponentBannerGifsBannerGifs, Maybe } from '../../generated'
import 'swiper/css'
import 'swiper/css/navigation'

const Banners: React.FC<{ data: Maybe<ComponentBannerGifsBannerGifs>[] }> = ({ data }) => {
  const prevRef = React.useRef(null)
  const nextRef = React.useRef(null)
  return (
    <Box sx={{ width: '100%', position: 'relative', userSelect: 'none' }}>
      <Swiper
        style={{ width: '100%', margin: 'auto', position: 'relative' }}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        wrapperTag='ul'
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
        }}
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item?.id} tag='li'>
              <a href={item?.link} target='_blank' rel='noreferrer'>
                <Image
                  priority
                  src={item?.gif.data?.attributes?.url || ''}
                  layout='responsive'
                  width={593}
                  height={169}
                  alt={item?.gif.data?.attributes?.alternativeText || ''}
                />
              </a>
            </SwiperSlide>
          ))}

        <Arrow className='leftArrow' ref={prevRef}>
          <GrPrevious />
        </Arrow>
        <Arrow className='rightArrow' ref={nextRef}>
          <GrNext />
        </Arrow>
      </Swiper>
    </Box>
  )
}

const Arrow = styled('div')({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  cursor: 'pointer',
  background: 'rgba(0,0,0,0.7)',
  padding: '10px',
  '&.leftArrow': {
    left: 0,
  },
  '&.rightArrow': {
    right: 0,
  },
  'svg': {
    fontSize: 25,
    fill: 'red',
    'polyline': {
      stroke: '#fff',
    },
  },
  '&.swiper-button-disabled': {
    opacity: 0.4,
  },
})

export default Banners
