const TicketList = require("./Ticket-list");


class Sockets {

    constructor( io ) {

        this.io = io;

        //instancia de ticketList
        this.ticketList = new TicketList()

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log('cliente conectado')


            socket.on('solicitar-ticket',(data,callback)=>{
              
                const nuevoTicket = this.ticketList.crearTicket()
                callback(nuevoTicket)
            })

            // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', ( data ) => {
                console.log( data );
                
                this.io.emit('mensaje-from-server', data );
            });
            
        
        });
    }


}


module.exports = Sockets;