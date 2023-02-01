import { Stack, Text, Icon, Heading, useMediaQuery } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { BsEmojiHeartEyes, BsBoxSeam } from 'react-icons/bs';
import { MdOutlineCrueltyFree, MdOutlineWaterDrop } from 'react-icons/md';
import FMC_Component from '../animations/defaults';

const TextWithIcons: React.FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 480px)');

  if (isMobile) {
    return (
      <Stack
        padding='80px'
        justify='flex-start'
        align='center'
        spacing='56px'
        overflow='hidden'
        background='#313C4E'
      >
        <Heading
          fontFamily='Marcellus'
          lineHeight='1.4'
          fontWeight='regular'
          fontSize='32px'
          color='brand.Cream'
          textAlign='center'
        >
          Stellar Reasons to Switch to ASTRA
        </Heading>
        <Stack direction={['row', 'row', 'column']}>
          <FMC_Component
            display='flex'
            initial={{ transform: 'translateX(-500px)' }}
            animate={{ transform: 'translateX(1200px)' }}
            exit={{ opacity: 0, transform: 'translateX(-500px)' }}
            // @ts-ignore
            transition={{ duration: 12.5, ease: 'linear', repeat: Infinity }}
            direction='row'
            justify='center'
            align='flex-start'
            spacing='104px'
          >
            <Stack mx='2rem' w='152px' justify='center' align='center'>
              <Stack
                padding='14px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon
                  as={MdOutlineWaterDrop}
                  h='20px'
                  w='20px'
                  color='brand.Cream'
                />
              </Stack>
              <Text
                fontFamily='Poppins'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                INNOVATIVE INGREDIENTS
              </Text>
            </Stack>
            <Stack mx='2rem' w='152px' justify='center' align='center'>
              <Stack
                padding='16px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon as={BsEmojiHeartEyes} fill='brand.Cream' />
              </Stack>
              <Text
                fontFamily='Poppins'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                DERMATOLOGIST TRUSTED
              </Text>
            </Stack>
            <Stack mx='2rem' w='152px' justify='center' align='center'>
              <Stack
                padding='16px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon as={BsBoxSeam} fill='brand.Cream' />
              </Stack>
              <Text
                fontFamily='Poppins'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                ECO-CONCIOUS PACKAGING
              </Text>
            </Stack>
            <Stack mx='2rem' w='152px' justify='center' align='center'>
              <Stack
                padding='16px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon as={MdOutlineCrueltyFree} fill='brand.Cream' />
              </Stack>
              <Text
                fontFamily='Poppins'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                CRUELTY FREE ALWAYS
              </Text>
            </Stack>
          </FMC_Component>
          <FMC_Component
            display='flex'
            initial={{ transform: 'translateX(-1100px)' }}
            animate={{ transform: 'translateX(600px)' }}
            // @ts-ignore
            transition={{
              duration: 12.5,
              ease: 'linear',
              delay: 8.25,
              repeat: Infinity
            }}
            direction='row'
            justify='center'
            align='flex-start'
            spacing='104px'
          >
            <Stack mx='2rem' w='152px' justify='center' align='center'>
              <Stack
                padding='14px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon
                  as={MdOutlineWaterDrop}
                  h='20px'
                  w='20px'
                  color='brand.Cream'
                />
              </Stack>
              <Text
                fontFamily='Poppins'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                INNOVATIVE INGREDIENTS
              </Text>
            </Stack>
            <Stack mx='2rem' w='152px' justify='center' align='center'>
              <Stack
                padding='16px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon as={BsEmojiHeartEyes} fill='brand.Cream' />
              </Stack>
              <Text
                fontFamily='Poppins'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                DERMATOLOGIST TRUSTED
              </Text>
            </Stack>
            <Stack mx='2rem' w='152px' justify='center' align='center'>
              <Stack
                padding='16px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon as={BsBoxSeam} fill='brand.Cream' />
              </Stack>
              <Text
                fontFamily='Poppins'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                ECO-CONCIOUS PACKAGING
              </Text>
            </Stack>
            <Stack mx='2rem' w='152px' justify='center' align='center'>
              <Stack
                w='50px'
                padding='16px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon as={MdOutlineCrueltyFree} fill='brand.Cream' />
              </Stack>
              <Text
                fontFamily='Poppins'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                CRUELTY FREE ALWAYS
              </Text>
            </Stack>
          </FMC_Component>
        </Stack>
      </Stack>
    );
  } else {
    return (
      <Stack
        padding={['40px', '80px']}
        justify='center'
        align='center'
        overflow='hidden'
        background='#313C4E'
      >
        <Heading
          fontFamily='Marcellus'
          lineHeight='1.4'
          fontWeight='regular'
          fontSize='32px'
          color='brand.Cream'
          textAlign='center'
          mb='56px'
        >
          Stellar Reasons to Switch to ASTRA
        </Heading>
        <Stack direction={['row', 'row', 'column']} spacing='56px'>
          <Stack
            direction={['column', 'column', 'row']}
            justify='center'
            align='center'
            spacing='32px'
          >
            <Stack w='200px' justify='center' align='center'>
              <Stack
                padding='14px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon
                  as={MdOutlineWaterDrop}
                  h='20px'
                  w='20px'
                  color='brand.Cream'
                />
              </Stack>
              <Text
                fontFamily='Poppins'
                mx='8px'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                INNOVATIVE INGREDIENTS
              </Text>
            </Stack>
            <Stack w='200px' justify='center' align='center'>
              <Stack
                padding='16px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon as={BsEmojiHeartEyes} fill='brand.Cream' />
              </Stack>
              <Text
                fontFamily='Poppins'
                mx='8px'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                DERMATOLOGIST TRUSTED
              </Text>
            </Stack>
            <Stack w='200px' justify='center' align='center'>
              <Stack
                padding='16px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon as={BsBoxSeam} fill='brand.Cream' />
              </Stack>
              <Text
                fontFamily='Poppins'
                mx='8px'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                ECO-CONCIOUS PACKAGING
              </Text>
            </Stack>
            <Stack w='200px' justify='center' align='center'>
              <Stack
                padding='16px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon as={MdOutlineCrueltyFree} fill='brand.Cream' />
              </Stack>
              <Text
                fontFamily='Poppins'
                mx='8px'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                CRUELTY FREE ALWAYS
              </Text>
            </Stack>
          </Stack>
          <Stack
            direction={['column', 'column', 'row']}
            justify='center'
            align='center'
            spacing='32px'
          >
            <Stack w='200px' justify='center' align='center'>
              <Stack
                padding='14px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon
                  as={MdOutlineWaterDrop}
                  h='20px'
                  w='20px'
                  color='brand.Cream'
                />
              </Stack>
              <Text
                fontFamily='Poppins'
                mx='8px'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                INNOVATIVE INGREDIENTS
              </Text>
            </Stack>
            <Stack w='200px' justify='center' align='center'>
              <Stack
                padding='16px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon as={BsEmojiHeartEyes} fill='brand.Cream' />
              </Stack>
              <Text
                fontFamily='Poppins'
                mx='8px'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                DERMATOLOGIST TRUSTED
              </Text>
            </Stack>
            <Stack w='200px' justify='center' align='center'>
              <Stack
                padding='16px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                w='50px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon as={BsBoxSeam} fill='brand.Cream' />
              </Stack>
              <Text
                fontFamily='Poppins'
                mx='8px'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                ECO-CONCIOUS PACKAGING
              </Text>
            </Stack>
            <Stack w='200px' justify='center' align='center'>
              <Stack
                w='50px'
                padding='16px'
                borderRadius='64px'
                direction='row'
                justify='center'
                align='center'
                spacing='10px'
                borderColor='brand.Peri'
                mb='3rem'
                borderStartWidth='1px'
                borderEndWidth='1px'
                borderTopWidth='1px'
                borderBottomWidth='1px'
              >
                <Icon as={MdOutlineCrueltyFree} fill='brand.Cream' />
              </Stack>
              <Text
                fontFamily='Poppins'
                px='8px'
                fontWeight='bold'
                fontSize='14px'
                letterSpacing='0.24em'
                color='brand.Mint'
                textAlign='center'
              >
                CRUELTY FREE ALWAYS
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    );
  }
};

export default TextWithIcons;
