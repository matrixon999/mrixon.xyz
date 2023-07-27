

export default function FancyCard({ title, children, img, dst }: any) {
    return (
      <div className="max-w-sm mx-5 sm:mx-0 bg-zinc-800 rounded-lg shadow-lg">
        <a href={dst}>
            <img className="rounded-t-lg" src={img}/>
        </a>
        <a href={dst}>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                {children}
            </div>
        </a>
      </div>
    );
  }