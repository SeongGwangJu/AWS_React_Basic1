import TestBox from "./component/TestBox/TestBox";
import TestBox2 from "./component/TestBox2/TestBox2";

function App() {
  return (
    <>
    <h1>test</h1>
    <TestBox inputTitleName={"username"} testName2={"bbb"} isShow>
        <TestBox2 />
    </TestBox>
    <TestBox inputTitleName={"password"} isShow={false}>
      <TestBox2 />
    </TestBox>
    </>
  );
}

export default App;
