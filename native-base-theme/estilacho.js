import { Subtitle } from "native-base";

const p_color = '#FF2D2D';
const cardSize = 300;

export default {
    container: {
        backgroundColor: "#fff"
    },
    centerText:{
        textAlign: 'center'
    },
    semibold: {
        fontWeight: '600'
    },

    bold: {
        fontWeight: '700'
    },
    light:{
        fontWeight: '300'
    },
    hrGray: {
        borderBottomColor: '#DDDDDE',
        borderBottomWidth: 1,
        marginTop: 15,
        marginBottom: 15,
    },

    centron: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    p15: {
        padding: 15
    },

    ph15: {
        paddingHorizontal: 15
    },

    bcLightGray: {
        backgroundColor: '#F2F2F2'
    },
    lightGrayText:{
        color: '#B4B4B5'
    },
    blueText:{
        color: '#253672'
    },

    whiteText: {
        color: 'white'
    },

    navyText: {
        color: '#2f384b'
    },
    f10:{
        fontSize:10
    },
    f15:{
        fontSize: 15
    },
    f18:{
        fontSize: 18
    },
    f22:{
        fontSize: 22
    },

    f24: {
        fontSize: 24
    },

    f30: {
        fontSize: 30
    },
    f35: {
        fontSize: 35
    },
    f50: {
        fontSize: 50
    },
    textTop:{
        textAlignVertical: 'top'
    },

    floatLeft15: {
        position: 'absolute',
        left: 15
    },

    floatRight15: {
        position: 'absolute',
        right: 15
    },
    floatLeft30: {
        position: 'absolute',
        left: 30
    },

    floatRight30: {
        position: 'absolute',
        right: 30
    },    

    redCut: {
        backgroundColor: p_color,
        width: 80,
        position: "absolute",
        right: 0,
        top: 60,
        height: 40,
        paddingLeft: 15,
        paddingTop: 5
    },

    redCutPromotion: {
        width: null,
        position: "absolute",
        right: 0,
        bottom: 0,
        flex: 1,
        flexDirection: 'row'
    },

    bonification: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign:'center'
    },

    wrapperPromotion: {
        backgroundColor: p_color,
        flex: 1,
        justifyContent: 'center',
        paddingRigth:15
    },

    cut:{
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 20,
        borderTopWidth: 80,
        borderRightColor: 'transparent',
        borderTopColor: p_color,
        transform: [{
            rotate: '180deg'
        }]
    },
    cut2:{
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 25,
        borderTopWidth: 100,
        borderRightColor: 'transparent',
        borderTopColor: p_color,
        transform: [{
            rotate: '180deg'
        }]
    },
    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 30,
        borderTopWidth: 85,
        borderRightColor: 'transparent',
        borderTopColor: p_color,
    },

    triangleCornerBottomRight: {
        transform: [{
            rotate: '180deg'
        }]
    },

    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 30,
        borderTopWidth: 80,
        borderRightColor: 'transparent',
        borderTopColor: p_color,
    },

    triangleCornerBottomRight: {
        transform: [{
            rotate: '180deg'
        }]
    },

    wrapperPromotionMini: {
        backgroundColor: p_color,
        paddingHorizontal: 15,
        paddingVertical: 3,
        flex: 1,
        justifyContent: 'center',
    },

    wrapperPromotionPinjoysMini: {
        backgroundColor: p_color,
        paddingHorizontal: 15,
        paddingVertical: 0,
        flex: 1,
        justifyContent: 'center',
    },

    triangleCornerMini: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 15,
        borderTopWidth: 55,
        borderRightColor: 'transparent',
        borderTopColor: p_color,
    },
    botonesAccion: {
        position: 'absolute',
        bottom: 5,
        left:0,
        right:0
    },
    contenedorTarjeta: {
        height: cardSize,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical:8,
        overflow: 'hidden'
    },
    ajusteMiniatuara:{
        position:"absolute",
        left:15,
        top:70,
        borderColor:'white', 
        borderWidth:2,
        zIndex: 2
    },
    accion:{
        fontSize: 32,
        color: '#545659'
    },
    accionAgregar:{
        fontSize: 40,
        color: '#545659'
    },
    ajusteAgregar:{
        paddingTop:4
    },
    bigNumberView:{
        backgroundColor:'#2f384b',
        borderColor:'white',
        borderWidth:2,
        height:110,
        width:110,
        borderRadius:55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigNumber:{
        color:'white', 
        fontSize:90, 
        fontWeight:'bold'
    },

    iconWe: {
        color: p_color,
        fontSize: 28
    },
    simpleGray: {
        backgroundColor: '#DEDEDE', 
        paddingHorizontal:5, 
        paddingVertical:10
    },
    subtitle:{
        fontWeight:'600',
        fontSize:22,
        color:"#2f384b",
        marginBottom:15
    },

    btnWe:{
        height:40,
        borderRadius: 12
    }
};