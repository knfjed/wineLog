import React from "react";
import { useRouter } from "next/router";
import WineDetailLayout from "../../components/WineDetailLayout";

export default () => {
  const router = useRouter();
  console.log("router", router);

  return <WineDetailLayout />;
};
