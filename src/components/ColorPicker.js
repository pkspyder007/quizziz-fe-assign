import React, { useState, useContext } from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import { store } from "../store";

const ColorPicker = ({ varName, initialColor }) => {
  const { dispatch } = useContext(store);

  const [state, setState] = useState({
    displayColorPicker: false,
    color: initialColor,
  });

  const updateTheme = ({ r, g, b, a }) => {
    const colorString = `rgba(${r},${g},${b},${a})`;
    dispatch({
        type: "UPDATE_VARS",
        payload: {
            key: varName,
            value: colorString
        }
    });
  };

  const handleClick = () => {
    setState({ displayColorPicker: !state.displayColorPicker });
};

const handleClose = () => {
    setState({ displayColorPicker: false });
};

const handleChange = (color) => {
    setState({ displayColorPicker: true, color: color.rgb });
    // updateTheme(state.color)
    updateTheme(color.rgb)
  };

  const styles = reactCSS({
    default: {
      color: {
        width: "16px",
        height: "14px",
        borderRadius: "2px",
        background: `rgba(${state?.color?.r}, ${state?.color?.g}, ${state?.color?.b}, ${state?.color?.a})`,
      },
      swatch: {
        padding: "3px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  return (
    <div>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {state.displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={state.color} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
