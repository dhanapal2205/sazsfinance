import React from 'react'

const CzDropdown = (props) => {
    const { label, value, onChange, className = '', isHorizontal = false } = props;
  return (
    <div className={`${className} pt-2 `}>``
    {label && <p className="text-xs mb-2">{label}</p>}
    <select
        className="placeholder:!text-xs active:!border-[#4c9aff] focus:!border-2 focus:outline-none focus-within:!border-[#4c9aff] focus:!border-[#4c9aff] px-2 h-8 border w-full border-slate-300 bg-slate-200 shadow-sm !rounded-sm focus:!bg-white"
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
  

    />
</div>
  )
}

export default CzDropdown