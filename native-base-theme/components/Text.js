import variable from "./../variables/platform";

export default (variables = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize,
    fontFamily: 'TitilliumWeb-Regular',
    color: variables.textColor,
    ".note": {
      color: "#a7a7a7",
      fontSize: variables.noteFontSize
    },
    ".notaWe" :{
      fontSize:15,
      marginBottom:5, 
      fontWeight:'300', 
      color:'#B4B4B5',
    }
  };

  return textTheme;
};
