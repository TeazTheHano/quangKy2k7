import { StyleSheet } from 'react-native';
import { vw, vh } from './stylesheet';

const clrStyle = StyleSheet.create<any>({
    white: '#FFFFFF',
    neu2: '#474747',
    neu3: '#A4A4A4',
    neu4: '#F16A4B',
    neu5: '#2D81FF',
    neu6: '#86DFD0',
    black: '#000000',
    orange: '#FF9600',
    yellow: '#FFC800',
    grey: '#656565',
    redA: '#DA2900',
    redP: '#A84035',
    green: '#6DC394',
    pur1: '#8E83E0',
    pur2: '#C3BBF3',
    you: '#0083FF',
    neu1: `#2F2F2F`,
    saoUnav: `#E9FFFC`,
});

export default clrStyle;

const componentStyle = StyleSheet.create<any>({
    // input 
    textInput: {
        borderRadius: vw(4),
        flex: 1,
        paddingVertical: vw(4),
        fontSize: vw(4),
    },
});

export { componentStyle };