export default function messagesReducer(state, action) {
  if (state === undefined) {
    return [];
  }
  switch (action.type) {
    case 'FETCH_MESSAGES':
      const messages = action.payload.messages;
      const channel = action.payload.channel;
      return messages;
    default:
      return state;
  }
}
