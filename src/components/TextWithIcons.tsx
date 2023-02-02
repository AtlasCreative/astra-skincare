import { Stack, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import GallerySlide from './GallerySlide';

const TextWithIcons: React.FC = () => {
  const [animation, setAnimation] = useState({
    delay: 0,
    startPoint: 0,
    endPoint: 0,
    duration: 0
  });

  const animatedElements = Math.ceil(window.innerWidth / 864) + 1;

  // set start point to off screen nearest multiple of 864
  // set end point to off screen nearest multiple of 864

  const setAnimationSpeedAndTimings = (): void => {
    console.log(animatedElements);

    const speed = 140;
    // speed in pixels per second, adjustable for future usage
    const animatedElementWidth = 864;
    // enter the total width of the element to animate
    const windowWidth = animatedElements * animatedElementWidth;
    console.log(windowWidth);

    // total width of the window + off screen elements
    const distance = animatedElements * animatedElementWidth;
    // total distance for the element to travel
    const startPoint = (-animatedElementWidth * animatedElements) / 2;
    // this will make the element be slightly off screen to the left initially
    const endPoint = startPoint + distance;

    const duration = distance / speed;
    // how long it takes to get from start to end in seconds
    const delay = animatedElementWidth / speed;

    setAnimation({ delay, startPoint, endPoint, duration });
    console.log(
      'start',
      startPoint,
      'end',
      endPoint,
      'dist',
      distance,
      'dur',
      duration,
      'del',
      delay
    );
  };

  useEffect(() => {
    setAnimationSpeedAndTimings();
  }, []);
  console.log(animatedElements);
  return (
    <Stack
      padding='80px'
      align='center'
      overflow='hidden'
      background='#313C4E'
      h='420px'
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
      <Stack pos='relative' align='center' w='fit-content' h='148px'>
        {animatedElements === 3 ? (
          <>
            <GallerySlide
              delay={0 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={1 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={2 * animation.delay}
              animationProperties={animation}
            />
          </>
        ) : animatedElements === 4 ? (
          <>
            <GallerySlide
              delay={0 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={1 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={2 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={3 * animation.delay}
              animationProperties={animation}
            />
          </>
        ) : animatedElements === 5 ? (
          <>
            <GallerySlide
              delay={0 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={1 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={2 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={3 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={4 * animation.delay}
              animationProperties={animation}
            />
          </>
        ) : (
          <>
            <GallerySlide
              delay={0 * animation.delay}
              animationProperties={animation}
            />
            <GallerySlide
              delay={1 * animation.delay}
              animationProperties={animation}
            />
          </>
        )}
      </Stack>
      {/* <GallerySlide
          delay={3 * animation.delay}
          animationProperties={animation}
        />
        <GallerySlide
          delay={4 * animation.delay}
          animationProperties={animation}
        /> */}
    </Stack>
  );
};

export default TextWithIcons;
