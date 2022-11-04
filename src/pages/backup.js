{inputFields.map((input, index) => {
    return (
        <div className='block p-4 shadow-lg rounded-lg border-black md:flex'>
            <input name="name" placeholder='Nama'
            value={input.name}
            onChange={event => handleFormChange(index, event)} 
            className="border rounded-md mx-2 p-2"/>
            <input name="phone" placeholder='Telepon'
            value={input.phone}
            onChange={event => handleFormChange(index, event)}
            className="border rounded-md mx-2 p-2"/>
            <input name="email" placeholder='Email'
            value={input.email}
            onChange={event => handleFormChange(index, event)}
            className="border rounded-md mx-2 p-2"/>
            <input name="address" placeholder='Alamat'
            value={input.address}
            onChange={event => handleFormChange(index, event)} className="border rounded-md mx-2 p-2"/>
            {index !== 0 && 
            <button type='button' className='bg-red-600 text-white rounded-md mx-2 p-2' onClick={() => removeField(index)}>Delete</button>}
        </div>
    )
})}