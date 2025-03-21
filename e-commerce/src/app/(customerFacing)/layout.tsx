import { Nav, NavLink } from "../components/Nav";

// This line disables caching for admin route
export const dynamic = "force-dynamic";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/products"}>Products</NavLink>
        <NavLink href={"/orders"}>My Orders</NavLink>
      </Nav>
      <div className="container my-6 mx-auto">{children}</div>
    </>
  );
}
