import React, { useCallback, useEffect, useRef, useState } from 'react'

function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [specialAllowed, setSpecialAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numberAllowed) str += "0123456789"

        if (specialAllowed) str += "#@&$_-"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, numberAllowed, specialAllowed, setPassword]);

    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, specialAllowed, passwordGenerator]);

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])

    return (
        <div className='flex justify-center items-center bg-gray-100 p-3'>
            <div>
                <h1>Password generator</h1>
                <div className='flex justify-center items-center'>
                    <input type="text" className='w-full p-2 bg-white mt-5 rounded-sm'
                        readOnly
                        value={password}
                        ref={passwordRef}
                    />
                    <button className='bg-green-100 p-2 outline-none m-0 mt-5 rounded-md' onClick={copyPasswordToClipboard}>Copy</button>
                </div>
                <div className='flex justify-center items-center mt-5'>
                    <div className='mr-5 flex justify-center items-center mt-5'>
                        <input
                            type="range"
                            max={200}
                            value={length}
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label className='ml-2'>Length: {length}</label>
                    </div>

                    <div className='mr-5 flex justify-center items-center mt-5'>
                        <input type="checkbox" onChange={() => { setNumberAllowed((prev) => !prev) }} />
                        <label className='ml-2'>Include Number</label>
                    </div>

                    <div className='mr-5 flex justify-center items-center mt-5'>
                        <input type="checkbox" onChange={() => { setSpecialAllowed((prev) => !prev) }} />
                        <label className='ml-2'>Include Special character</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator