// @ts-nocheck
import * as React from 'react';
import { Stack, Text, Button, Image, AspectRatio } from '@chakra-ui/react';

import placeholder from '../assets/astra-card-ph.png';
import FMC_Component from '../animations/defaults';
import { useInView } from 'framer-motion';

export const DailyRoutineTop: React.FC = () => {
  const imageRef = React.useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: '0% 0% -30% 0%' });

  return (
    <Stack
      id='container'
      p='64px'
      flexDir={['column', 'column', 'column', 'row']}
      justify={[
        'space-between',
        'space-between',
        'space-between',
        'space-evenly',
        'space-evenly'
      ]}
      align='center'
    >
      <Stack
        clipPath={isInView ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)'}
        ref={imageRef}
        transition='clip-path 1s ease'
        pos='relative'
        alignItems='center'
        p={['0px', '0px', '32px']}
        w={['100%', '100%', '100%', '50%']}
        h={['80%', '80%', '80%', '80%', '100%']}
      >
        <Image
          src={placeholder}
          ml={['0rem', '0rem', '0rem', '6rem']}
          w={['100%', '100%', '100%', '60%']}
          maxH='400px'
          objectFit='cover'
          border='1px solid black'
        />
        <Image
          src={placeholder}
          pos='absolute'
          bottom={['8%', '6%', '10%', '0%']}
          right={['10%', '10%', '10%', '15%']}
          borderRadius='50%'
          h={['120px', '160px', '200px', '160px', '204px']}
          w={['120px', '160px', '200px', '160px', '204px']}
          objectFit='cover'
        />
      </Stack>
      <Stack
        justify='flex-start'
        align='flex-start'
        spacing='32px'
        width={['90%', '90%', '90%', '50%']}
        h='100%'
        pl={['0rem', '5rem']}
        pt={['0px', '0px', '0px', '56px']}
        maxWidth='100%'
      >
        <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
          <Text
            fontFamily='Marcellus'
            lineHeight='1.2'
            fontWeight='regular'
            fontSize={['32px', '40px']}
            textTransform='capitalize'
            color='UI.1'
            mt='1rem'
            alignSelf='stretch'
          >
            build a daily routine
          </Text>
        </Stack>
        <Text
          fontFamily='Poppins'
          lineHeight='1.5'
          fontWeight='regular'
          fontSize='18px'
          color='UI.2'
          opacity='0.8'
          alignSelf='stretch'
          w={['100%', '540px']}
        >
          It might be very tempting to rush into expanding your routine. Maybe
          you'll hope that adding more products will help improve your skin
          quicker. But make sure the foundation of your routine is strong before
          moving on to any targeted treatments!
        </Text>
      </Stack>
    </Stack>
  );
};

export default DailyRoutineTop;
