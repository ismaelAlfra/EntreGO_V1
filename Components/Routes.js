import Home from './EntreGO';
import CadEntrega from './CadEntrega';
import Login from './Login';
import Status from './Status';
import Welcome from './Welcome';

import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import ListarEntregas from './ListarEntregas';
import Categoria from './Categoria';
import StatusLojista from './StatusLojista';

const Routes = createAppContainer(
    createStackNavigator({
        Welcome: Welcome,
        CadEntrega: CadEntrega,
        Home: Home,
        Login: Login,
        Status: Status,
        StatusLojista: StatusLojista,
        Welcome: Welcome,
        ListarEntregas: ListarEntregas,
        Categoria: Categoria,
    },
    {initialRouteName: 'Welcome'}
    )
);

export default Routes;
