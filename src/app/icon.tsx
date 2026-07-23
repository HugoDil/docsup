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
          background: "#0a0c10",
          borderRadius: 6,
        }}
      >
        <span
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "#a78bfa",
            fontFamily: "serif",
          }}
        >
          D
        </span>
      </div>
    ),
    size
  );
}
