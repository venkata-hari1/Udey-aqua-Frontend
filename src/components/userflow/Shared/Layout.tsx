import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import useSharedStyles from "./sharedStyles";

const Layout = () => {
  const { classes } = useSharedStyles();

  return (
    <>
      <Header />
      <main className={classes.layout}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
