import React from "react";
import img from "../assets/asset4.jpg";
import "../styles/Home.scss";
import {
  AiFillAmazonCircle,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillDropboxCircle
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>MicroBit</h1>
        <p>Exceeding Your Expectations</p>
      </div>

      <div className="desc">
        <div className="desc-img">
          <img src={img} alt="desc-img" />
        </div>
        <div className="desc-text">
          We are your one and only solution to the tech problems you face every
          day. We are leading tech company whose aim is to increase the problem
          solving ability in children.
        </div>
      </div>

      <div id="about">
        <div>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            fuga dolor quasi rem, a eaque ipsum deleniti corrupti autem maiores
            quia, cupiditate fugiat nam aspernatur praesentium, id quaerat?
            Ducimus, quod sed blanditiis deleniti repudiandae accusamus neque
            enim reiciendis eius officiis laborum laudantium, nemo quidem
            voluptates iste id voluptas? <br /> <br />
            Excepturi doloremque fugiat non eos optio soluta dolores sint
            reprehenderit dolorum alias! Maiores deleniti, dolorem voluptate
            eos, soluta sequi iure doloribus neque nemo facilis labore numquam
            ea quibusdam velit sit. Laboriosam et animi temporibus itaque
            architecto alias inventore, numquam explicabo omnis ad dicta,
            eveniet repellat hic voluptatum perspiciatis ullam? Consequatur, quo
            quam!
          </p>
        </div>
      </div>

      <div id="brands">
        <div>
          <h1>Brands</h1>
          <section>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillTwitterCircle />
              <p>Twitter</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillDropboxCircle />
              <p>Dropbox</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
