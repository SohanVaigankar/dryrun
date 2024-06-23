"use client";

import React from "react";
import { useRouter } from "next/navigation";
// components
import { CountdownTimer } from "../../atoms";

const PageNotFound = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <section>
      <h1 className="mb-10 text-xl font-semibold md:text-2xl">
        Whoops! Page Not Found :/
      </h1>
      <div className="flex flex-col justify-center gap-10">
        <CountdownTimer
          //   extraClassName={""}
          trackColour="text-purple-100" //use font colour only
          accentColour="text-purple-500" //use font colour only
          duration={5}
        />
        <p className="mt-15">
          Don't worry! Redirecting you to the Home Page shortly{" "}
        </p>
      </div>
    </section>
  );
};

export default PageNotFound;
