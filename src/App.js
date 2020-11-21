import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import{BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Form from './components/SignUp/Form';




		function App(){
			return(
				<>
				<Router>
			    		<Navbar />
				      <Switch>
						  
                        <Route path='/' exact component={Home} />
						<Route path='/Services' exact component={Services} />
						<Route path='/SignUp' exact component={Form} />
						
				       </Switch>

				</Router>
					

				</>
			);
		}
		export default App;