import {
  Stack,
  Image,
  Text,
  Flex,
  Link,
  Menu,
  MenuButton,
  Icon,
  Center,
  useMediaQuery,
  MenuItem,
  MenuList,
  Tabs,
  Tab,
  Box
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { ProductMenuProps } from '../models/Props';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import heroBackdrop from '../assets/Products/products-hero-backdrop.png';
import watermarkTR from '../assets/Products/products-hero-backsplash-tr.png';
import watermarkBL from '../assets/Products/products-hero-backsplash-bl.png';
import { ShopContext } from '../context/ShopContext';

const ProductMenu: React.FC<ProductMenuProps> = ({
  backdrop = heroBackdrop,
  hero,
  fallback,
  heading,
  categoryNames,
  menuItems,
  showMenuBar = false
}) => {
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isLessThan1280] = useMediaQuery(['(max-width: 1280px)']);
  const [dynamicMenuItems, setDynamicMenuItems] = useState(menuItems?.sort());
  const [dynamicCategoryNames, setDynamicCategoryNames] = useState(
    categoryNames?.sort()
  );
  const { sortProducts, fetchCollectionByHandle } =
    useContext<any>(ShopContext);

  const handleUpdateFilterMenu = (option: string, isDropdown = true) => {
    if (isSortMenuOpen) setIsSortMenuOpen(false);
    if (!dynamicCategoryNames) return;
    if (isDropdown) {
      const selectionIndex = dynamicCategoryNames.indexOf(option);
      const selection1 = dynamicCategoryNames
        ?.slice(selectionIndex, selectionIndex + 1)
        .pop();
      const selection2 = dynamicCategoryNames
        .filter((_name) => _name !== option)
        .sort();
      setDynamicCategoryNames([selection1!, ...selection2]);
    }    
    fetchCollectionByHandle(option.toLowerCase());
    setIsFilterMenuOpen((prev) => !prev);
  };

  const handleUpdateSortMenu = (option: string) => {
    if (isFilterMenuOpen) setIsFilterMenuOpen(false);
    if (!dynamicMenuItems) return;
    const selectionIndex = dynamicMenuItems.indexOf(option);

    const selection1 = dynamicMenuItems
      .slice(selectionIndex, selectionIndex + 1)
      .pop();
    const selection2 = dynamicMenuItems
      .filter((item) => item !== option)
      .sort();
    setDynamicMenuItems([selection1!, ...selection2]);
    setIsSortMenuOpen((prev) => !prev);
    sortProducts(selection1);
  };

  return (
    <>
      <Image
        src={backdrop}
        pos='absolute'
        w='100vw'
        h={['95px', '95px', '95px', '115px', '140px', '190px']}
        zIndex={-2}
      />
      <Stack
        pos='relative'
        p={['4rem 1rem', '4rem 1rem', '4rem 1rem', '4rem']}
        h='fit-content'
        alignItems='center'
        justifyContent='center'
      >
        <Image
          src={watermarkTR}
          pos='absolute'
          w='33%'
          h='40%'
          right='0'
          top='0%'
          zIndex={-1}
        />
        {showMenuBar && (
          <Image
            src={watermarkBL}
            pos='absolute'
            left={['30%', '30%', '0%']}
            bottom={['30%', '30%', '15%']}
            zIndex={-1}
          />
        )}
        <Text
          pointerEvents='none'
          pos='absolute'
          fontFamily='Marcellus'
          fontSize={['32px', '40px', '48px', '56px']}
          top={['20px', '6px']}
          textShadow='1px 1px 3px #C4B1A8'
          color='UI.6'
        >
          {heading}
        </Text>
        <Image
          pb='56px'
          fallback={<Image pb='56px' src={fallback} w='80%' />}
          fallbackSrc={fallback}
          src={hero}
          w={['100%', '90%', '80%']}
        />
        {showMenuBar && (
          <Flex
            w='100vw'
            justifyContent={dynamicCategoryNames ? 'space-between' : 'center'}
            alignItems='center'
            bgColor='brand.Cream'
            fontFamily='Poppins'
            h={isLessThan1280 && dynamicCategoryNames ? '108px' : '64px'}
          >
            {dynamicCategoryNames && (
              <Flex
                direction={['column', 'column', 'row']}
                justifyContent={['center', 'center', 'space-between']}
                alignItems={['flex-start', 'flex-start', 'center']}
                gap={['16px', '16px', '32px']}
                pl={['20px', '40px', '80px', '80px', '80px', '160px']}
                onMouseLeave={() => setIsFilterMenuOpen(false)}
              >
                <Text color='UI.2'>Filter By</Text>
                {isLessThan1280 ? (
                  <Menu isLazy isOpen={isFilterMenuOpen}>
                    <MenuButton
                      onClick={() => setIsFilterMenuOpen((prev) => !prev)}
                    >
                      <Flex
                        w={['150px', '150px', '165px', '190px']}
                        border='1px solid'
                        borderColor='UI.3'
                        borderRadius='2px'
                        boxSizing='border-box'
                        alignItems='center'
                        p='2px 4px 2px 8px'
                        justify='space-between'
                      >
                        <Text color='UI.1' fontSize='14px'>
                          {dynamicCategoryNames[0]}
                        </Text>
                        <Center>
                          <Icon as={BiChevronDown} fontSize='24px'></Icon>
                        </Center>
                      </Flex>
                    </MenuButton>
                    <MenuList
                      minW='150px'
                      w={['150px', '150px', '165px', '190px']}
                      p='.5rem 1rem'
                      top={['-8px', '-7px', '-8px']}
                      pos='absolute'
                    >
                      {dynamicCategoryNames.map((_name, i) => {
                        if (i < 1) return;
                        return (
                          <MenuItem
                            color='UI.1'
                            fontSize='14px'
                            key={i}
                            ml='0'
                            pl='0'
                            onClick={() => handleUpdateFilterMenu(_name)}
                          >
                            {_name}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </Menu>
                ) : (
                  <Flex as={Tabs} defaultIndex={dynamicCategoryNames.length}>
                    {dynamicCategoryNames.map((_name, i) => {
                      return (
                        <Tab
                          _selected={{ borderColor: 'brand.Lavender' }}
                          color='UI.1'
                          key={i}
                          onClick={() => handleUpdateFilterMenu(_name, false)}
                        >
                          {_name}
                        </Tab>
                      );
                    })}
                    <Tab
                      _selected={{ borderColor: 'brand.Lavender' }}
                      color='UI.1'
                      onClick={() => handleUpdateFilterMenu('skincare-products', false)}
                    >
                      Show All
                    </Tab>
                  </Flex>
                )}
              </Flex>
            )}

            <Flex
              direction={['column', 'column', 'row']}
              pr={['20px', '20px', '80px', '80px', '80px', '160px']}
              gap={['16px', '16px', '32px']}
              justifyContent={['center', 'center', 'space-between']}
              alignItems={['flex-start', 'flex-start', 'center']}
              pos='relative'
              onMouseLeave={() => setIsSortMenuOpen(false)}
            >
              <Text color='UI.2'>Sort By</Text>
              <Menu isLazy isOpen={isSortMenuOpen}>
                <MenuButton onClick={() => setIsSortMenuOpen((prev) => !prev)}>
                  <Flex
                    border='1px solid'
                    borderColor='UI.3'
                    borderRadius='2px'
                    boxSizing='border-box'
                    alignItems='center'
                    p='2px 4px 2px 8px'
                    justify='space-between'
                    w={['150px', '150px', '165px', '190px']}
                  >
                    <Text color='UI.1' fontSize='14px'>
                      {dynamicMenuItems && dynamicMenuItems[0]}
                    </Text>
                    <Center>
                      <Icon
                        as={isSortMenuOpen ? BiChevronUp : BiChevronDown}
                        fontSize='24px'
                      ></Icon>
                    </Center>
                  </Flex>
                </MenuButton>
                <MenuList
                  minW='150px'
                  w={['150px', '150px', '165px', '190px']}
                  p='.5rem 1rem'
                  top={['-8px', '-7px', '-8px']}
                  pos='absolute'
                >
                  {dynamicMenuItems &&
                    dynamicMenuItems.map((item, i) => {
                      if (i < 1) return;
                      return (
                        <MenuItem
                          color='UI.1'
                          fontSize='14px'
                          key={i}
                          ml='0'
                          pl='0'
                          onClick={() => handleUpdateSortMenu(item)}
                        >
                          {item}
                        </MenuItem>
                      );
                    })}
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        )}
      </Stack>
    </>
  );
};

export default ProductMenu;
