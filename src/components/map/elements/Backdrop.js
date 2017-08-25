import React from "react";
import {Rect} from "react-konva";
import {BACKDROP_COLOR} from "../../../colors/index";
import {MAP_SIZE_IN_PIXELS} from "../MapConstants";

const Backdrop = () => (
    <Rect
        x={0}
        y={0}
        width={MAP_SIZE_IN_PIXELS}
        height={MAP_SIZE_IN_PIXELS}
        fill={BACKDROP_COLOR}
    />
);

export default Backdrop;