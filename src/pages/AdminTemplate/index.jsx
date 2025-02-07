import { Outlet } from "react-router-dom";

export default function AdminTemplate() {
  return (
    <div>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}
