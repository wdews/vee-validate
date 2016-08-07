export default (files) => {
    for (let i = 0; i < files.length; i++) {
        if (! files[i].name.match(/\.(jpg|svg|jpeg|png|bmp|gif)$/i)) {
            return false;
        }
    }

    return true;
};