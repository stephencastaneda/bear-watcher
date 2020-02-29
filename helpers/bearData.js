const bears = [
    {
        name: 'Stephen',
        imageUrl: 'https://cottagelife.com/wp-content/uploads/2018/06/animal-bear-brown-bear-35435-1200x796.jpg',
        id: 'bear3',
    }
];

let selectedBearId = '';
  
  const setSelectedBear = (bearId) => {
    selectedBearId = bearId;
    console.log('selectedBearId', selectedBearId);
  };
  
  const getBear = () => {
    return bears;
  };
  
  export default { setSelectedBear, getBear };



