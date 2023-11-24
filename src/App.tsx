import { useState } from 'react';
import './App.css';
import Box from './Box';

function App() {
  const [refresh, setRefresh] = useState(false)
  // to refresh the color box
  const onClickBox = () => setRefresh(!refresh)
  return (
    <div className="App">
      <div className="first-layer">
        <Box
          onClick={onClickBox}
          color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          text={"1"}
        />
        <div className="sub-first-layer">
          <Box
            onClick={onClickBox}
            color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            text={"2"}
          />
          <div className="bottom-sub-first-layer">
            <Box
              onClick={onClickBox}
              color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              text={"3"}
            />
            <Box
              onClick={onClickBox}
              color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              text={"4"}
            />
          </div>
        </div>
      </div>
      <div className="second-layer">
        <Box
          className="item5"
          onClick={onClickBox}
          color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          text={"5"}
        />
        <Box
          className="item6"
          onClick={onClickBox}
          color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          text={"6"}
        />
        <Box
          className="item7"
          onClick={onClickBox}
          color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          text={"7"}
        />
        <Box
          className="item8"
          onClick={onClickBox}
          color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          text={"8"}
        />
        <Box
          className="item9"
          onClick={onClickBox}
          color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          text={"9"}
        />
      </div>
    </div>
  );
}

export default App;
