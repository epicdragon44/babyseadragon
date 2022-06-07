import OpenSeaDragon from "openseadragon";
import React, { useEffect, useState } from "react";

const OpenSeaDragonViewer = (props) => {

  const [viewer, setViewer] = useState( null);
  
  const InitOpenseadragon = () => {
    viewer && viewer.destroy();
    setViewer(
      OpenSeaDragon({
        id: "openSeaDragon",
        // EXAMPLES FOR PREFIXURL AND TILESOURCES
        // prefixUrl: "http://goblinrum.mynetgear.com/images/outputs/testimage1_out/",
        // tileSources: "http://goblinrum.mynetgear.com/images/outputs/testimage1_out/info.json",
        // prefixUrl: "http://goblinrum.mynetgear.com/images/outputs/",
        // tileSources: "http://goblinrum.mynetgear.com/images/outputs/testimage1_outdzi.dzi",
        prefixUrl: props.prefixUrl,
        tileSources: props.tileSources,
        animationTime: 0.5,
        blendTime: 0.1,
        constrainDuringPan: true,
        maxZoomPixelRatio: 2,
        minZoomLevel: 1,
        visibilityRatio: 1,
        zoomPerScroll: 2
      })
    );
  };

  useEffect(() => {
    InitOpenseadragon();
    return () => {
        viewer && viewer.destroy();
    };
  }, []);

  return (
    <div 
        id="openSeaDragon" 
        style={{
            height: props.height,
            width: props.width,
        }}
    >
    </div>
  );
};

export { OpenSeaDragonViewer };
