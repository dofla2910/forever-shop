const PrimaryButton = ({ type, children, mainColor = '#000', hoverColor = '#F7374F', className }) => {
  return (
    <button
      type={type || 'button'}
      className={`text-white text-xs px-10 py-4 uppercase font-semibold transition-colors duration-300 cursor-pointer ${className}`}
      style={{
        backgroundColor: mainColor,
        transition: 'background-color 0.3s'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = mainColor)}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
