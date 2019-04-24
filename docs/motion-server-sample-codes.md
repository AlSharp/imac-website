---
id: motion-server-sample-codes
title: Ethernet Motion Server Sample Codes
sidebar_label: Sample Codes
---

## How to write multiple ASCII commands
<!--DOCUSAURUS_CODE_TABS-->
<!--Python-->
```py
import socket

def main():
    host = '10.1.10.65'
    port = 5000
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect((host, port))
    commands = [
      's r0x70 2 0',
      's r0xc8 256',
      's r0xca 200000',
      's r0xcb 1000000',
      's r0xcc 2000000',
      's r0xcd 2000000',
      's r0x24 31',
      't 1'
    ]
    for command in commands:
      sock.send(bytes('{0}\r'.format(command), encoding="utf-8"))
      data = sock.recv(1024)
      print('Received data: ', data.decode('ascii'))

    sock.close()

main()
```
<!--JavaScript-->
```js
const net = require('net')

console.log('run');

const socket = net.createConnection(5000, '10.1.10.65', () => {
  console.log('connected to IMAC.ETH');
})

socket.on('end', () => {
  console.log('disconnected from IMAC.ETH')
})

const commands = [
  's r0x70 2 0',
  's r0xc8 256',
  's r0xca 200000',
  's r0xcb 1000000',
  's r0xcc 2000000',
  's r0xcd 2000000',
  's r0x24 31',
  't 1'
]

const writeOne = (socket, command) => new Promise((resolve, reject) => {
  let timeout;
  let errorHandler, responseHandler;
  errorHandler = error => {
    socket.removeListener('data', responseHandler);
    reject(error);
    return;
  }
  responseHandler = res => {
    socket.removeListener('error', errorHandler);
    let response = res.toString('utf8');
    console.log('RESPONSE: ', response);
    clearTimeout(timeout);
    if (response.slice(0, 1) === 'v') {
      resolve(response.slice(2));
      return;
    } else if (response.slice(0, 1) === 'e') {
      reject(response);
      return;
    } else {
      resolve(response);
      return;
    }
  }
  timeout = setTimeout(() => {
    socket.removeListener('data', responseHandler);
    socket.removeListener('error', errorHandler);
    reject('WRITE TIMEOUT');
    return;
  }, 300);
  socket.write(command + '\r', 'ascii');
  socket.once('error', errorHandler);
  socket.once('data', responseHandler);
})

const write = async (socket, commands) => {
  for (let i = 0; i < commands.length; i++) {
    await writeOne(socket, commands[i]);
  }
}

write(socket, commands)
  .then(() => {
    socket.end();
  })
  .catch(error => {
    console.log('CATCH ERROR: ', error);
    socket.end();
  })
```
<!--C-->
```C

```

<!--C#-->
```CNET

```
<!--VB.NET-->
```VBNET

```

<!--END_DOCUSAURUS_CODE_TABS-->
