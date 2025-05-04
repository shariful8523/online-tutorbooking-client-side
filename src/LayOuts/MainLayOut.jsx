import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayOut = () => {
    return (
        <div>
            {/* Navbar */}
              <Navbar></Navbar>
            {/* Outlet */}
            <Outlet></Outlet>

            {/* Footer */}
             <Footer></Footer>
        </div>
    );
};

export default MainLayOut;