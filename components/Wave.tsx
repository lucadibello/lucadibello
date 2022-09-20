const Wave = ({color}: {color?: string} = {color: "#0099ff"}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill={color} fillOpacity="1" d="M0,64L60,101.3C120,139,240,213,360,250.7C480,288,600,288,720,245.3C840,203,960,117,1080,90.7C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg>
  )
}

export default Wave