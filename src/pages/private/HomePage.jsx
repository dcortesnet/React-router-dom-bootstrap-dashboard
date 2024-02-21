export function HomePage() {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Panel de Administrador</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card text-white bg-primary mb-3">
              <div class="card-header">Usuarios</div>
              <div class="card-body">
                <h5 class="card-title">Total</h5>
                <p class="card-text">1500</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-white bg-success mb-3">
              <div class="card-header">Artículos</div>
              <div class="card-body">
                <h5 class="card-title">Total</h5>
                <p class="card-text">500</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-white bg-warning mb-3">
              <div class="card-header">Pedidos</div>
              <div class="card-body">
                <h5 class="card-title">Total</h5>
                <p class="card-text">300</p>
              </div>
            </div>
          </div>
        </div>
        <div class="alert alert-info" role="alert">
          <h4 class="alert-heading">Indicaciones:</h4>
          <p>
            Este es un panel de administrador básico que muestra algunos números
            importantes. Puedes personalizarlo según tus necesidades
            específicas.
          </p>
          <hr />
          <p class="mb-0">
            ¡No dudes en agregar más funcionalidades y estilos!
          </p>
        </div>
      </div>
    </>
  );
}
