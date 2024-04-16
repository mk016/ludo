import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <header className={styles.screenshot20240416At155Parent}>
      <img
        className={styles.screenshot20240416At155}
        loading="lazy"
        alt=""
        src="/screenshot-20240416-at-155-1@2x.png"
      />
      <div className={styles.menu111Wrapper}>
        <img
          className={styles.menu111Icon}
          loading="lazy"
          alt=""
          src="/menu11-1.svg"
        />
      </div>
      <div className={styles.homeParent}>
        <b className={styles.home}>Home</b>
        <b className={styles.discover}>Discover</b>
        <b className={styles.specialDeals}>Special Deals</b>
        <b className={styles.discover}>Contact</b>
      </div>
    </header>
  );
};

export default FrameComponent;
