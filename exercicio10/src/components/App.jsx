const ImageGallery = ({ images }) => {
  return (
    <>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.altText}
          style={{ width: '100%', height: 'auto', margin: '10px 0' }} 
        />
      ))}
    </>
  );
};







function App() {
  const imageArray = [
    { url: 'https://images.unsplash.com/photo-1417632993443-302f4897cf67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNpdHl8ZW58MHwwfDB8fHww', altText: 'Imagem 1' },
    { url: 'https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNpdHl8ZW58MHwwfDB8fHww', altText: 'Imagem 2' },
    { url: 'https://images.unsplash.com/photo-1486607303850-bc051a4ffad4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNpdHl8ZW58MHwwfDB8fHww', altText: 'Imagem 3' },
  ];

  return (
   <>
    <h1>Galeria de Imagens</h1>
    <ImageGallery images={imageArray} />
   </>
  )
}

export default App
