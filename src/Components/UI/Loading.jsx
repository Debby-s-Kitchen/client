




const Loading = ({Size = 40, color = "transparent"}) => {
  return (
     <div className="spinner"
    style={{
width:Size,
height:Size,
borderTopColor: color

    }}
    
    >
      
    </div>
  )
}

export default Loading
