import { Navbar, Footer, Landing } from '../../Components/ExpComp';

const Home = ({isLoggedIn} ) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn}  />
      <Landing /> 
      <Footer />
    </>
  );
};

export default Home;
