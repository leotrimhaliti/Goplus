import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { components } from "@/slices";

const mockHomeSlices = [
  {
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
    slice_type: "carousel",
    primary: {
      heading: [{ type: "heading2", text: "Flight" }],
      price_copy: [{ type: "paragraph", text: "Nulla exercitation commodo duis duis eiusmod amet exercitation ex exercitation nulla non laborum." }]
    }
  },
  {
    slice_type: "sky_dive",
    primary: {
      sentence: "Power Through Every Challenge",
      flavor: "blackCherry"
    }
  },
  {
    slice_type: "big_text",
    primary: {
      // Add BigText fields if defined
    }
  },
  // Full static demo with all slices
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
