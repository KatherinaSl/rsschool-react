import './App.css';
import SearchComponent from './components/search/searchComponent';
import ErrorBoundary from './components/error/errorBoundary';
import { BrowserRouter } from 'react-router';
// import ErrorNotFound from './components/error/errorNotFound';
// import AboutComponent from './components/about/aboutComponent';
// import CardDetails from './components/CardDetails/cardDetailsComponent';
// import { ThemeProvider } from './context/themeProvider';
// import { Suspense } from 'react';
// import SpinnerComponent from './app/loading';

const App = () => {
  // return (
  //   <ErrorBoundary>
  //     <BrowserRouter>
  //       <ThemeProvider>
  //         <Routes>
  //           <Route path="/" element={<Outlet />}>
  //             <Route index element={<SearchComponent />} />
  //             <Route path="/cardDetails/:cardId" element={<SearchComponent />}>
  //               <Route index element={<CardDetails />} />
  //             </Route>
  //           </Route>
  //           <Route path="/about" element={<AboutComponent />} />
  //           {/* <Route path="*" element={<ErrorNotFound />} /> */}
  //         </Routes>
  //       </ThemeProvider>
  //     </BrowserRouter>
  //   </ErrorBoundary>
  // );
  return (
    <ErrorBoundary>
      <BrowserRouter>
        {/* <Suspense fallback={<SpinnerComponent />}> */}
        <SearchComponent></SearchComponent>
        {/* </Suspense> */}
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
