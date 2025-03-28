import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from 'react-router-dom';
import './App.css';
import TyrLayout from './layouts/tyrNavi.tsx';
import BookBlurb from './pages/bookBlurb.tsx';
import CharBio from './pages/charBio.tsx';
import ShopLinks from './pages/shopLinks.tsx';
import SocialLinks from './pages/socialLinks.tsx';
import ProfileGallery from './components/ProfileGallery.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<TyrLayout />}>
      <Route index element={<BookBlurb />} />
      <Route path='/characters' element={<CharBio />} />
      <Route path='/characters/:id' element={<ProfileGallery/>}/>
      <Route path='/shopLinks' element={<ShopLinks />} />
      <Route path='/sociallinks' element={<SocialLinks />} />
      <Route path='*' element={<BookBlurb />} />
    </Route>
  )
);


function App() {
  return (<RouterProvider router={router} />);
};

export default App;
