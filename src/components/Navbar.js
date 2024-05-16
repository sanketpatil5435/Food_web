import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { logout } from '../services/operations/authAPI';

const Navbar = ({ login, nav }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.auth)
  const myFun = () => {
    let searchVal = document.getElementById("inp").value.toUpperCase();
    let table = document.getElementsByTagName("table");
    let tr = document.getElementsByTagName("tr");
    let front = document.querySelector(".main");

    for (let i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        let text = td.innerText;
        if (text.toLocaleUpperCase().indexOf(searchVal) > -1) {
          tr[i].style.display = "";
          front.style.display = "none";
        } else {
          tr[i].style.display = "none";
        }
      }
    }

    if (searchVal === "") {
      front.style.display = "flex";
    }
    console.log(searchVal);
  };

  return (
    <nav className='text-center'>
    <Link to="/">
       <div className="logo">
        <h1>Food HUB</h1>
        </div>

    </Link>
     
      <div className="input">
        <input type="text" id="inp" placeholder="Search Here ..." onKeyUp={myFun} />
       
      </div>

      <div className='gap-x-5 flex '>
      <div>{token === null && (
            <Link to="/login">
              <button className="gap-x-4 rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 cursor-pointer">
                Log in
              </button>
            </Link>
          )}</div>
      <div>
      {token === null && (
            <Link to="/signup">
              <button className=" gap-x-4 rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 cursor-pointer">
                Sign up
              </button>
            </Link>
          )}
      </div>
          
      </div>
      

          {token !== null && (
            <div className="icon flex gap-x-5">
              <i className="fa-solid fa-cart-shopping"></i>
              <div
            onClick={() => {
              dispatch(logout(navigate))
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
          >
            <IoMdLogOut className="text-lg" />
            Logout
          </div>
            </div>

          )}
      
    </nav>
  );
};

export default Navbar;
