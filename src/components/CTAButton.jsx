
function CTAButton({ text }) {
  return (
    <>
    <button className="cta-button">
      {text}
      <button className='cta-top-corner'>only $15/mo</button>
    </button>
    
    </>
  );
}

export default CTAButton;