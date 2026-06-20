export default function Backdrop() {
  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      <div className="caustics" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
    </>
  );
}
