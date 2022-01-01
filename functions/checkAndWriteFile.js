import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { fileName, folderName } from '../constants/settings';
import template from '../template/initialTemplate';

const checkAndWriteFile = async () => {
    const { granted } = await MediaLibrary.requestPermissionsAsync();
    if (!granted) return false;

    const file_path = FileSystem.documentDirectory + folderName + '/' + fileName;
    const fileInfo = await FileSystem.getInfoAsync(file_path);
    if (fileInfo.exists) {
        await FileSystem.writeAsStringAsync(file_path, JSON.stringify(template), { encoding: FileSystem.EncodingType.UTF8 });
        const asset = await MediaLibrary.createAssetAsync(file_path)
        await MediaLibrary.createAlbumAsync("Download", asset, false)
        return true;
    }
    return false;
};

export default checkAndWriteFile;
