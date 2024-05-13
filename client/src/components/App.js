import './App.css';
 
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
 
/** import components */
import Main from './Main.js';
import Quiz from './Quiz.js';
import Result from './Result.js';
import { CheckUserExist } from '../src/helper/';
 
/** react routes */
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: '/quiz',
        element: <CheckUserExist><Quiz /></CheckUserExist>
    },
    {
        path: '/result',
        element: <CheckUserExist><Result /></CheckUserExist>
    },
])
 
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
 
export default App;