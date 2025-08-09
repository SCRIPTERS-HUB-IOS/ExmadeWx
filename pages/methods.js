import Link from 'next/link';
import ParticleBackground from '../components/ParticleBackground';

export default function Methods({ brightness, setBrightness }) {
  return (
    <>
      <ParticleBackground />
      <main className="container">
        <header className="header">
          <h1 className="logo">exmade</h1>
          <div className="controls">
            <input
              aria-label="Brightness slider"
              type="range"
              min="0.5"
              max="1.5"
              step="0.05"
              value={brightness}
              onChange={e => setBrightness(parseFloat(e.target.value))}
              className="brightness-slider"
            />
          </div>
        </header>

        <section className="content methods-content">
          {[
            { name: 'SPLUNK', link: 'https://app.splunk.gg/u/exmadeGG' },
            { name: 'INJURIES', link: 'https://www.logged.tg/auth/exmade' },
            { name: 'HyperLink Gen', link: 'https://dsprs.vercel.app/hyperlink' },
            { name: 'Cookie Bypasser', link: 'https://app.splunk.gg/u/exmadeGG' },
          ].map(({ name, link }) => (
            <a
              className="link-card"
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <div className="ln">{name}</div>
              <div className="sub">Open in new tab</div>
            </a>
          ))}

          <nav className="btn-row" aria-label="Navigation buttons">
            <Link href="/" passHref>
              <a className="btn small">Go Back</a>
            </Link>
          </nav>
        </section>
      </main>
    </>
  );
}
