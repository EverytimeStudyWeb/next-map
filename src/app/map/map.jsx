import Script from "next/script";
import { Map } from "react-kakao-maps-sdk";

// npm install react-kakao-maps-sdk
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?=false`;

export default function KakaoMap() {
  return (
    <div style={{ width: "500px", height: "400px" }}>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: "100%", height: "100%" }}
      ></Map>
    </div>
  );
}
