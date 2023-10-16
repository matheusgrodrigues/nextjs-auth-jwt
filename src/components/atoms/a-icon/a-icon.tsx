import styles from "./a-icon.module.css";

interface I_AIcon {
  icon: "pi-lock" | "pi-github" | "pi-linkedin" | "pi-sun";
}

export const A_Icon = ({ icon }: I_AIcon) => {
  return <i className={`${styles.a_icon} pi ${icon}`}></i>;
};
