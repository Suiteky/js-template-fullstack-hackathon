import  React from "react";
import { Link } from "react-router-dom";
import ImageList from "../components/ImageList";




export default function Home() {
  return (
    <>
    <div className="homecontainer">
      <Link to={"/continent"}>
      <div className="welcome">FIND YOUR DREAM</div>
      </Link>
      <div className="imgs">
        <ImageList />
      </div>
    </div>
    </>
  );
}
