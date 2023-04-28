import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const journalcomponent = () => {
  const router = useRouter();

  function handleClick() {
    router.push("/blog");
  }
  return (
    <>
      <div
        className="card mb-3 ms-2 me-2 mt-3"
        onClick={() => handleClick()}
        style={{ maxWidth: 640 }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <Image
              src="/pc.jpg"
              width={150}
              height={150}
              alt="j-pic"
              className="mt-2"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{ cursor: "pointer" }}>
              <h5 className="card-title">Day1</h5>
              <p className="card-text">
                <small className="text-muted">Feb 5, 2021</small>
              </p>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Continue reading</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default journalcomponent;
