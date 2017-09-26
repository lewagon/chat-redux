export default function messagesReducer(state = null, action) {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      const messages = action.payload.messages;
      const channel = action.payload.channel;
      return messages;
    case 'MESSAGE_POSTED':
      console.log(action, state);
      return state;
    default:
      return state;
  }
}
