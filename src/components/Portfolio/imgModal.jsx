
import style from "./imgModal.module.css";

export default function ImageModal({ src, onClose }) {
  if (!src) return null;

  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="Selected" className={style.modalImage} />
      </div>
    </div>
  );
}
