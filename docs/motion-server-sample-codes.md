---
id: motion-server-sample-codes
title: Ethernet Motion Server Sample Codes
sidebar_label: Sample Codes
---

## Sending multiple ASCII commands to motor drives

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
      print('{}: {}'.format(command, data.decode('ascii')))

    sock.close()

main()
```
<!--JavaScript-->

```js
const net = require('net')

const socket = net.createConnection(5000, '10.1.10.65');

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

const writeOne = command => new Promise((resolve, reject) => {
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
    console.log(`${command}: ${response}`);
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

const run = async commands => {
  for (let i = 0; i < commands.length; i++) {
    await writeOne(commands[i]);
  }
}

run(commands)
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
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#include <sys/socket.h>
#include <sys/types.h>

#include <netinet/in.h>
#include <arpa/inet.h>

#define PORT 5000
#define IP_ADDR "10.1.10.65"

int main() {
  // create a socket
  int client, ret;

  struct sockaddr_in server_addr;

  client = socket(AF_INET, SOCK_STREAM, 0);

  memset(&server_addr, '\0', sizeof(server_addr));

  server_addr.sin_family = AF_INET;
  server_addr.sin_port = htons(PORT);
  server_addr.sin_addr.s_addr = inet_addr(IP_ADDR);

  ret = connect(client, (struct sockaddr*) &server_addr, sizeof(server_addr));
  if (ret < 0) {
    printf("Connection failed, code %d\n", ret);
    return ret;
  }

  char commands[][256] = {
    "s r0x70 2 0",
    "s r0xc8 256",
    "s r0xca -200000",
    "s r0xcb 1000000",
    "s r0xcc 2000000",
    "s r0xcd 2000000",
    "s r0x24 31",
    "t 1"
  };

  size_t i;
  for (i = 0; i < sizeof(commands) / sizeof(commands[0]); i++) {
    printf("%s: ", commands[i]);
    strcat(commands[i], "\r");
    size_t len = strlen(commands[i]);
    char * shorten_command = (char *) malloc(len);
    memcpy(shorten_command, commands[i], len);
    ret = send(client, shorten_command, len, 0);
    if (ret < 0) {
      printf("failed, code %d\n", ret);
      return ret;
    }

    char response[256];
    ret = recv(client, &response, sizeof(response), 0);
    if (ret < 0) {
      printf("failed, code %d\n", ret);
      return ret;
    }
    printf("%s\n", response);
  }

  ret = close(client);
  if (ret < 0) {
    printf("Disconnection failed, code %d\n", ret);
    return ret;
  }

  return 0;
}
```
<!--C#-->

```CNET
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Net.Sockets;

namespace TCPSocketClient
{
    class Program
    {
        static void Main(string[] args)
        {
            string ipAddrString = "10.1.10.65";
            int port = 5000;
            IPAddress ipAddr = IPAddress.Parse(ipAddrString);
            IPEndPoint imacETHEndPoint = new IPEndPoint(ipAddr, port);

            Socket client = new Socket(
                ipAddr.AddressFamily,
                SocketType.Stream,
                ProtocolType.Tcp
            );

            client.Connect(imacETHEndPoint);

            Console.WriteLine("Connected to {0}", client.RemoteEndPoint.ToString());

            string[] commands = new string[]
            {
                "s r0x70 2 0",
                "s r0xc8 256",
                "s r0xca -200000",
                "s r0xcb 1000000",
                "s r0xcc 2000000",
                "s r0xcd 2000000",
                "s r0x24 31",
                "t 1"
            };

            for (int i = 0; i < commands.Length; i++)
            {
                byte[] command = Encoding.ASCII.GetBytes(commands[i] + "\r");
                int byteSent = client.Send(command);

                byte[] response = new byte[512];
                int byteRecv = client.Receive(response);

                Console.WriteLine(
                    "{0}: {1}",
                    commands[i],
                    Encoding.ASCII.GetString(response, 0, byteRecv)
                );
            }

            client.Shutdown(SocketShutdown.Both);
            client.Close();

            Console.Write("Press any key to exit");
            Console.ReadLine();
        }
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->
