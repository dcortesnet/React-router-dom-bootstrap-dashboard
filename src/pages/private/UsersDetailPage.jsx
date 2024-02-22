import { useParams } from "react-router-dom";

export function UserDetailPage() {
  const params = useParams(); // {userId: '12345'}
  return (
    <>
      <h1>Usuario №{params.userId}</h1>
      <div className="row">
        <div className="col">
          <div className="card text-bg-primary mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-bg-info mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-bg-primary mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-bg-info mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
