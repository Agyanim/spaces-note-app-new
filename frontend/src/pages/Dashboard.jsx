import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { LogoWhite } from "../assets";
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlus } from "react-icons/ai";
import MoreSectionComponent from "../components/more_section/MoreSectionComponent";
import {
  RecentNotes,
  NewNoteDialog,
  NotesFolders,
  Main,
} from "../components/dashboard_page";
import {
  DashboardContextProvider
} from "../context/DashboardContextProvider";
import { Axios } from "../Axios";
import jwt_decode from "jwt-decode";
import authService from "../features/auth/authService";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [isOpen, setIsOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const { user } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   const refreshInterval = setInterval(async () => {
  //     const response = await authService.refreshToken(
  //       user?.email
  //     );
  //     console.log("New Access Token:", response);
  //   }, 2000);
  //   return () => {
  //     clearInterval(refreshInterval);
  //   };
  // }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  const handleShowSearch = () => {
    setShowSearchInput(!showSearchInput);
  };

  // let timeoutID;
  // const refreshAccessToken = async () => {
  //   const newAccessToken = await authService.refreshToken(decodedToken?.email);
  //   console.log("New Access Token:", newAccessToken);
  //   timeoutID = setTimeout(() => {
  //     refreshAccessToken();
  //   }, 1 * 1000);
  // };

  // Axios.interceptors.request.use(
  //   async (config) => {
  //     let currentDate = new Date();
  //     const decodedToken = jwt_decode(user?.accessToken);
  //     if (decodedToken.exp * 1000 < currentDate.getTime()) {
  //       const data = await authService.refreshToken(decodedToken?.email);
  //       console.log("My new access token:", data);
  //       config.headers["authorization"] = "Bearer" + data.accessToken;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  return (
    <DashboardContextProvider>
      <>
        <section className="h-screen grid grid-cols-[320px_1fr] bg-[#181818]">
          <div className="py-[30px] overflow-y-scroll">
            <div className="w-[300px] px-[20px] bg-[#181818]">
              <div className="flex items-center justify-between">
                <img src={LogoWhite} alt="" className="h-[50px]" />
                <CiSearch
                  size={25}
                  color="#ffffff"
                  onClick={handleShowSearch}
                  className="cursor-pointer"
                />
              </div>
              {showSearchInput && (
                <input
                  type="text"
                  placeholder="Search here..."
                  className="p-2 mt-[20px] rounded-md w-[100%] bg-[#ffffff] bg-opacity-5 text-white"
                />
              )}
              <button
                onClick={() => setIsOpen(true)}
                className="mt-[20px] w-full p-[10px] rounded-lg bg-[#ffffff] bg-opacity-5 text-white flex justify-center items-center gap-2"
              >
                <AiOutlinePlus className="inline-block" size={25} />
                <p className="font-bold font-sans">New Note</p>
              </button>
            </div>

            {/* List of Recent Notes */}
            <RecentNotes />
            {/* Folder category section starts here*/}
            <div className="mt-5">
              {/* <FoldersComponent /> */}
              <NotesFolders />
              <MoreSectionComponent />
            </div>
            {/* Folder category section ends here*/}

            <div className="flex mt-8 justify-start">
              <button
                onClick={() => onLogout()}
                className="py-2 px-8 bg-red-700 hover:bg-red-500 text-white rounded-lg"
              >
                Logout
              </button>
            </div>
          </div>
          <Main />
        </section>
        <NewNoteDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
    </DashboardContextProvider>
  );
}

export default Dashboard;
