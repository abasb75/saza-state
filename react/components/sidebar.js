import { NavLink } from "react-router-dom";
import "./sidebar.css";

export default function SideBar(){
    return (<div className="sidebar">
        <h1>SAZA STATE</h1>
        <ul>
            <li><NavLink to={'/installation'} >Installation</NavLink></li>
            <li><NavLink to={'/usage'} >Usage</NavLink></li>
            <li><NavLink to={'/use-saza-state'} >useSazaState</NavLink></li>
            <li><NavLink to={'/saza-dispatch'} >sazaDispatch</NavLink></li>
            <li><NavLink to={'/add-saza-action'} >addSazaAction</NavLink></li>
            <li><NavLink to={'/class-component'} >Class Component</NavLink></li>
            <li><NavLink to={'/add-saza-state-whatcher'} >addSazaStateWatcher</NavLink></li>
            <li><NavLink to={'/add-saza-state-whatcher-optimization'} >addSazaStateWatcher optimization</NavLink></li>
            <li><NavLink to={'/saza-async-dispatch'} >sazaAsyncDispatch</NavLink></li>
            <li><NavLink to={'/localStorage'} >localStorage</NavLink></li>
            <li><NavLink to={'/saza-fetch-data'} >sazaFetchData</NavLink></li>

        </ul>
    </div>);
}