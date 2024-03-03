import Feature from "./Feature";
import featureLogo1 from "../assets/icon-access-anywhere.svg";
import featureLogo2 from "../assets/icon-security.svg";
import featureLogo3 from "../assets/icon-collaboration.svg";
import featureLogo4 from "../assets/icon-any-file.svg";

const featureData = [
  {
    icon: featureLogo1,
    title: "Access your files, anywhere",
    text: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    icon: featureLogo2,
    title: "Security you can trust",
    text: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    icon: featureLogo3,
    title: "Real-time collaboration",
    text: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    icon: featureLogo4,
    title: "Store any type of file",
    text: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        {featureData.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
