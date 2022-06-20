import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import useHttp from "../../../hook/useHttp";
import { DetailFetching, InfoDetail } from "../../../redux/actions";
import "../../../styles/styles.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import ReactImageMagnify from "react-image-magnify";

function Info(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { detail = [] } = useSelector((state) => state);
  const { request } = useHttp();
  useEffect(() => {
    DetailFetching();
    request("http://localhost:8000/api/detail/" + id).then((data) =>
      dispatch(InfoDetail(data))
    );
  }, []);
  console.log(detail);

  const navigate2 = useSearchParams();
  // Bug ni tuzatish zarur
  return (
    <>
      <button
        className="btn btn-primary"
        id="info_btn"
        onClick={() => navigate(-1)}
      >
        Ortga qaytish
      </button>
      <div className="details">
        {detail.length ? (
          detail.map(
            ({
              img_path,
              id,
              name,
              address,
              contact,
              email,
              category,
              description,
              price,
              title,
            }) => {
              return (
                <>
                  <div className="img_box">
                    {/* <img src={`http://localhost:8000/`+img_path} alt={category} /> */}
                    <Zoom className="img">
                      <img
                        alt="that wanaka tree"
                        src={`http://localhost:8000/` + img_path}
                        id=""
                      />
                    </Zoom>
                  </div>
                  <div className="hashTag_box">
                    <div>
                      <h3 className="hashTag">Category: {category}</h3>
                      <h4 className="hashTag">Price: {price}</h4>
                      <h5 className="hashTag">Title: {title}</h5>
                      <div className="desc">
                        <p>{description}</p>
                      </div>
                    </div>
                  </div>
                  <div className=" br" id="info_detail">
                    <div>
                      <h4 className="f_c3">F.I.SH: {name}</h4>
                      <h4 className="f_c3">Address: {address}</h4>
                    </div>
                    <div className="" id="">
                      <p className="f_c3">Contact: {contact}</p>
                    </div>
                   
                      <a
                        className="f_c3"
                        target={`_blank`}
                        href={`https://t.me/${email.slice(1)}`}
                        style={{ textDecoration: "none", color: "red" }}
                      >
                        Email:  {name}
                      </a>
                    </div>

                </>
              );
            }
          )
        ) : (
          <h3 className="text-center">Detail is loading....</h3>
        )}
      </div>
    </>
  );
}

export default Info;
