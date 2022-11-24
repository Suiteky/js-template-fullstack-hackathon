import ImageList from "../components/ImageList";
import ContinentQuestion from "@components/continentQuestions";

export default function Home() {
  return (
    <>
    <div className="homecontainer">
      <div className="title">FIND YOUR DREAM</div>
      <div className="imgs">
        <ImageList />
      </div>
    </div>
    {/* <div className="questioncontainer">
      <div className="quest">What do you want ?</div>
       <ContinentQuestion />
    </div> */}
    </>
  );
}
