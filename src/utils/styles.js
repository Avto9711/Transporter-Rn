import globalColors from "./colors";

const globalStyle = {}

globalStyle.container = {
    backgroundColor : globalColors.baseContainerBlue,
    flex: 1,
    alignItems: "center",
    justifyContent:"center"
}
globalStyle.opacityButton = {
    backgroundColor: globalColors.baseBlue,
    borderRadius: 25,
    marginVertical: 10,
    width: 300,
    paddingVertical: 12,
}

globalStyle.buttonTextOpacity =  {
    fontSize: 16,
    fontWeight: '500',
    color: "#ffff",
    textAlign:"center"
}

export default globalStyle;
    