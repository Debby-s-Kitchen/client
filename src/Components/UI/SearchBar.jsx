


export default function SearchBar({ 
  value, 
  onChange, 
  placeholder = "Search...", 
  className = "",
  showIcon = true,
  iconPosition = "left" // "left" or "right"
}) {
  return (
    <div className={`search-container ${className}`} style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
      
      {/* Search Icon */}
      {showIcon && (
        <span 
          className="search-icon-wrapper"
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            [iconPosition]: '12px',
            display: 'flex',
            alignItems: 'center',
            pointerEvents: 'none',
            color: '#6b7280'
          }}
        >
          <svg xmlns="http://w3.org" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      )}
         <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '10px',
          paddingLeft: showIcon && iconPosition === 'left' ? '38px' : '12px',
          paddingRight: showIcon && iconPosition === 'right' ? '38px' : '32px', // leaves room for clear button
          borderRadius: '6px',
          border: '1px solid #d1d5db',
          fontSize: '16px'
        }}
      />

      {/* Clear Button */}
      {value && (
        <button 
          onClick={() => onChange("")} 
          aria-label="Clear search"
          style={{
            position: 'absolute',
            top: '50%',
            right: '12px',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#9ca3af'
          }}
        >
          ✕
        </button>
        )}
    </div>
  );
}