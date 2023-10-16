import styles from "./a-icon.module.css";

export type T_AIconList = "pi-lock" | "pi-github" | "pi-linkedin" | "pi-sun" | "pi-spin pi-cog";

interface I_AIcon {
  icon: T_AIconList;
}

export const A_Icon = ({ icon }: I_AIcon) => {
  return <i className={`${styles.a_icon} pi ${icon}`}></i>;
};
