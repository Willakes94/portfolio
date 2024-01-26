import { NavigationContainer } from '@react-navigation/native'

// contexto

import { BottonTabsRoutes} from './botom-tabs.routes';


// caixa de contextos
export function Routes() {
  return (
    <NavigationContainer>
      <BottonTabsRoutes/>
    </NavigationContainer >
  )
}