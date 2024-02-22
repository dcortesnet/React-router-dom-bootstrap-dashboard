export function HomePage() {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Panel de Administrador</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">Usuarios</div>
              <div className="card-body">
                <h5 className="card-title">Total</h5>
                <p className="card-text">1500</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success mb-3">
              <div className="card-header">Artículos</div>
              <div className="card-body">
                <h5 className="card-title">Total</h5>
                <p className="card-text">500</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-warning mb-3">
              <div className="card-header">Pedidos</div>
              <div className="card-body">
                <h5 className="card-title">Total</h5>
                <p className="card-text">300</p>
              </div>
            </div>
          </div>
        </div>
        <div className="alert alert-info" role="alert">
          <h4 className="alert-heading">Indicaciones:</h4>
          <p>
            Este es un panel de administrador básico que muestra algunos números
            importantes. Puedes personalizarlo según tus necesidades
            específicas.
          </p>
          <hr />
          <p className="mb-0">
            ¡No dudes en agregar más funcionalidades y estilos!
          </p>
        </div>
      </div>
    </>
  );
}
