import React, { ChangeEvent } from 'react'
import './ControlPanel.scss'

const ControlPanel = (props: any) => {

    const onChangePixels = (event: ChangeEvent<HTMLInputElement>) => {
        let config = Object.assign({}, props.config);
        config.grid.pixels = parseInt(event.target.value);
        props.updateConfig(config);
    }

    const onChangeOpacity = (event: ChangeEvent<HTMLInputElement>) => {
        let config = Object.assign({}, props.config);
        config.grid.opacity = parseFloat(event.target.value);
        props.updateConfig(config);
    }

    const onChangeColor = (event: ChangeEvent<HTMLSelectElement>) => {
        debugger
        let config = Object.assign({}, props.config);
        config.grid.color = event.target.value;
        props.updateConfig(config);
    }

    return (
        <div className="control-panel">
            <label htmlFor="pixels">Pixels</label>
            <input type="number" id="pixels" name="pixels" value={props.config.grid.pixels} min="1" max="100" onChange={onChangePixels}/>
            <label htmlFor="opacity">Opacity</label>
            <input type="number" id="opacity" name="opacity" value={props.config.grid.opacity} min="0" max="1" step="0.1" onChange={onChangeOpacity}/>
            <label htmlFor="color">Color</label>
            <select name="color" id="color" value={props.config.grid.color} onChange={onChangeColor}>
                <option value="#000000">Black</option>
                <option value="#ffffff">White</option>
            </select>
        </div>
    )
}

export default ControlPanel
