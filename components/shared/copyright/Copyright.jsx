import s from "./Copyright.module.css";

export default function Copyright() {
  return (
    <div className={s.copyright}>
      <div className="container">
        <p className={s.copyright__text}>
          Copyright &copy; 2021 <span style={{ fontWeight: "700" }}>Faaris</span>. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}
