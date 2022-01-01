import * as FileSystem from 'expo-file-system';

export const checkAndCreateFolder = async folder_path => {
    const folder_info = await FileSystem.getInfoAsync(folder_path);
    if (!folder_info.exists) {
        // Create folder
        console.log("checkAndCreateFolder: Making " + folder_path);
        try {
            await FileSystem.makeDirectoryAsync(folder_path, {
                intermediates: true
            });
        } catch (error) {
            // Report folder creation error, include the folder existence before and now
            const new_folder_info = await FileSystem.getInfoAsync(folder_path);
            const debug = `checkAndCreateFolder: ${error.message
                } old:${JSON.stringify(folder_info)} new:${JSON.stringify(
                    new_folder_info
                )}`;
            console.log(debug);
        }
    }
};
