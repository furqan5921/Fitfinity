import { Alert, AlertIcon } from '@chakra-ui/alert';
import { Text } from '@chakra-ui/layout';
import React from 'react';

const SignupSuccess = ({text}) => {
    return (
        <Alert status='success' style={{ height: '20px', borderRadius: '8px' }}>
            <AlertIcon />
            <Text fontSize='xs'>
                {text}
            </Text>
        </Alert>
    );
}

export default SignupSuccess;
