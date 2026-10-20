import CtaButton from "./CtaButton";

export default function Closing() {
  return (
    <div className="framer-2pqsye" data-framer-name="Closing">
      <div className="framer-1rxgazr" data-framer-component-type="RichTextContainer">
        <h2
          className="framer-text framer-styles-preset-1fpslbf"
          dir="auto"
          style={{ "--framer-text-alignment": "center", "--framer-text-color": "#F4F4F4" }}
          data-scroll-reveal
        >
          Your next big idea starts here.
        </h2>
      </div>
      <div className="framer-1o9psxe" data-scroll-reveal data-scroll-reveal-delay="1">
        <CtaButton
          variant="primary"
          href="/get-reform"
          containerClassName="framer-1tfq5i-container"
        >
          GET REFORM
        </CtaButton>
        <CtaButton
          variant="secondary"
          href="/get-reform"
          containerClassName="framer-1dg6dt3-container"
        >
          OPEN IN BROWSER
        </CtaButton>
      </div>
      <div className="framer-13gmu1d" data-framer-component-type="RichTextContainer">
        <p
          className="framer-text framer-styles-preset-1jfw6q"
          dir="auto"
          style={{ "--framer-text-alignment": "center", "--framer-text-color": "#A7A7A7" }}
          data-scroll-reveal
          data-scroll-reveal-delay="2"
        >
          The image boarding app for everyone.
        </p>
      </div>
    </div>
  );
}
