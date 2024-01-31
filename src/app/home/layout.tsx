import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Layout({
  children,
  featured,
  reviews,
  tips,
}: {
  children: React.ReactNode;
  featured: React.ReactNode;
  reviews: React.ReactNode;
  tips: React.ReactNode;
}) {
  return (
    <>
      {children}
      {featured}
      {tips}
      {reviews}
    </>
  );
}
