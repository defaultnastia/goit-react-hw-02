import { useEffect } from "react";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

export const Background = () => {
  useEffect(() => {
    CLOUDS({
      el: "body",
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      speed: 0.5,
      skyColor: 0x1d82af,
    });
  }, []);

  return <div></div>;
};
