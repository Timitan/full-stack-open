const PersonForm = ({addName, newName, handleNameChange, newPhone, handlePhoneChange}) => {
    return(
        <form>
            <div>
                name: <input value={newName} onChange={handleNameChange}/>
            </div>
            <div>
                phone: <input value={newPhone} onChange={handlePhoneChange}/>
            </div>
            <div>
            <button type="submit" onClick={addName}>add</button>
            </div>
        </form>
    );
}

export default PersonForm;