import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import useSharedStyles from "./sharedStyles";
import WhatsappBox from "./WhatsappBox";

const Layout = () => {
  const { classes } = useSharedStyles();
  const location = useLocation();
  const pathname = location.pathname || "/";
  const isHome = pathname === "/";
  const routeHasContactBox =
    pathname.startsWith("/about") ||
    pathname.startsWith("/cultures") ||
    pathname.startsWith("/technologies") ||
    pathname.startsWith("/news-events");

  return (
    <>
      <Header />
      <main className={classes.layout}>
        <Outlet />
      </main>
      {!isHome && !routeHasContactBox && <WhatsappBox />}
      <Footer />
    </>
  );
};

export default Layout;
