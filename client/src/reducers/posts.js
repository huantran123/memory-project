const reducer = (posts = [], action) => {
  switch(action.type) {
    case 'FETCH_All':
      return posts;
    case 'CREATE':
      return posts;
    default:
      return posts;
  }
}

export default reducer;