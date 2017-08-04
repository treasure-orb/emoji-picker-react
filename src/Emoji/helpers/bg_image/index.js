import { DEFAULt_CDN_PATH, DEFAULT_IMAGE_RESOLUTION } from '../../../constants';

export default function bgImage({ id, assetPath, emojiResolution }) {

    if (typeof assetPath === 'undefined') {
        assetPath = DEFAULt_CDN_PATH;
    }

    assetPath += emojiResolution ? `/${emojiResolution}` : `/${DEFAULT_IMAGE_RESOLUTION}`;

    return {
        'backgroundImage': `url(${assetPath}/${id}.png)`
    };
}