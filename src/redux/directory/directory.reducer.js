const INITIAL_STATE = {
  sections: [
    {
      title: 'womens',
      imageUrl: 'https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      size: 'large',
      id: 1,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      size: 'large',
      id: 2,
      linkUrl: 'shop/mens'
    },
    {
      title: 'swimwear',
      imageUrl: 'https://images.pexels.com/photos/1797375/pexels-photo-1797375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      size: 'large',
      id: 3,
      linkUrl: 'shop/swimwear'
    },
    {
      title: 'outwear',
      imageUrl: 'https://images.pexels.com/photos/1910128/pexels-photo-1910128.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      id: 4,
      linkUrl: 'shop/outwear'
    },
    {
      title: 'footwear',
      imageUrl: 'https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      id: 5,
      linkUrl: 'shop/footwear'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;