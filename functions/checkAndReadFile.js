import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { fileName, folderName } from '../constants/settings';

const checkAndReadFile = async () => {
    const { granted } = await MediaLibrary.requestPermissionsAsync();
    if (!granted) return false;
    
    const file_path = FileSystem.documentDirectory + folderName + '/' + fileName;
    const fileInfo = await FileSystem.getInfoAsync(file_path);
    if (fileInfo.exists) {
        const data = await FileSystem.readAsStringAsync(file_path);
        console.log(JSON.parse(data))
        return data;
    }
    return false;
};

export default checkAndReadFile;
