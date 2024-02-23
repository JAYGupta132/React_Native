import { View, Text } from 'react-native'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Query_Example01 from './components/Query_Example01'


const queryClient = new QueryClient()

export default function App() {
  return (
    <View>
      <QueryClientProvider client={queryClient}>
        <Query_Example01 />
      </QueryClientProvider>
    </View>
  )
}