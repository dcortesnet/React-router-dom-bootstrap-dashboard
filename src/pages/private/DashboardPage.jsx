import { Link, Outlet } from "react-router-dom";

export function DashboardPage() {
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-2 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          Dashboard
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <Link to="/login" className="text-light">
              Cerrar sesión
            </Link>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row vh-100">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/home" className="text-primary">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/users" className="text-primary">
                    Usuarios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/articles" className="text-primary">
                    Artículos
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
