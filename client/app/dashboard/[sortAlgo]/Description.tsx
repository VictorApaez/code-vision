interface DescProp {
  desc: String;
}

export default function Description({ desc }: DescProp) {
  return (
    <>
      <h1 className="font-bold text-xl mb-4">Description</h1>
      <p>{desc}</p>
    </>
  );
}
