import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
import NotFound from './pages/NotFound';
import Careers, { careersLoader } from './pages/careers/Careers';
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails';
import CareersError from './pages/careers/CareersError';
//layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CareersLayout from './layouts/CareersLayout';

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}> // Element is like a layout - navbar, etc
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />  // Path is relative to parent path, so don't need to add /
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} /> // /help/faq
        <Route path="contact" element={<Contact />} action={contactAction} /> // /help/contact
      </Route>

      {/* If we don't add error this in combo with logic in loaders, going to /careers/1239083e583y49354 or a bad fetch won't error */}
      {/* Could also have added errorElement on each individual Route below - would override the parent's errorElement */}
      {/* This will show error instead of layout - if thrown in child, it would still show the layout */}
      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader} // loader to prevent needing useEffect to get data on component load / store it - gets it early
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={myRouter} />
);
}

export default App;

// OLDER WAY (doesn't work with react forms / actions reactRouterForm Form from react-router-dom) --> (NOW USE RouterProvider)
// function App() {
//   return (
//     <BrowserRouter>
//       <header>
//         <nav>
//           <h1>Jobarouter</h1>
//           <NavLink to="/">Home</NavLink>
//           {/* NavLink has class (active) so you can style, opposed to Link */}
//           <NavLink to="about">About</NavLink>
//         </nav>
//       </header>
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="about" element={<About />} />
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// }

// export default App;
