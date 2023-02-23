import React, { useEffect, useState } from 'react';
import {
  Button,
  Icon,
  Flex,
  Heading,
  Input,
  InputGroup,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useNavigate } from 'react-router';

const LoginRegister: React.FC = () => {
  const [formType, setFormType] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleFormType = (formType: string) => {
    setError('');
    setFormType(formType);
  };

  const handleRegisterSubmit = () => {
    const fnInput = (document.getElementById('reg-fn')! as HTMLInputElement)
      .value;
    const lnInput = (document.getElementById('reg-ln')! as HTMLInputElement)
      .value;
    const emailInput = (
      document.getElementById('reg-email')! as HTMLInputElement
    ).value;
    const unInput = (document.getElementById('reg-un')! as HTMLInputElement)
      .value;
    const password = (document.getElementById('reg-pw')! as HTMLInputElement)
      .value;
    const confirmPassword = (
      document.getElementById('reg-pw-confirm')! as HTMLInputElement
    ).value;

    if (!fnInput.length) return setError('Enter your first name');
    if (!lnInput.length) return setError('Enter your last name');
    if (!password.length) return setError('Enter your last name');
    if (!emailInput.length) return setError('Enter your Email');
    if (!unInput.length) return setError('Enter a username');
    if (unInput.length < 6)
      return setError('Enter a username between 6 & 18 characters');
    if (password.length < 8) {
      return setError('Enter a password between 8 & 24 characters');
    }
    if (!emailInput.includes('.') || !emailInput.includes('@')) {
      return setError('Enter a valid Email');
    }

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    if (!error.length) {
      setTimeout(() => {
        setError('Success! One moment...');
        setFormType('success');
      }, 1000);
    }
  };

  const handleLoginSubmit = () => {
    const username = (document.getElementById('log-un')! as HTMLInputElement)
      .value;
    const password = (document.getElementById('log-pw')! as HTMLInputElement)
      .value;

    if (username.length < 6) {
      return setError('Enter a valid username');
    }

    if (password.length < 8) {
      return setError('Enter a valid password');
    }

    if (!error.length) {
      setError('Success! Please wait...');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 127,
      left: 0,
      behavior: 'smooth'
    });
  }, [formType]);

  if (formType === 'success') {
    return (
      <Flex
        minW='100vw'
        minH={['', '', '100vh']}
        align='center'
        justify='center'
      >
        <Stack
          bgColor='brand.Cream'
          w='552px'
          p={['2.5rem', '5rem']}
          gap='2.5rem'
          align='center'
        >
          <Heading
            fontSize='24px'
            fontWeight='400'
            fontFamily='Marcellus'
            textAlign='center'
          >
            Success! Welcome to ASTRA.
          </Heading>

          <Text fontFamily='Poppins' textAlign='center'>
            Check your inbox for an email confirmation to finish setting up your
            account.
          </Text>
          <Stack align='center'>
            <Button
              variant='brandPrimary'
              w='6rem'
              onClick={() => handleFormType('login')}
            >
              Log In
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }

  if (formType === 'register') {
    return (
      <Flex
        minW='100vw'
        minH={['', '', '100vh']}
        align='center'
        justify='center'
      >
        <Stack
          bgColor='brand.Cream'
          w='552px'
          p='5rem'
          gap='2.5rem'
          align='center'
        >
          <Heading
            fontSize='24px'
            fontWeight='400'
            fontFamily='Marcellus'
            textAlign='center'
          >
            Create An Account
          </Heading>
          <Stack gap='1.5rem' fontFamily='Poppins'>
            <Flex gap='1.5rem' direction={['column', 'column', 'row']}>
              <Input
                id='reg-fn'
                className='reg-input'
                _focus={{ borderColor: 'brand.Lavender' }}
                _hover={{ borderColor: 'UI.3' }}
                borderColor='brand.Charcoal'
                placeholder='First Name'
                onFocus={error ? () => setError('') : undefined}
              />
              <Input
                id='reg-ln'
                className='reg-input'
                _focus={{ borderColor: 'brand.Lavender' }}
                _hover={{ borderColor: 'UI.3' }}
                borderColor='brand.Charcoal'
                placeholder='Last Name'
                onFocus={error ? () => setError('') : undefined}
              />
            </Flex>
            <Input
              id='reg-email'
              className='reg-input'
              _focus={{ borderColor: 'brand.Lavender' }}
              _hover={{ borderColor: 'UI.3' }}
              borderColor='brand.Charcoal'
              placeholder='Email'
              onFocus={error ? () => setError('') : undefined}
            />
            <Input
              id='reg-un'
              className='reg-input'
              _focus={{ borderColor: 'brand.Lavender' }}
              _hover={{ borderColor: 'UI.3' }}
              maxLength={18}
              borderColor='brand.Charcoal'
              placeholder='Create Username'
              onFocus={error ? () => setError('') : undefined}
            />
            <InputGroup pos='relative'>
              <Input
                id='reg-pw'
                className='reg-input'
                _focus={{ borderColor: 'brand.Lavender' }}
                _hover={{ borderColor: 'UI.3' }}
                maxLength={24}
                type={showPassword ? 'text' : 'password'}
                borderColor='brand.Charcoal'
                placeholder='Create Password'
                onFocus={error ? () => setError('') : undefined}
              />

              <Icon
                _hover={{ color: 'brand.Lavender' }}
                cursor='pointer'
                pos='absolute'
                top='12px'
                right='18px'
                color='brand.Charcoal'
                fontSize='16px'
                as={showPassword ? BsEyeSlash : BsEye}
                onClick={() => setShowPassword((prev) => !prev)}
                zIndex={5}
              />
            </InputGroup>
            <InputGroup pos='relative'>
              <Input
                id='reg-pw-confirm'
                className='reg-input'
                _focus={{ borderColor: 'brand.Lavender' }}
                _hover={{ borderColor: 'UI.3' }}
                maxLength={24}
                type={showPassword ? 'text' : 'password'}
                borderColor='brand.Charcoal'
                placeholder='Confirm Password'
                onFocus={error ? () => setError('') : undefined}
              />
              <Icon
                _hover={{ color: 'brand.Lavender' }}
                cursor='pointer'
                pos='absolute'
                top='12px'
                right='18px'
                color='brand.Charcoal'
                fontSize='16px'
                as={showPassword ? BsEyeSlash : BsEye}
                onClick={() => setShowPassword((prev) => !prev)}
                zIndex={5}
              />
            </InputGroup>
          </Stack>
          <Text fontFamily='Poppins' textAlign='center'>
            Already have an account?{' '}
            <Link textDecor='underline' onClick={() => handleFormType('login')}>
              Log in.
            </Link>
          </Text>
          <Stack align='center'>
            {error && (
              <Text textAlign='center' fontFamily='Poppins'>
                {error}
              </Text>
            )}
            <Button
              _disabled={{ bgColor: 'UI.3', cursor: 'none' }}
              _hover={
                error && error.length
                  ? { bgColor: 'UI.3' }
                  : { bgColor: 'brand.Charcoal' }
              }
              isDisabled={error && error.length ? true : false}
              variant='brandPrimary'
              w='11rem'
              onClick={handleRegisterSubmit}
            >
              Create Account
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  } else {
    return (
      <Flex
        minW='100vw'
        minH={['', '', '100vh']}
        align='center'
        justify='center'
      >
        <Stack
          bgColor='brand.Cream'
          w='552px'
          p='5rem'
          gap='2.5rem'
          align='center'
        >
          <Heading
            fontSize='24px'
            fontWeight='400'
            fontFamily='Marcellus'
            textAlign='center'
          >
            Login
          </Heading>
          <Stack w='100%' gap='1.5rem' fontFamily='Poppins'>
            <Input
              id='log-un'
              className='reg-input'
              _focus={{ borderColor: 'brand.Lavender' }}
              _hover={{ borderColor: 'UI.3' }}
              maxLength={18}
              borderColor='brand.Charcoal'
              placeholder='Username'
              onFocus={error ? () => setError('') : undefined}
            />
            <InputGroup pos='relative'>
              <Input
                id='log-pw'
                className='log-input'
                _focus={{ borderColor: 'brand.Lavender' }}
                _hover={{ borderColor: 'UI.3' }}
                maxLength={24}
                type={showPassword ? 'text' : 'password'}
                borderColor='brand.Charcoal'
                placeholder='Password'
                onFocus={error ? () => setError('') : undefined}
              />

              <Icon
                _hover={{ color: 'brand.Lavender' }}
                cursor='pointer'
                pos='absolute'
                top='12px'
                right='18px'
                color='brand.Charcoal'
                fontSize='16px'
                as={showPassword ? BsEyeSlash : BsEye}
                onClick={() => setShowPassword((prev) => !prev)}
                zIndex={5}
              />
            </InputGroup>
          </Stack>
          <Text fontFamily='Poppins' textAlign='center'>
            Don't have an account?{' '}
            <Link
              textDecor='underline'
              onClick={() => handleFormType('register')}
            >
              Sign up.
            </Link>
          </Text>
          <Stack align='center'>
            {error && (
              <Text textAlign='center' fontFamily='Poppins'>
                {error}
              </Text>
            )}
            <Button
              _disabled={{ bgColor: 'UI.3', cursor: 'none' }}
              _hover={
                error && error.length
                  ? { bgColor: 'UI.3' }
                  : { bgColor: 'brand.Charcoal' }
              }
              isDisabled={error && error.length ? true : false}
              variant='brandPrimary'
              w='6rem'
              onClick={handleLoginSubmit}
            >
              Log In
            </Button>
          </Stack>
        </Stack>
      </Flex>
    );
  }
};

export default LoginRegister;
