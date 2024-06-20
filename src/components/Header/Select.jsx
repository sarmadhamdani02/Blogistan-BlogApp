import React, {userId} from 'react'

const Select = ({
    options,
    label,
    className = '',
    ...props
}, ref) => {
  let id  = userId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=''><label/>}
      <select id={id} ref={ref} {...props}  className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
        {optoins?.map((option)=>{
          <option key = {option} value={option}>
            {option}
          </option>
        })}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)