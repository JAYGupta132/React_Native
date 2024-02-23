import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Infinite_Scroll() {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setTimeout(() => {
      setDataSource(dataSource.concat(Array.from({ length: 20 })));
    }, 1000);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", color:'blue' }}>Infinite_Scroll in react js</h1>
      <InfiniteScroll
        dataLength={dataSource.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<p style={{textAlign: 'center', fontSize: 30}}>Loading...</p>}
        height={880}
      >
        {dataSource.map((item, index) => {
          return (
            <div
              style={{
                border: "1px solid",
                height: 60,
                width: 550,
                margin: "auto",
                marginBottom: 15,
              }}
            >
              <h2 style={{ textAlign: "center" }}>
                This is a div #{index + 1} inside InfiniteScroll
              </h2>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}
