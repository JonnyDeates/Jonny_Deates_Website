import React from 'react';
import {Route, Switch} from 'react-router-dom'
import TopNav from './components/TopNav/TopNav'
import Chibi from './components/Chibi/Chibi'
import './App.css';
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProjectList from "./components/ProjectList/ProjectList";


// interface State {
//     id: number;
//     age: number;
// }

const App: React.FC = () => {
    // const [state, setState] = useState<State[]>([]);
    const links =
        [{to: '/', name: 'About'}, {to: '/projects', name: 'Projects'}, {to: '/contact', name: 'Contact'}];

    return (
        <div className="App">
            <Route render={(routeProps) => <TopNav currentActive={routeProps.location} links={links}/>}/>
            <Switch>
                <Route path={'/contact'} component={() => <Chibi isWaving={false}/>}/>
                <Route path={'/projects'} component={() => <Chibi isWaving={false}/>}/>
                <Route exact path={'/'} component={() => <Chibi isWaving={true}/>}/>
            </Switch>
            <Switch>
                <Route path={'/contact'} component={() => <Header height={'50vh'} parallaxSpeed={0.8}/>}/>
                <Route path={'/projects'} component={() => <Header height={'50vh'} parallaxSpeed={0.5}/>}/>
                <Route exact path={'/'} component={() => <Header height={'80vh'} parallaxSpeed={0.3}/>}/>
            </Switch>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/projects'} component={ProjectList}/>
                <Route path={'/contact'} component={Contact}/>
            </Switch>
            <Footer/>
        </div>
    );
};

export default App;
