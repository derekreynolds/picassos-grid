import React, { createContext, useContext } from 'react';

export interface ImageFile {
    file?: string
    loaded: boolean
    height: number
    width: number 
}

export type ImageFileContext = {
    imageFile?: ImageFile;
    setImageFile: (imageFile: ImageFile) => void;
}

export const ImageFileContext = React.createContext<ImageFileContext>({imageFile: undefined, setImageFile: imageFile => console.log('No image file')})
export const useFileImage = () => useContext(ImageFileContext);