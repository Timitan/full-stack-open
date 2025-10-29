const Notification = ({ message, isError }) => {
    if (message === '' || message == null) {
        return null
    }

    const notificationStyle = {
        backgroundColor: 'lightgrey',
        border: 'solid',
        borderColor: isError ? 'red' : 'green',
        borderWidth: 5,
        borderRadius: 5,
        padding: 4,
        marginBottom: 5,
    }

    const headerStyle = {
        color: isError ? 'red' : 'green',
    }

    return (
        <div style={notificationStyle}>
            <h2 style={headerStyle}>{message}</h2>
        </div>
    );
}

export default Notification;