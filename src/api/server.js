const express = require('express');
const amqp = require('amqplib/callback_api');
const app = express();
const port = 3000; 

function publishToQueue(queue, message) {
    amqp.connect('amqp://bruno:bruno@rabbitmq:5672', (err, connection) => {
        if (err) {
            console.error(err);
            return;
        }
        connection.createChannel((err, channel) => {
            if (err) {
                console.error(err);
                return;
            }
            channel.assertQueue(queue, {
                durable: false
            });
            channel.sendToQueue(queue, Buffer.from(message));
            console.log(`Mensagem enviada: ${message}`);
        });

        
        setTimeout(() => {
            connection.close();
        }, 500);
    });
}

app.get('/api/reset-password', (req, res) => {
    const message = `Solicitação de redefinição de senha para email@email.com.br em ${new Date().toISOString()}`;
    
   
    publishToQueue('fila_teste', message);

    res.json({ message: 'Hello from Node.js API', status: 'Mensagem enviada para o RabbitMQ' });
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});