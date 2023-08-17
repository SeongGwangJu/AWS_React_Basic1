import React from 'react';

function TestBox({inputTitleName, testName2, children, isShow}) {
  const obj = {
    testName: "aaa",
    myName: "주성광"
  }

  // const { testName, myName } = obj;
  // console.log("testName : ");
  // console.log(testName);
  // console.log("myName : ");
  // console.log(myName);

  // console.log("props : ");
  // console.log(props);
  
  /* 비구조할당(함수의 매개변수로 속성을 바로 받음. 'props.' 안해도 된다.)
  function TestBox({inputTitleName, testName2, children }) { 이런 형식임 {*/
  // console.log("inputTitleName : ");
  // console.log(inputTitleName);
  
  // console.log("testName2 : ");
  // console.log(testName2);
  
  // console.log("children : ");
  // console.log(children);
  
  return (
          <>
            <div>
                <label>{inputTitleName}</label> 
            </div>
            {isShow && children}
            <div>
                <input type="text" />
            </div>
        </>
  );
}

export default TestBox;

