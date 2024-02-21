export function ArticlesListPage() {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Listado de artículos</h1>
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
              <th scope="col">ID Artículo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Marca</th>
              <th scope="col">Peso</th>
              <th scope="col">Vencimiento</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>12345</td>
              <td>Camisa</td>
              <td>50</td>
              <td>Zara</td>
              <td>0.2 kg</td>
              <td>31-12-2024</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm">
                  Ver detalles
                </button>
              </td>
            </tr>
            <tr>
              <td>67890</td>
              <td>Pantalón</td>
              <td>30</td>
              <td>Levi's</td>
              <td>0.5 kg</td>
              <td>28-02-2023</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm">
                  Ver detalles
                </button>
              </td>
            </tr>
            <tr>
              <td>24680</td>
              <td>Zapatos</td>
              <td>20</td>
              <td>Nike</td>
              <td>0.3 kg</td>
              <td>15-06-2023</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm">
                  Ver detalles
                </button>
              </td>
            </tr>
            <tr>
              <td>13579</td>
              <td>Reloj</td>
              <td>10</td>
              <td>Casio</td>
              <td>0.1 kg</td>
              <td>10-10-2025</td>
              <td>
                <button type="button" className="btn btn-primary btn-sm">
                  Ver detalles
                </button>
              </td>
            </tr>
            <tr>
              <td>86420</td>
              <td>Computadora portátil</td>
              <td>5</td>
              <td>Apple</td>
              <td>2 kg</td>
              <td>20-08-2026</td>
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
