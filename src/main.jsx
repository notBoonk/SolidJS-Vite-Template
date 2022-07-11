import { render } from 'solid-js/web';

import {
    useColorMode,
    HopeProvider,
    Center,
    Heading,
    VStack,
    HStack,
} from '@hope-ui/solid';

function MyApp() {
    const { colorMode, toggleColorMode } = useColorMode();
    if (colorMode() === 'light') toggleColorMode();

    return (
        <Center>
            <div style={{margin: 0, position: 'absolute', top: '40%'}}>
                <VStack spacing={15}>
                    <HStack>
                        <Heading size="2xl">Solid</Heading>
                        <Heading size="2xl" color="$primary9">.js</Heading>
                    </HStack>
                </VStack>
            </div>
        </Center>
    );
}

function App() {
    return (
        <HopeProvider>
            <MyApp />
        </HopeProvider>
    );
}

render(() => <App />, document.getElementById('app'));