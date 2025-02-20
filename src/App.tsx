import './App.css'
import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom'
import Main from './modules/main/Main'
import NotFound from './pages/NotFound'
import Home from './pages/Home'

function App() {
  let router = undefined;
  router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />} handle={{ crumb: () => <Link to="/">Home</Link> }}>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App