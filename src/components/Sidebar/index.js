import React, { useContext } from "react";
import ColorPicker from "../ColorPicker";
import { store } from "../../store"

const initialValues = {
  "--header-bg-color": { r: 132, g: 7, b: 221, a: 1 },
  "--header-text-color": { r: 255, g: 255, b: 255, a: 1 },
  "--header-text-size": "48px",
  "--quiz-header-bg-color": { r: 248, g: 248, b: 248, a: 1 },
  "--quiz-header-text-color": { r: 82, g: 82, b: 82, a: 1 },
  "--pill1-text-color": { r: 255, g: 165, b: 0, a: 1 },
  "--pill1-bg-color": { r: 103, g: 128, b: 159, a: 1 },
  "--pill2-bg-color": { r: 255, g: 165, b: 0, a: 1 },
  "--pill2-text-color": { r: 103, g: 128, b: 159, a: 1 },
  "--button-primary-color": { r: 132, g: 7, b: 221, a: 1 },
  "--button-secondary-color": { r: 174, g: 115, b: 216, a: 1 },
  "--answer-button-color": { r: 66, g: 208, b: 166, a: 1 },
};

function Sidebar() {
  const { dispatch } = useContext(store);
  const handleTextSizeChange = (e) => {
    dispatch({
        type: "UPDATE_VARS",
        payload: {
            key: "--header-text-size",
            value: `${e.target.value}px`
        }
    });
  }
  return (
    <div className="sidebar">
      <h2>Theme Editor</h2>
      <ul>
        <li>
          <span>Header Backgroud Color</span>
          <span>
            <ColorPicker
              varName="--header-bg-color"
              initialColor={initialValues["--header-bg-color"]}
            />
          </span>
        </li>
        <li>
          <span>Header Text Color</span>
          <span>
            <ColorPicker
              varName="--header-text-color"
              initialColor={initialValues["--header-text-color"]}
            />
          </span>
        </li>
        <li>
          <span>Header Text Size</span>
          <span>
            <input
              type="number"
              style={{ maxWidth: "48px" }}
              placeholder={initialValues["--header-text-size"]}
              onChange={handleTextSizeChange}
            />
          </span>
        </li>
        <li>
          <span>Quiz Header Backgroud Color</span>
          <span>
            <ColorPicker
              varName="--quiz-header-bg-color"
              initialColor={initialValues["--quiz-header-bg-color"]}
            />
          </span>
        </li>
        <li>
          <span>Quiz Title Color</span>
          <span>
            <ColorPicker
              varName="--quiz-header-text-color"
              initialColor={initialValues["--quiz-header-text-color"]}
            />
          </span>
        </li>
        <li>
          <span>Subject Label 1 Text Color</span>
          <span>
            <ColorPicker
              varName="--pill1-text-color"
              initialColor={initialValues["--pill1-text-color"]}
            />
          </span>
        </li>
        <li>
          <span>Subject Label 1 Background Color</span>
          <span>
            <ColorPicker
              varName="--pill1-bg-color"
              initialColor={initialValues["--pill1-bg-color"]}
            />
          </span>
        </li>
        <li>
          <span>Subject Label 2 Text Color</span>
          <span>
            <ColorPicker
              varName="--pill2-bg-color"
              initialColor={initialValues["--pill2-bg-color"]}
            />
          </span>
        </li>
        <li>
          <span>Subject Label 2 Background Color</span>
          <span>
            <ColorPicker
              varName="--pill2-text-color"
              initialColor={initialValues["--pill2-text-color"]}
            />
          </span>
        </li>
        <li>
          <span>Primary Button Color</span>
          <span>
            <ColorPicker
              varName="--button-primary-color"
              initialColor={initialValues["--button-primary-color"]}
            />
          </span>
        </li>
        <li>
          <span>Secondary Button Color</span>
          <span>
            <ColorPicker
              varName="--button-secondary-color"
              initialColor={initialValues["--button-secondary-color"]}
            />
          </span>
        </li>
        <li>
          <span>Correct Answer Button Color</span>
          <span>
            <ColorPicker
              varName="--answer-button-color"
              initialColor={initialValues["--answer-button-color"]}
            />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
