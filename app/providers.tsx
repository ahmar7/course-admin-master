"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {store} from '@/components/store/index'
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from 'react-query'
import{ Auth} from '@/components/auth/Auth'
const Providers = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 10
          }
        }
      })
    return (
        <Provider store={store()}>
          <Auth>
             <QueryClientProvider client={queryClient}>
            <CacheProvider>
                <ColorModeScript
                    initialColorMode="system"
                    key="chakra-ui-no-flash"
                    storageKey="chakra-ui-color-mode"
                />
                <ChakraProvider>{children}</ChakraProvider>
            </CacheProvider>
            </QueryClientProvider>
            </Auth>
        </Provider>
    );
}

export default Providers
