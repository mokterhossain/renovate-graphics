import styles from "./ServicesIntroSection.module.css";

interface Feature {
  title: string;
  icon: string;   // SVG path in public/icons folder
  description: string;
}

const features: Feature[] = [
  {
    title: "Fast Turnaround",
    icon: "/icons/clock.svg",
    description: "Receive fully edited photos within 24‑48 hours.",
  },
  {
    title: "High-Quality Retouching",
    icon: "/icons/brush.svg",
    description: "From portrait to product — professional editing at scale.",
  },
  {
    title: "Affordable Rates",
    icon: "/icons/dollar.svg",
    description: "Competitive pricing starting from just $X per image.",
  },
  {
    title: "Unlimited Revisions",
    icon: "/icons/revision.svg", // you'll need to add this icon to public/icons
    description: "We won’t stop until you’re 100% happy with the result.",
  },
];

const ServicesIntroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Professional Photo Retouching for Photographers & Studios
        </h2>
        <p className={styles.subtitle}>
          For over two decades, we've been helping photographers and brands worldwide enhance their images with expert editing and retouching.
        </p>

        <div className={styles.features}>
          {features.map(({ icon, title, description }) => (
            <div key={title} className={styles.card}>
  <div className={styles.icon}>
    <img src={icon} alt={title} />
  </div>
  <h3 className={styles.featureTitle}>{title}</h3>
  <p className={styles.featureDescription}>{description}</p>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesIntroSection;
