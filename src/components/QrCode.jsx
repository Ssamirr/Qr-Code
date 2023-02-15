import React, { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react';
import { toast } from 'react-toastify';

function QrCode() {

    const [value, setValue] = useState("");
    const [qr, setQr] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (value.trim().length === 0) {
            toast.error("You must fill in input")
        } else {
            setQr(value);
            setValue("");
            toast.success("Now you can use QR code")
        }

    }

    return (
        <div className='app'>
            <div className='main'>
                <h1>Qr Code Generator</h1>
                <form onSubmit={handleSubmit}>
                    <input required value={value} onChange={(e) => setValue(e.target.value)} />
                    <button>Generate QR</button>
                </form>
                <QRCodeSVG value={qr} />
            </div>
        </div>
    )
}

export default QrCode