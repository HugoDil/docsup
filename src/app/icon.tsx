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
          background: "linear-gradient(135deg, #8b5cf6, #c026d3)",
          borderRadius: 7,
        }}
      >
        <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="white" strokeWidth={1.5}>
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(-24 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(36 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="white" stroke="none" />
        </svg>
      </div>
    ),
    size
  );
}
