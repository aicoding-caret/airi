import { WebSocketServer } from 'ws'

const port = 8080
const wss = new WebSocketServer({ port })

console.log(`✨ Unreal VTuber Backend is listening on ws://localhost:${port}`)

wss.on('connection', (ws) => {
  console.log('🚀 Unreal Engine client connected!')

  ws.on('message', (message) => {
    // For now, we'll just log the message.
    // In the future, this is where we'll process audio chunks or user events.
    console.log('Received message from client:', message.toString())

    // Example of sending a message back to the client
    ws.send(JSON.stringify({ type: 'greeting', text: 'Hello from AIRI Backend!' }))
  })

  ws.on('close', () => {
    console.log('👋 Unreal Engine client disconnected.')
  })

  ws.on('error', (error) => {
    console.error('WebSocket error:', error)
  })
})
