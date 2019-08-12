import { Dimensions, Platform, PixelRatio } from 'react-native';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();

const normalize = (size: number) => {
    if (pixelRatio === 2) {
        if (SCREEN_WIDTH >= 375) {
            return size * (Platform.OS === 'ios' ? 1 : 0.1);
        } else {
            return size * (Platform.OS === 'ios' ? 0.9 : 0.9);
        }
    }
    if (pixelRatio >= 3) {
        return size * (Platform.OS === 'ios' ? 1 : 1);
    }
    return size;
}

const family = {
    sfPro: 'System'
}

const weight = {
    thin: '100',
    ultraLight: '200',  
    light: '300',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    heavy: '800',
    black: '900'
}

// enum weight = {
//     thin = '100',
//     ultraLight = '200',  
//     light '300',
//     regular '400',
//     medium '500',
//     semibold '600',
//     bold '700',
//     heavy '800',
//     black '900'
// }

// const fontstyle = {
//     headerText: {
//         fontSize: normalize(24),
//         fontFamily: lato.base,
//         color: 'white'
//     }
// }

const normalizedSize = {
    h1: normalize(32),
    h2: normalize(24),
    h3: normalize(23),
    // h4: normalize(26),
    // h5: normalize(20),
    // h6: normalize(18),
    regular: normalize(18),
    input: normalize(17),
    medium: normalize(16),
    small: normalize(15),
    xsmall: normalize(13),
    tiny: normalize(10),
}

export default {
    family,
    normalizedSize,
    weight,
    normalize
}