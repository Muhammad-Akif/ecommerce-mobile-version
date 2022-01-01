import * as FileSystem from 'expo-file-system';
import checkAndCreateFile from './checkAndCreateFile';

const checkAndCreateFolder = async folder_path => {
    const folder_info = await FileSystem.getInfoAsync(folder_path);
    if (!folder_info.exists) {
        console.log("checkAndCreateFolder: Making " + folder_path);
        try {
            await FileSystem.makeDirectoryAsync(folder_path, {
                intermediates: true
            });
            await checkAndCreateFile(folder_path);
        } catch (error) {
            return false;
        }
    } else {
        await checkAndCreateFile(folder_path);
    }
};

export default checkAndCreateFolder;
