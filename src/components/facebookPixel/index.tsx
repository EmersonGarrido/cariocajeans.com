"use client";
import * as React from "react";
import * as fbq from "../../lib/fpixel";

const FacebookPixel: React.FC = () => {
  React.useEffect(() => {
    fbq.pageview();
    const handleRouteChange = () => {
      fbq.pageview();
    };
    handleRouteChange();
  }, []);

  return <div />;
};

export default FacebookPixel;
