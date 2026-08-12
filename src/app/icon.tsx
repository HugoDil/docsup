import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2A3B2A",
          borderRadius: 7,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 14,
            height: 14,
            border: "2px solid #FBF9F4",
            borderRadius: "50%",
            opacity: 0.85,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 4,
            height: 4,
            background: "#FBF9F4",
            borderRadius: "50%",
            top: 9,
            left: 15,
          }}
        />
      </div>
    ),
    size
  );
}
