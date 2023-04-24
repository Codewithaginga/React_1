import feature_1 from "../src/images/feature-1.png";

export default function Movies({ First, Second, Image }: any) {
  return (
    <div className="row">
      <div className="text-col">
        <h2>{First}</h2>
        <p>{Second}</p>
      </div>

      <div className="img-col">
        <img src={Image} />
      </div>
    </div>
  );
}
