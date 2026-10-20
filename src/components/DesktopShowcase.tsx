import DesktopCarousel from "./DesktopCarousel";

export default function DesktopShowcase() {
  return (
    <>
      <div className="framer-1h9pl6d" data-framer-name="Desktop Showcase" id="desktop">
        <div
          className="framer-1y4iga7"
          data-framer-name="Desktop Heading"
          data-framer-component-type="RichTextContainer"
          data-scroll-reveal
        >
          <h2 className="framer-text framer-styles-preset-1fpslbf" dir="auto">
            <span className="framer-text" style={{ color: "rgb(255, 255, 255)" }}>
              A bigger space for your next{" "}
            </span>
            <span
              data-text-fill="true"
              style={{
                backgroundImage:
                  "linear-gradient(110deg, rgb(51, 161, 208) 0%, rgb(51, 164, 112) 100%)",
              }}
              className="framer-text"
            >
              big idea.
            </span>
          </h2>
        </div>
        <div
          className="framer-1mam3u4"
          data-framer-component-type="RichTextContainer"
          data-scroll-reveal
          data-scroll-reveal-delay="1"
        >
          <p className="framer-text framer-styles-preset-1jfw6q" dir="auto">
            Your boards, at home on desktop. Keep collecting and creating with room to see the whole
            picture.
          </p>
        </div>
      </div>
      <DesktopCarousel />
    </>
  );
}
