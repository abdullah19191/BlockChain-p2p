const WS = require("ws");

const server = new WS.Server({ port: 8000 });

server.on("connection", async (socket, req) => {

});

const socket = new WS();

socket.on("open", () => {
 })

socket.on("close", () => {
 
})

socket.on("message", message => {
    
})

server.on("connection", async(socket, req) => {
 
    socket.on("message", message => {
         
        const _message = JSON.parse(message);

        switch(_message.type) {
            case "TYPE_HANDSHAKE":
                const nodes = _message.data;

                nodes.forEach(node => connect(node))

    
        }
    })
});

async function connect(address) {
    
    const socket = new WS(address);

 
    socket.on("open", () => {
        
        socket.send(JSON.stringify(produceMessage("TYPE_HANDSHAKE", [MY_ADDRESS])));
    });
}