import styles from "./ElementShowcase.module.css";

const ELEMENTS = [
  { title: "3D Models", type: "model" },
  { title: "Images", type: "image" },
  { title: "Text", type: "text" },
] as const;

export default function ElementShowcase() {
  return (
    <section className={styles.section} aria-label="Reform canvas elements">
      <h2 className={styles.heading} data-scroll-reveal>
        Canvas elements for <span>every project.</span>
      </h2>
      <div className={styles.grid}>
        {ELEMENTS.map((element) => (
          <article
            className={`${styles.card} ${styles[element.type]}`}
            data-scroll-reveal
            data-scroll-reveal-delay={String(ELEMENTS.indexOf(element))}
            key={element.type}
          >
            <h3 className={styles.label}>
              <span className={styles.labelText}>{element.title.toUpperCase()}</span>
              <span className={styles.labelGradient} aria-hidden="true">
                {element.title.toUpperCase()}
              </span>
            </h3>
            {element.type === "model" && (
              <img
                className={styles.artwork}
                src="/images/showcase-3d-model.png"
                alt="A faceted 3D model displayed on a dark canvas"
              />
            )}
            {element.type === "image" && (
              <img
                className={styles.artwork}
                src="/images/showcase-image.png"
                alt="Blue-toned illustrated image arranged on a canvas"
              />
            )}
            {element.type === "text" && (
              <div className={styles.textCanvas}>
                <div className={styles.toolbar} aria-hidden="true">
                  <div className={styles.toolbarActions}>
                    <span className={styles.toolbarIcon}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 19V5m-7 7 7-7 7 7" />
                      </svg>
                    </span>
                    <span className={styles.toolbarIcon}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14m-7-7 7 7 7-7" />
                      </svg>
                    </span>
                    <span className={styles.toolbarIcon}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="8" y="8" width="12" height="12" rx="2" />
                        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                      </svg>
                    </span>
                    <span className={styles.toolbarIcon}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="5" y="11" width="14" height="9" rx="2" />
                        <path d="M8 11V7a4 4 0 0 1 7.6-1.8" />
                      </svg>
                    </span>
                    <span className={`${styles.toolbarIcon} ${styles.trashIcon}`}>
                      <span />
                    </span>
                  </div>
                  <div className={styles.toolbarControls}>
                    <span className={styles.fontControl}>
                      Inter
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                    <span className={styles.sizeControl}>32</span>
                    <span className={styles.textControl}><i />TEXT</span>
                  </div>
                </div>
                <div className={styles.textSelection}>
                  <p className={styles.featureText}>Elements to allow ideas to Flourish</p>
                  {Array.from({ length: 8 }, (_, index) => (
                    <span className={styles.handle} key={index} />
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
