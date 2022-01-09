import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

const ChildArea = memo((props) => {
  const { open } = props;

  console.log("ChildAreaがレンダリングされた!!");
  // レンダリングコストが高い実装
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("....");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});

export default ChildArea;
