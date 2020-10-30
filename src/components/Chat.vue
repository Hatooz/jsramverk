<template>
<div>
  <h1>Messages</h1>
  <div ref="messageContainer" id="all-messages" class="all-messages" >
    <p v-for="message in allMessages" v-bind:key="message.time">({{message.time}}) <span style="font-weight: bold;"> {{message.nick}}:</span> {{message.text}}</p>
  </div>
  <p><strong>Enter your nickname:</strong></p>
  <input v-model="message.nick" class="new-message" value=""/>
  <p><strong>Write new message:</strong></p>
  <input v-model="message.text" v-on:keyup="send($event)" id="new-message" class="new-message" value=""/>

</div>
</template>

<script>
import io from "socket.io-client"

export default {
  name: 'Chat',

  data: function() {
    return {
      socket: {},
      context: {},
      position: {
        x: 0,
        y: 0
      },
      allMessages: [{nick:"Server", text:"Welcome to El Bizza's Chatroom!", time: new Date().toLocaleTimeString()}],
      message: {
        nick: '',
        text: '', 
        time: ''
      }
    }
  },
  methods: {
    send: function(event) {      
      if (event.code === "Enter") {
            this.message.time = new Date().toLocaleTimeString();
            this.socket.emit('message', this.message);
            this.message.text = '';
        }
    },
  },
  created: function() {
    console.log("Starting connection to websocket Server")
    // this.socket = io("http://localhost:3000")
    this.socket = io("https://me-chat.elbizza.me")
  },
  updated() {
    const messageContainer = this.$refs.messageContainer;
    messageContainer.scrollTop = messageContainer.clientHeight;
  },
  mounted() {   
    this.socket.on("connect", function() {
      console.log("connected!")
    }),
    this.socket.on('restore', data => {
      data.forEach(message => this.allMessages.push(message));
    })
    this.socket.on('message', message => {
      this.allMessages.push(message);
    })
  },
};
</script>

<style scoped>
.main-content {
  margin-left: 250px;
  padding: 20px;
}
.all-messages {
    width: 100%;
    height: 30vh;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 2rem;
    overflow: auto;    
}

.all-messages p:nth-child(2n) {
    background-color: #ccc;
}
.new-message {
    width: 100%;
    height: 5vh;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 2rem;
    font-size: 1.8rem;
}
</style>
