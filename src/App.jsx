import './App.css'

const photos = [
  { src: '/image1.jpeg', alt: 'A joyful moment with family' },
  { src: '/imade2.jpeg', alt: 'A candid moment full of personality' },
  { src: '/image3.jpeg', alt: 'A special memory together' },
  { src: '/image4.jpeg', alt: 'A wonderful family occasion' },
  { src: '/image5.jpeg', alt: 'One more reason to smile' },
]

function App() {
  return (
    <main className="article">
      <header className="hero">
        <img
          className="hero__image"
          src="/image1.jpeg"
          alt="My sister-in-law"
        />
        <div className="hero__shade" />
        <div className="hero__content">
          <p className="eyebrow">A tribute, with love</p>
          <h1>The Beautiful Chaos of My Sister-in-Law</h1>
          <p className="dek">
            She is wonderful. She is a little annoying. And somehow, she makes
            every family moment better.
          </p>
        </div>
      </header>

      <article className="story">
        <p className="lead">
          Some people enter a family and simply join the picture. She entered
          it and changed the entire composition.
        </p>

        <p>
          She is the kind of person who arrives with opinions, energy, and a
          story that somehow becomes louder the longer it continues. She asks
          questions nobody else remembered to ask. She notices the smallest
          details. She has the remarkable ability to turn an ordinary afternoon
          into a memory we will still be laughing about years from now.
        </p>

        <figure className="pull-photo pull-photo--right">
          <img src="/imade2.jpeg" alt="A candid smile" />
          <figcaption>Impossible to ignore. Easy to love.</figcaption>
        </figure>

        <h2>The wonderfully annoying parts</h2>
        <p>
          Yes, there are moments when she tests everyone’s patience. She may
          know exactly where the conversation is going and still interrupt
          everyone to say, “Wait, wait, wait.” She can argue an innocent detail
          until it becomes a family debate. She remembers everything—and is
          perfectly willing to bring it up at the most inconvenient time.
        </p>
        <p>
          But that same persistence is why she shows up. The reason she asks
          again is that she cares. The reason she notices is that she is paying
          attention. Her annoying little habits are proof that she is fully
          present: opinionated, committed, and impossible to forget.
        </p>

        <blockquote>
          “The best people are not always the easiest people.
          They are the ones who make life feel more alive.”
        </blockquote>

        <h2>The amazing parts are everywhere</h2>
        <p>
          She brings warmth into a room without waiting for permission. She can
          make people feel included, heard, and celebrated. Her strength is
          not polished or quiet; it is real, generous, and fiercely protective
          of the people she loves.
        </p>

        <div className="photo-strip" aria-label="Family photo gallery">
          {photos.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>

        <h2>Beautiful, because she is real</h2>
        <p>
          She does not need to be perfect to be wonderful. She is honest about
          what she thinks, loyal about who she loves, and brave enough to be
          completely herself. Even her flaws have a strange kind of beauty,
          because they belong to someone who gives the rest of herself so openly.
        </p>
        <p>
          She is the person who adds spice to the family recipe: sometimes a
          little too much, occasionally overwhelming, but always the reason
          nobody would call the result bland. Life is calmer without her
          chatter, but it is also quieter in all the ways we would miss.
        </p>

        <section className="video-section">
          <div>
            <p className="eyebrow">In motion</p>
            <h2>Moments that say it all</h2>
          </div>
          <div className="video-grid">
            <figure>
              <video controls preload="metadata">
                <source src="/video4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption>One of those moments you replay.</figcaption>
            </figure>
            <figure>
              <video controls preload="metadata">
                <source src="/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <figcaption>And one more reason to smile.</figcaption>
            </figure>
          </div>
        </section>

        <div className="closing">
          <p>
            To my sister-in-law: thank you for being so much—a lot, at times,
            absolutely amazing, occasionally annoying, and endlessly wonderful.
            We would not trade you for anyone else.
          </p>
          <span>With love</span>
        </div>
      </article>
    </main>
  )
}

export default App
