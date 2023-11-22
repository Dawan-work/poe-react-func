function CustomBtn({onClick, children, ...props}) {
  return (
    <button
     onClick={onClick} 
     className='flex gap-3 font-bold text-lg bg-cyan-200 text-slate-800 my-5 shadow rounded px-3 py-1 hover:bg-cyan-400 hover:text-white'
     {...props}
     >   
       {children}
    </button>
  )
}

export default CustomBtn

