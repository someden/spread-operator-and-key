"use client";

function Inner(props: any) {
  return <div {...props} />;
}

const props = {};

export default function Wrapper() {
  return (
    <Inner {...props} key="key">
      <div>hello</div>
      <div>world</div>
    </Inner>
  );
}
