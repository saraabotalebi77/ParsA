import { useRef } from "react";

export default function AddRule() {
  const DialogRef = useRef<null|HTMLDialogElement>(null)
  return (
    <div>
      <dialog ref={DialogRef} className="right-[100px] open:right-[200px] transition-all duration-500">
        <button onClick={()=>DialogRef.current?.close()}>Close</button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
      <button onClick={()=>DialogRef.current?.showModal()}>Show the dialog</button>
    </div>
  );
}
