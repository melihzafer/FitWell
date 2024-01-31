import Link from "next/link";
import React from "react";

function WillnessTips() {
  return (
    <section className="wellness-tips bg-purple-900 text-white  py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Wellness Tips</h2>
        <p className="text-lg mb-8">
          Explore our blog for valuable insights, fitness tips, and wellness
          advice.
        </p>
        <Link
          href="/blog"
          className="bg-white px-5 py-3 rounded-full font-bold  text-purple-900"
        >
          Read Our Blog
        </Link>
      </div>
    </section>
  );
}

export default WillnessTips;
