import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { fileName, folderName } from '../constants/settings';
import checkAndCreateFolder from './checkAndCreateFolder';

const checkAndWriteFile = async data => {
    const { granted } = await MediaLibrary.requestPermissionsAsync();
    if (!granted) return false;

    const file_path = FileSystem.documentDirectory + folderName + '/' + fileName;
    const fileInfo = await FileSystem.getInfoAsync(file_path);
    if (fileInfo.exists) {
        await FileSystem.writeAsStringAsync(file_path, JSON.stringify(data), { encoding: FileSystem.EncodingType.UTF8 });
        return true;
    }
    checkAndCreateFolder();
    return false;
};

export default checkAndWriteFile;
