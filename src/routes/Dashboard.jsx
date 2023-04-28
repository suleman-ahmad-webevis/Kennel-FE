import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import TabNav from "../components/Navbar/Tablet/TabletNav";
import MobileNav from "../components/Navbar/Mobile/MobileNav";
import LandingPageSidebar from "../components/Sidebar/LandingPageSidebar";
import { CategoriesList } from "../Pages/Product/LandingPage";
import { FaBars, FaTimes } from "react-icons/fa";
import useBreakpoint from "../hooks/useBreakPoint";

const ContainerWrapper = styled("div")`
  position: relative;
  /* .popup-model {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    position: absolute;
  } */
  .container {
    width: 100%;
    height: 100%;
  }

  .wrapper-main {
    position: relative;
    /* padding-left: 343px; */
    padding-left: ${(props) => props.pageNotFoundedPad};
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    align-items: center;
  }

  .left-sidebar {
    position: fixed;
    top: 91px; /* the height of the header (60px) + its bottom margin (20px) */
    bottom: 0;
    left: 0;
    z-index: 99;
    /* width: 343px; */
    width: ${(props) => props.pageNotFoundedWid};
    overflow: auto;
    padding: 0 0 20px;
    /* background: #0f212e; */
    background: ${(props) => props.purpleLeftSidebar};
    overflow-x: hidden;

    &::-webkit-scrollbar {
      display: block;
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.35);
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #314552;
      border-right: none;
      border-left: none;
      border-radius: 10px;
    }
  }

  .main-content {
    background: ${(props) => props.purpleBackground};
    width: 100%;
    position: relative;
    flex-grow: 1;
    height: ${(props) => props.pageNotFoundedHei};
    padding: 0;
    overflow-y: ${(props) => props.removeBodyScroll};
    overflow-x: hidden;
    z-index: 9;
    /* top: 69px; */
    top: ${(props) => props.pageNotFoundedTop};

    &::-webkit-scrollbar {
      display: block;
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.35);
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #314552;
      border-right: none;
      border-left: none;
      border-radius: 10px;
    }

    /* .main-wrapper-parent {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: space-between;
      .pie {
        display: flex;
        justify-content: center;
        background: #223542;
        border-radius: 8px;
        width: 100%;
        max-width: 630px;
        height: 400px;
        margin: 50px auto;
        filter: drop-shadow(0px 2.404px 2.404px rgba(0, 0, 0, 0.25));
      }
    }  */
  }

  @media screen and (max-width: 768px) {
    .left-sidebar {
      display: none;
    }
    .wrapper-main {
      padding: 0;
    }
  }
`;

const Dashboard = () => {
  const { isDesktop, isTablet, isSmallMobile, isMobile } = useBreakpoint();
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();
  const isNotFoundPage = pathname === "/404";
  const screenSize = window?.screen?.availWidth;
  return (
    <>
      <ContainerWrapper
        pageNotFoundedPad={
          !isNotFoundPage || screenSize < 768 ? "343px" : "0px"
        }
        pageNotFoundedTop={!isNotFoundPage ? "91px" : "0px"}
        pageNotFoundedHei={!isNotFoundPage ? "calc(100vh - 70px)" : "100vh"}
        pageNotFoundedWid={!isNotFoundPage ? "352px" : "0px"}
        removeBodyScroll={
          pathname === "/" || pathname === "/shop" ? "hidden" : "auto"
        }
      >
        <div className="container">
          {!isNotFoundPage && (
            <header>
              {isDesktop && <Navbar />}
              {isTablet && <TabNav />}
              {(isMobile || isSmallMobile) && <MobileNav />}
            </header>
          )}
          <div className="wrapper-main">
            {!isNotFoundPage && (
              <div className="left-sidebar">
                <LandingPageSidebar toggle={toggle} />
              </div>
            )}
            <div className="main-content" id="detail">
              <Outlet />
              <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Dashboard;
