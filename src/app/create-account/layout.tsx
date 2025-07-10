import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account",
};
export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
