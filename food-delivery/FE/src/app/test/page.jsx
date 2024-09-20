"use client";
import { CldImage } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Page() {
  return (
    <div>
      <CldImage
        src="https://res.cloudinary.com/dpewhjpka/image/upload/v1726824930/high-energy-foods-1457889068_io16pc.jpg" // Use this sample image or upload your own via the Media Explorer
        width="500" // Transform the image: auto-crop to square aspect_ratio
        height="500"
        crop={{
          type: "auto",
          source: true,
        }}
      />
      <CldUploadButton uploadPreset="food delivery" />
    </div>
  );
}
