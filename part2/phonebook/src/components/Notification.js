const Notification = ({ msg , status}) => {

    const setStyle = {
        color: 'blue',
        fontStyle: 'Arial',
        padding: "10px",
        fontSize: 40
      }

      const errorStyle = {
        color: 'red',
        fontStyle: 'Arial',
        padding: "10px",
        fontSize: 40
      }

    if (msg === null) {
      return null
    }

    if (status === "error") {
        return (
            <div style={errorStyle} className="errormsg">
              {msg}
            </div>
    )}
 
    else {
        return (
            <div style={setStyle} className="msg">
            {msg}
            </div>
    )}
}

export default Notification