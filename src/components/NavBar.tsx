import * as React from 'react';
import * as Chakra from '@chakra-ui/react';
import * as ReactIcons from 'react-icons/md';
import { ShopContext } from '../context/shopContext';
import { useNavigate } from 'react-router';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { openCart, openMenu, checkout } = React.useContext<any>(ShopContext);

  const getCartItemQty = () => {
    let cartItemQty = 0;
    checkout.lineItems?.forEach((item: any) => {
      if (cartItemQty >= 9) return;
      cartItemQty += item.quantity;
    });
    if (cartItemQty === 9) {
      return cartItemQty.toString();
    } else if (cartItemQty > 9) {
      return '9+';
    } else {
      return cartItemQty.toString();
    }
  };

  React.useEffect(() => {
    getCartItemQty();
  }, [openCart, checkout, getCartItemQty]);

  return (
    <Chakra.Flex
      backgroundColor='#FFA8E2'
      justifyContent='space-between'
      alignItems='center'
      padding='1rem'
    >
      <Chakra.Icon
        fill='white'
        w={30}
        h={30}
        cursor='pointer'
        as={ReactIcons.MdMenu}
        onClick={() => openMenu()}
      />
      <Chakra.Image
        w={80}
        h={70}
        cursor='pointer'
        src='https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Logologo_1.svg?v=1610055540'
        onClick={() => navigate('/')}
      />
      <Chakra.Box>
        <Chakra.Badge
          backgroundColor='#FF38BD'
          borderRadius='50%'
          h={22}
          w={22}
          p='1px'
          textAlign='center'
        >
          {getCartItemQty()}
        </Chakra.Badge>
        <Chakra.Icon
          fill='white'
          w={30}
          h={30}
          cursor='pointer'
          as={ReactIcons.MdShoppingBasket}
          onClick={() => openCart()}
        />
      </Chakra.Box>
    </Chakra.Flex>
  );
};

export default NavBar;
