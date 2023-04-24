export default function Movie2({ First, Second, Image }: any) {
  return (
    <div className="row">
      <div className="img-col">
        <img src={Image} />
      </div>
      <div className="text-col">
        <h2>{First}</h2>
        <p>{Second}</p>
      </div>
    </div>
  );
}
