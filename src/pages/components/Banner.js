import React from "react";

const Banner = () => {
  const user = [
    {
      key: "1",
      name: "Ovidot",
      day: "day 1",
      title: "This is day 1 placeholder",
      imageUrl: "/../public/",
      imageSize: 1000,
    },
  ];
  return (
    <>
      {user.map((users) => (
        <div className="col-md-12 justify-content-center mt-5" key={users.key}>
          <div className="banner ps-5">
            <h1>{users.name}</h1>
            <h1>{users.day}</h1>
            <h3>This is Day1 placeholder</h3>
            <p>continue reading ....</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Banner;
