import Header from './header/header';
import { Outlet } from 'react-router-dom';
import Footer from './footer/footer';

export default function Layout() {
  return (
    <div className="h-full flex flex-col">
      <div className="w-full bg-champagne-color">
        <div className="container m-auto ">
          <Header />
        </div>
      </div>
      <div className="w-full relative flex-1">
        <Outlet />
      </div>
        <Footer />
    </div>
  );
}
