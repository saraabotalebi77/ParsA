export default function Switch({ className , onChange}: { className?: string , onChange(): void }) {
  return (
    <div className="flex">
      <input className="peer/switch" id="switchDark" type="checkbox" hidden onChange={onChange} />
      <label
        className={`cursor-pointer relative h-6 w-10 rounded-3xl border border-current after:absolute after:right-[3px] after:top-1/2 after:h-4 after:w-4 after:-translate-y-1/2 after:rounded-full after:bg-current after:transition-all after:duration-300 peer-checked/switch:after:right-5 ${className}`}
        htmlFor="switchDark"
      ></label>
    </div>
  );
}
