import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";
// console.log(Sdata[0].Mname);
const rootElement = document.getElementById("root");
//through map.
function ncard(val) {
  return (
    <Card
      img={val.img}
      title={val.title}
      Mname={val.Mname}
      watchlink={val.watchlink}
      Downlink={val.Downlink}
    />
  );
}
ReactDOM.render(
  <>
    <div className="heading">
      The Best Indian / Indians Movie You Must Watch!!
    </div>
    {Sdata.map(ncard)}

    {/* <Card               //through Array object;
      img={Sdata[1].img}
      title={Sdata[1].title}
      Mname={Sdata[1].Mname}
      watchlink={Sdata[1].watchlink}
      />
    <Card
            img={Sdata[2].img}
            title={Sdata[2].title}
            Mname={Sdata[2].Mname}
            watchlink={Sdata[2].watchlink}
      />

    <Card
            img={Sdata[3].img}
            title={Sdata[3].title}
            Mname={Sdata[3].Mname}
            watchlink={Sdata[3].watchlink} /> */}
  </>,
  rootElement
);
