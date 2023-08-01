export const config = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  appendDots: (dots: any) => (
    <div
      style={{
        position: 'absolute',
        bottom: '5px',
        display: 'block',
        width: '100%',
        padding: 0,
        margin: 0,
        listStyle: 'none',
        textAlign: 'center',
      }}
    >
      <ul style={{ margin: '0px' }}> {dots} </ul>
    </div>
  ),
};
