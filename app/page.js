import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold"> Arsheyr </h1>
      <Link href="/client" className="btn btn-accent">
        Commence
      </Link>

      <p className="py-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        explicabo.
      </p>
    </div>
  );
};

export default HomePage;
