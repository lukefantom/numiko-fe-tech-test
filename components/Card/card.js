export default function Card({ title, info, stats, image }) {
  return (
    <div className="card">
      <div className="card__hero">{image && <img src={image} alt={title} />}</div>
      <div className="card__content p-10 md:p-12 lg:p-16">
        {title && (
          <header className="card__header mb-4">
            <h2 className="text-3xl font-bold">{title}</h2>
          </header>
        )}
        {info && (
          <div className="card__info mb-6">
            <p>{info}</p>
          </div>
        )}
        {stats && (
          <footer className="card__footer">
            {stats.map((item, index) => {
              return (
                index < 4 && (
                  <div key={index} className="card__stat-container my-3">
                    <h3 className="card__stat-title text-xl font-bold">{item?.title}</h3>
                    <h4 className="card__stat-info">{item?.info}</h4>
                  </div>
                )
              );
            })}
          </footer>
        )}
      </div>
    </div>
  );
}
