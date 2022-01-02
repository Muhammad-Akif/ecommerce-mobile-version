import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { fileName, folderName } from '../constants/settings';
import template from '../template/initialTemplate';

const checkAndCreateFile = async () => {
    const { granted } = await MediaLibrary.requestPermissionsAsync();
    if (!granted) return false;

    let fileUri = FileSystem.documentDirectory + folderName + "/" + fileName;
    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    if (!fileInfo.exists) {
        await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(template), { encoding: FileSystem.EncodingType.UTF8 });
        // const asset = await MediaLibrary.createAssetAsync(fileUri)
        // await MediaLibrary.createAlbumAsync("Download", asset, false)
    }
};

export default checkAndCreateFile;
