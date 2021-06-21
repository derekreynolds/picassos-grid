import React, { ChangeEvent, useState } from 'react'
import { useFileImage } from '../../context/file/FileContext';
import './FileChooser.scss'

const FileChooser = (props: any) => {

    const { imageFile, setImageFile } = useFileImage();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        if(event.target.files && event.target.files?.length > 0) {
            let file = URL.createObjectURL(event.target.files[0]);
            var img = new Image();

            img.src = file;
            img.onload = () => {
                setImageFile({file: file, loaded: true, height: img.height, width: img.width});
                let config = {
                        grid:{
                            height: img.height, 
                            width: img.width, 
                            pixels: props.config.grid.pixels,
                            opacity: props.config.grid.opacity
                        }};
                props.setConfig(config);
            }  
        }

    }

    return (
        <div>
            <input type="file" className="inputFile" name="imageChooser" id="imageChooser" onChange={onChange} accept="image/png, image/jpeg"/>
            <label htmlFor="imageChooser">Choose image</label>
        </div>
    )
}

export default FileChooser
