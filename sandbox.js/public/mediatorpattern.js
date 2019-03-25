const User = function(name){
    this.name = name;
    this.chatRoom = null;
};

User.prototype = {
  send: function(msg, to){
      this.chatRoom.send(msg, this, to);
  },
  recieve: function(msg, from){
      console.log(`${from.name} to ${this.name}: ${msg}`);
  }
};

const ChatRoom = function(){
    let users = {}; //list of users
    
    return {
        register: function(user){
            users[user.name] = user;
            user.chatRoom = this;
        },
        send: function(msg, from, to){
            if(to){
                //single user msg
                to.recieve(msg, from);
            } else {
                //mass msg
                for(key in users){
                    if(users[key] !== from){
                        users[key].recieve(msg, from);
                    }
                }
            }
        }
    };
};

const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatRoom = new ChatRoom();

chatRoom.register(brad);
chatRoom.register(jeff);
chatRoom.register(sara);

brad.send('Hello Jeff', jeff);
sara.send('Hello Brad!', brad);
jeff.send('Hello Everyone');