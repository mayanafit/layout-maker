import { useState } from 'react';
import './App.css';
import Box from './Box';

function App() {
  const [refresh, setRefresh] = useState(false)
  // to refresh the color box
  const onClickBox = () => setRefresh(!refresh)
  return (
    <div className="App">
      <div className="flex-row first-layer-box">
        <Box
          onClick={onClickBox}
          className="two-box"
          color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          text={"1"}
        />
        <div className="flex-col two-box sub-first-layer-box">
          <Box
            onClick={onClickBox}
            color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            text={"2"}
          />
          <div className="flex-row">
            <Box
              onClick={onClickBox}
              className="two-box"
              color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              text={"3"}
            />
            <Box
              onClick={onClickBox}
              className="two-box"
              color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              text={"4"}
            />
          </div>
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-row flex-row-reverse dominant-box">
          <Box
            onClick={onClickBox}
            className="middle-box"
            color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            text={"7"}
          />
          <div className="flex-col side-box">
            <Box
              onClick={onClickBox}
              color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              text={"5"}
            />
            <Box
              onClick={onClickBox}
              color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              text={"6"}
            />
          </div>
        </div>
        <div className="flex-col side-box">
          <Box
            onClick={onClickBox}
            color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            text={"8"}
          />
          <Box
            onClick={onClickBox}
            color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            text={"9"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
