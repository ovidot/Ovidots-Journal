import Banner from "./components/Banner";
import Journalcomponent from "./components/Journalcomponent/Journalcomponent";
import Link from "next/link";

export const Homepage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Banner />
        </div>
        <div className="row ">
          <Journalcomponent />
          <Journalcomponent />
          <Journalcomponent />
          <Journalcomponent />
        </div>
      </div>
    </>
  );
};
