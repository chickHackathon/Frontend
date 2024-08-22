import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Camera from './component/Camera';
import Onboarding from './component/Onboarding';
import Tabs from './component/Tabs';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/camera" component={Camera} />
                    <Route path="/onboarding" component={Onboarding} />
                    <Route path="/maptest" componnent={MapTest}
                </Switch>
                <Tabs />
            </div>
        </Router>
    );
};

export default App;