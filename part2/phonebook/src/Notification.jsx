const Notification = ({ message }) => {
    if (message === '' || message == null) {
        return null
    }

    const notificationStyle = {
        backgroundColor: 'lightgrey',
        border: 'solid',
        borderColor: 'green',
        borderWidth: 5,
        borderRadius: 5,
        padding: 4,
        marginBottom: 5,
    }

    const headerStyle = {
        color: 'green',
    }

    return (
        <div style={notificationStyle}>
            <h2 style={headerStyle}>{message}</h2>
        </div>
    );
}

export default Notification;