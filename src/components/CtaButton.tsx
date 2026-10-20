import Link from "next/link";

const VARIANTS = {
  primary: {
    className: "framer-v-s2pzxa",
    background: "linear-gradient(110deg, rgb(51, 161, 208) 0%, rgb(51, 164, 112) 100%)",
    textColor: "#FFFFFF",
  },
  secondary: {
    className: "framer-v-6qub8c",
    background: "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(140, 140, 140) 100%)",
    textColor: "rgb(20, 24, 26)",
  },
} as const;

type Props = {
  href: string;
  variant: keyof typeof VARIANTS;
  /**
   * Each placement of a button has its own absolutely-positioned wrapper class
   * in framer.css (e.g. "framer-1o752sx-container").
   */
  containerClassName: string;
  children: string;
};

/** The pill-shaped call-to-action button used in the hero and closing sections. */
export default function CtaButton({ href, variant, containerClassName, children }: Props) {
  const v = VARIANTS[variant];
  return (
    <div className={containerClassName}>
      <Link
        href={href}
        className={`framer-a8RGM framer-s2pzxa ${v.className} framer-c05he8`}
        style={{ background: v.background, borderRadius: 100 }}
      >
        <div
          className="framer-12b2sh9"
          data-framer-name="Label"
          data-framer-component-type="RichTextContainer"
          style={{ "--extracted-r6o4lv": v.textColor }}
        >
          <p
            className="framer-text"
            dir="auto"
            style={{
              "--framer-font-size": "14px",
              "--framer-font-weight": "900",
              "--framer-text-color": `var(--extracted-r6o4lv, ${v.textColor})`,
            }}
          >
            {children}
          </p>
        </div>
      </Link>
    </div>
  );
}
