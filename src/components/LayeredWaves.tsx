import { waves } from "@/lib/assets";
import styles from "./LayeredWaves.module.css";

/** Faint decorative waves behind the hero. They slide in once on load. */
export default function LayeredWaves() {
  return (
    <div className="framer-4a4nsu-container" data-framer-name="Layered SVG Waves">
      <div className={styles.stage} aria-hidden="true">
        <img className={`${styles.wave} ${styles.back}`} src={waves[0]} alt="" />
        <img className={`${styles.wave} ${styles.front}`} src={waves[1]} alt="" />
      </div>
    </div>
  );
}
