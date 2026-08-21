import Image from 'next/image';

export default function EnglishPlaceholder() {
  return (
    <main className="en-page">
      <div className="en-card">
        <div className="brand en-brand">
          <span className="brand-mark">HX</span>
          <span className="brand-name">Han Xing</span>
        </div>
        <div className="en-copy">
          <p className="en-label">ENGLISH VERSION</p>
          <h1>English portfolio<br />coming next.</h1>
          <p>The folder and route are ready. Content will be translated and refined after the Chinese version is finalized.</p>
          <span className="en-status">Structure ready · Content pending</span>
        </div>
        <div className="en-visual" aria-hidden="true">
          <span className="en-shape" />
          <Image src="/images/nav-contact.png" width={800} height={800} alt="" />
        </div>
      </div>
    </main>
  );
}
