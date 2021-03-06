import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TopNav from './Components/TopNav/TopNav'
import Chibi from './Components/Chibi/Chibi'
import './App.css';
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProjectList from "./Pages/ProjectList/ProjectList";


// interface State {
//     id: number;
//     age: number;
// }

const App: React.FC = () => {
    // const [state, setState] = useState<State[]>([]);
    const links =
        [{to: '/', name: 'About'}, {to: '/projects', name: 'Projects'}, {to: '/contact', name: 'Contact'}];

    // @ts-ignore
    return (
        <Router>
            <div className="App">
                <Route render={(routeProps: any) => <TopNav currentActive={routeProps.location} links={links}/>}/>
                <Switch>
                    <Route path={'/contact'} component={() => <Chibi isWaving={false}/>}/>
                    <Route path={'/projects'} component={() => <Chibi isWaving={false}/>}/>
                    <Route path={'/'} component={() => <Chibi isWaving={true}/>}/>
                </Switch>
                <Switch>
                    <Route path={'/contact'} component={() => <Header height={'50vh'} parallaxSpeed={1.5} isShown={true}/>}/>
                    <Route path={'/projects'} component={() => <Header height={'50vh'} parallaxSpeed={2}/>}/>
                    <Route path={'/'} component={() => <Header height={'80vh'} parallaxSpeed={1.1} isShown={true}/>}/>
                </Switch>
                <Switch>
                    <Route path='/projects'><ProjectList/> </Route>
                    <Route path='/contact'><Contact/></Route>
                    <Route path='/'><Home introduction={'Hello!'}/></Route>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
