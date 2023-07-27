

export default function Card({ title, children }: any) {
  return (
    <div className="block max-w-sm p-6 mx-5 sm:mx-0 bg-zinc-800 rounded-lg shadow-lg">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
      {children}
    </div>
  );
}