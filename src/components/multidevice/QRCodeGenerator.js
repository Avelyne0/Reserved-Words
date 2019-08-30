import React from 'react'
const QRCode = require('qrcode.react');

export default function QRCodeGenerator({gameId}) {
  return (
    <div>
        <QRCode value={gameId} />
    </div>
  )
}
