import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SideBar from './components/sidebar';
import Installation from './routes/installation';
import Usage from './routes/usage';
import UseSazaState from './routes/useSazaState';
import Dispatch from './routes/dispatch';
import AddSazaAction from './routes/addSazaAction';
import ClassComponent from './routes/classComponents';
import AddSazaStateWatcher from './routes/addSazaStateWatcher';
import AddSazaStateWatcherOptimized from './routes/optimizationAddSazaStateWatcher';
import SazaAsyncDispatch from './routes/sazaAsyncDispatch';
import LocalStorage from './routes/localstorage';
import SazaFetchData from './routes/sazaFetchData';

function App() {

  return (<BrowserRouter>
    <SideBar />
    <div className='main'>
        <Routes>
            <Route index path='/' element={<Installation />} />
            <Route index path='/installation' element={<Installation />} />
            <Route exact path='/usage' element={<Usage />} />
            <Route exact path='/use-saza-state' element={<UseSazaState />} />
            <Route exact path='/saza-dispatch' element={<Dispatch />} />
            <Route exact path='/add-saza-action' element={<AddSazaAction />} />
            <Route exact path='/class-component' element={<ClassComponent />} />
            <Route exact path='/add-saza-state-whatcher' element={<AddSazaStateWatcher />} />
            <Route exact path='/add-saza-state-whatcher-optimization' element={<AddSazaStateWatcherOptimized  />} />
            <Route exact path='/saza-async-dispatch' element={<SazaAsyncDispatch  />} />
            <Route exact path='/localStorage' element={<LocalStorage  />} />
            <Route exact path='/saza-fetch-data' element={<SazaFetchData  />} />
        </Routes>
    </div>
  </BrowserRouter>);


}

export default App;
