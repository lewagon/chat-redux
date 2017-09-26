export default function messagesReducer(state = null, action) {
  switch (action.type) {
    case 'CHANNEL_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
