const PrimaryButton = ({ type, children, mainColor = '#000', hoverColor = '#F7374F', className }) => {
  return (
    <button
      type={type || 'button'}
      className={`bg-[${mainColor}] text-white text-xs px-10 py-4 uppercase font-semibold hover:bg-[${hoverColor}] transition-colors duration-300 cursor-pointer ${className}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
