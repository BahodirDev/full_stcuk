import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import svg from "../assets/olxSVG.png";
import svg2 from "../assets/search.svg";
import "../styles/navbar.css";
function Navbar(props) {
  const [search, setSearch] = useState("");
  const [place, setPlace] = useState(false);
  const { regions } = useSelector((state) => state);
  function filter() {
    if (!search == "") {
      navigate("/filters/" + search);
      setSearch("");
    }
  }
  const user = JSON.parse(localStorage.getItem("person"));
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const clearStore = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <nav
        className={`active ${
          show && "hidden"
        } navbar navbar-expand-md col-12 col-md-12 text-white fixed-top d-flex`}
        id="navbar"
      >
        {localStorage.getItem("person") ? (
          <>
            <Link
              style={{
                textDecoration: "none",
                padding: "10px",
                background: "blue",
                borderRadius: "12px",
                color: "white",
                position: "absolute",
                right: "6rem",
              }}
              to={`/`}
            >
              Register
            </Link>
            <Link
              style={{
                textDecoration: "none",
                padding: "10px",
                background: "blue",
                borderRadius: "12px",
                color: "white",
                position: "absolute",
                right: "2rem",
              }}
              to={`/login`}
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <div className="row w-100" id="spy">
              <div className="col-6 col-md-4 " id="svg">
                <div
                  className="d-flex"
                  style={{
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Link to={`/`}>
                    {" "}
                    <img className="img" src={svg} alt="" />{" "}
                  </Link>
                  <Link to={`/input`} style={{ textDecoration: "none" }}>
                    {" "}
                    <span className="BtnColor">E'lon Berish</span>
                  </Link>
                  <Link to={`/liked`} style={{ textDecoration: "none" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="heart"
                      viewBox="0 0 24 24"
                      width="3em"
                      height="2em"
                      aria-label="Belgilanganlar"
                      className="css-135i32f"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M20.219 10.367L12 20.419 3.806 10.4A3.96 3.96 0 013 8c0-2.206 1.795-4 4-4a4.004 4.004 0 013.868 3h2.264A4.003 4.003 0 0117 4c2.206 0 4 1.794 4 4 0 .868-.279 1.698-.781 2.367M17 2a5.999 5.999 0 00-5 2.686A5.999 5.999 0 007 2C3.692 2 1 4.691 1 8a5.97 5.97 0 001.232 3.633L10.71 22h2.582l8.501-10.399A5.943 5.943 0 0023 8c0-3.309-2.692-6-6-6"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="d-flex col-12 col-md-8 " id="nav_select">
                <button
                  className="btn btn-outline-primary text-white"
                  onClick={() => setPlace(!place)}
                  id="placeBtn"
                >
                  Place
                </button>
                <input
                  className="form-control  col-xs-6"
                  type="search"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search"
                />
                <button className="p_1 btn btn-primary" onClick={filter}>
                  Qidirish
                </button>
                <button
                  className="d-flex btn"
                  type="submit"
                  onClick={filter}
                  id="searchBtn"
                >
                  <img src={svg2} alt="" id="searchBtn" />
                </button>
                <select
                  style={{ marginLeft: "12px" }}
                  onChange={clearStore}
                  className="person_info BtnColor"
                  id="login"
                >
                  <option>...</option>
                  <option>{user && user.name}</option>
                  <option>Log Out</option>
                </select>
              </div>
            </div>
          </>
        )}
      </nav>
      {place && (
        <div
          className={`active_s ${
            show && "hidden"
          } navbar navbar-expand-md text-white fixed-top `}
        >
          <div className="regions">
            {regions.map((item, index) => {
              return (
                <ul key={item.id}>
                  <Link
                    to={`/regions/${item.title}`}
                    onClick={() => setPlace(false)}
                  >
                    {item.title.toUpperCase()}
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
