import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";


const MainLayOut = () => {
    return (
        <div>
            {/* Navbar */}
              <Navbar></Navbar>
            {/* Outlet */}
            <Outlet></Outlet>

            {/* Footer */}

        </div>
    );
};

export default MainLayOut;