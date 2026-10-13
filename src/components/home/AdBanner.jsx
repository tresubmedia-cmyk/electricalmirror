import { ads } from '../../data/ads.js';

export default function AdBanner() {
  return (
    <section className="ads" aria-label="Advertisements">
      {ads.map((a) => (
        <a key={a.id} href={a.href} target="_blank" rel="noopener noreferrer" className="ad">
          {a.image
            ? <img src={a.image} alt={a.alt} width={a.width} height={a.height} />
            : <span className="ad-empty" style={{ width: a.width, height: a.height }}>{a.alt}</span>}
        </a>
      ))}
    </section>
  );
}