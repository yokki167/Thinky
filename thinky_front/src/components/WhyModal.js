import React from "react";
import modalStyles from "../styles/WhyModal.module.scss";

export default function WhyModal() {
  return (
    <div className={modalStyles.modalBox}>
      <div className={modalStyles.title}>
        Why?
        <br />
        「なぜ」を深掘りしよう！
      </div>
      <div className={modalStyles.subBox}>
        <div className={modalStyles.genreForm}>ジャンルを選択　▼</div>
        <form>
          <input type="checkbox" />
          <span className={modalStyles.shareCheck}>
            みんなに「Why?」を共有する
          </span>
        </form>
      </div>
      <input className={modalStyles.question} placeholder="「Why」を入力する" />
      <button className={modalStyles.button}>OK</button>
    </div>
  );
}
