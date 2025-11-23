import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";

const mockHomeSlices = [
  {
    id: "hero-mock",
    slice_type: "hero",
    primary: {
      heading: [{ type: "heading1", text: "go+" }],
      subheading: [{ type: "paragraph", text: "Unleash Your Energy" }],
      body: [{ type: "paragraph", text: "Premium energy drink crafted for those who dare to soar higher. Experience the power of go+." }],
      button_text: "Shop Now",
      button_link: { link_type: "Web", url: "https://leotrimhaliti.is-a.dev/" },
      cans_image: {
        url: "/labels/offline.png",
        dimensions: { width: 1603, height: 1791 }
      }
    }
  },
  {
    id: "carousel-mock",
    slice_type: "carousel",
    primary: {
      heading: [{ type: "heading2", text: "Flight" }],
      price_copy: [{ type: "paragraph", text: "Nulla exercitation commodo duis duis eiusmod amet exercitation ex exercitation nulla non laborum." }]
    }
  },
  {
    id: "skydive-mock",
    slice_type: "sky_dive",
    primary: {
      sentence: "Power Through Every Challenge",
      flavor: "blackCherry"
    }
  },
  {
    id: "bigtext-mock",
    slice_type: "big_text",
    primary: {}
  }
];

export const metadata: Metadata = {
  title: "Go+ Energy Drink",
  description: "Premium energy drink landing page with 3D animations.",
  openGraph: {
    title: "Go+ Energy Drink",
    images: [{ url: "/labels/offline.png" }],
  },
};

export default function Index() {
  return <SliceZone slices={mockHomeSlices} components={components} />;
}
