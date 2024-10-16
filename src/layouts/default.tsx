import PropTypes from "prop-types";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const DefaultLayout = (props: any) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.object,
};

export default DefaultLayout;
