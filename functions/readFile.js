import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

const readFile = async folder_path => {
    const { granted } = await MediaLibrary.requestPermissionsAsync();
    if (!granted) return false;

    let fileUri = folder_path + "/data.txt";
    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    if (!fileInfo.exists) {
        await FileSystem.writeAsStringAsync(fileUri, "Hello World", { encoding: FileSystem.EncodingType.UTF8 });
        const asset = await MediaLibrary.createAssetAsync(fileUri)
        await MediaLibrary.createAlbumAsync("Download", asset, false)
    }
};

export default readFile;
