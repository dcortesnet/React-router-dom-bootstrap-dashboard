export function UserListPage() {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Listado de usuarios</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Compartir
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Exportar
            </button>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Área</th>
              <th scope="col">Cargo</th>
              <th scope="col">Email</th>
              <th scope="col">Ingreso</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7839</td>
              <td>Rey King</td>
              <td>Ventas</td>
              <td>Gerente de Ventas</td>
              <td>king@example.com</td>
              <td>17-11-1981</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm">
                  Ver detalles
                </button>
              </td>
            </tr>
            <tr>
              <td>7566</td>
              <td>Jones Jones</td>
              <td>Recursos Humanos</td>
              <td>Analista de Recursos Humanos</td>
              <td>jones@example.com</td>
              <td>02-04-1981</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm">
                  Ver detalles
                </button>
              </td>
            </tr>
            <tr>
              <td>7698</td>
              <td>Blake Blake</td>
              <td>Finanzas</td>
              <td>Contador</td>
              <td>blake@example.com</td>
              <td>01-05-1981</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm">
                  Ver detalles
                </button>
              </td>
            </tr>
            <tr>
              <td>7782</td>
              <td>Clark Clark</td>
              <td>Marketing</td>
              <td>Director de Marketing</td>
              <td>clark@example.com</td>
              <td>09-06-1981</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm">
                  Ver detalles
                </button>
              </td>
            </tr>
            <tr>
              <td>7788</td>
              <td>Scott Scott</td>
              <td>Producción</td>
              <td>Supervisor de Producción</td>
              <td>scott@example.com</td>
              <td>19-04-1987</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm">
                  Ver detalles
                </button>
              </td>
            </tr>
            <tr>
              <td>7902</td>
              <td>Ford Ford</td>
              <td>Tecnología de la Información</td>
              <td>Ingeniero de Software</td>
              <td>ford@example.com</td>
              <td>03-12-1981</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm">
                  Ver detalles
                </button>
              </td>
            </tr>
            <tr>
              <td>7934</td>
              <td>Miller Miller</td>
              <td>Ventas</td>
              <td>Vendedor</td>
              <td>miller@example.com</td>
              <td>23-01-1982</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm">
                  Ver detalles
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
