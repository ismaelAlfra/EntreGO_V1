import Home from './EntreGO';
import CadEntre from './CadEntrega';
import Login from './Login';
import Status from './Status';
import Welcome from './Welcome';

import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

const Routes = createAppContainer(
    createStackNavigator({
        Home: Home,
        CadEntre: CadEntre,
        Login: Login,
        Status: Status,
        Welcome: Welcome,
    },
    {initialRouteName: 'Home'})
);

export default Routes;
