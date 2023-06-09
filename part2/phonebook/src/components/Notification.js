const Notification = ({ message, style }) => {
    if (message.message === null) {
      return null
    }
  
    return (
      <div className='error' style={message.type ? style : {}}>
        {message.message}
      </div>
    )
  }

  export default Notification