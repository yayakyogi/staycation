import Link from "next/link";
import React from "react";

export default function BrandIconText() {
  return (
    <Link href="/">
      <a className="text-2xl md:text-3xl text-blue font-medium">
        Stay
        <span className="text-2xl md:text-3xl text-gray900">cation.</span>
      </a>
    </Link>
  );
}
