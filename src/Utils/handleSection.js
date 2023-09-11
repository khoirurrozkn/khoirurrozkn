const handleSection = (ref) => {
  if(ref.current){
    ref.current.scrollIntoView();
  }
};

export default handleSection;