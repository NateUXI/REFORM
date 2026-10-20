import BackgroundImage from "./BackgroundImage";
import CtaButton from "./CtaButton";
import { images } from "@/lib/assets";

export default function Hero() {
  return (
    <div className="framer-ad1w2p" data-framer-name="Hero">
      <div className="framer-1906qq4" data-framer-name="Hero Content">
        <div className="framer-iqer08" data-framer-name="Introduction">
          <div
            className="framer-3h88gp"
            data-framer-name="Eyebrow"
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text framer-styles-preset-1qscw88"
              dir="auto"
              style={{ "--framer-text-color": "var(--token-5a9e5d03-2a22-4d9f-af03-b566ac440aed)" }}
            >
              BIG IDEAS. ZERO BOUNDARIES.
            </p>
          </div>
          <div
            className="framer-1wehyzl"
            data-framer-name="Headline"
            data-framer-component-type="RichTextContainer"
          >
            <h1
              className="framer-text framer-styles-preset-fe9ady"
              dir="auto"
              style={{
                "--framer-text-alignment": "start",
                "--framer-text-color": "rgb(255, 255, 255)",
              }}
            >
              <span className="framer-text" style={{ color: "rgb(255, 255, 255)" }}>
                THE INFINITE CANVAS{" "}
              </span>
              <span style={{ whiteSpace: "nowrap" }}>
                <span className="framer-text" style={{ color: "rgb(255, 255, 255)" }}>
                  FOR{" "}
                </span>
                <span
                  data-text-fill="true"
                  style={{
                    backgroundImage:
                      "linear-gradient(110deg, var(--token-5a9e5d03-2a22-4d9f-af03-b566ac440aed, rgb(51, 161, 208)) 0%, rgb(51, 164, 112) 100%)",
                  }}
                  className="framer-text"
                >
                  ALL
                </span>
              </span>
              <span
                data-text-fill="true"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, var(--token-5a9e5d03-2a22-4d9f-af03-b566ac440aed, rgb(51, 161, 208)) 0%, rgb(51, 164, 112) 100%)",
                }}
                className="framer-text"
              >
                {" "}DESIGNERS
              </span>
            </h1>
          </div>
          <div className="framer-1vb8opo">
            <CtaButton
              variant="primary"
              href="/get-reform"
              containerClassName="framer-1o752sx-container"
            >
              GET REFORM
            </CtaButton>
            <CtaButton
              variant="secondary"
              href="/get-reform"
              containerClassName="framer-qachv6-container"
            >
              OPEN IN BROWSER
            </CtaButton>
          </div>
          <div
            className="framer-gz9hj"
            data-framer-name="Introduction Text"
            data-framer-component-type="RichTextContainer"
          >
            <p className="framer-text framer-styles-preset-1jfw6q" dir="auto">
              Your inspiration, all in one place. Board images, brainstorm freely, and take your
              next big idea wherever life takes you.
            </p>
          </div>
          <div
            className="framer-xxrk0o"
            data-framer-name="Caption"
            data-framer-component-type="RichTextContainer"
          >
            <p
              className="framer-text framer-styles-preset-1qscw88"
              dir="auto"
              style={{ "--framer-text-color": "var(--token-8d3da0b0-16c2-44ac-ab86-3624e12f237c)" }}
            >
              YOUR IDEAS. ALWAYS WITH YOU.
            </p>
          </div>
        </div>

        <div
          className="framer-dtr8bg"
          data-framer-name="Phone Preview"
          style={{ willChange: "transform" }}
        >
          <div className="framer-1wcejtw" data-framer-name="New Login Phone">
            <BackgroundImage image={images.loginPhone} />
          </div>
          {/* The board phone is cropped on desktop/tablet and shown whole on mobile. */}
          <div className="ssr-variant hidden-1mce12s">
            <div className="framer-1o52dm" data-framer-name="New Board Phone">
              <BackgroundImage image={images.boardPhone} />
            </div>
          </div>
          <div className="ssr-variant hidden-72rtr7 hidden-is426d">
            <div className="framer-1o52dm" data-framer-name="New Board Phone">
              <BackgroundImage image={images.boardPhone} fit="contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
