import * as FileSystem from 'expo-file-system';
import { folderName } from '../constants/settings';
import checkAndCreateFile from './checkAndCreateFile';

const checkAndCreateFolder = async () => {
    const folder_path = FileSystem.documentDirectory + folderName;
    const folder_info = await FileSystem.getInfoAsync(folder_path);
    if (!folder_info.exists) {
        try {
            await FileSystem.makeDirectoryAsync(folder_path, {
                intermediates: true
            });
            await checkAndCreateFile();
        } catch (error) {
            return false;
        }
    } else {
        await checkAndCreateFile();
    }
};

export default checkAndCreateFolder;
