import './menu.css';
import React, {memo} from "react";
import LogoIcon from '../../../assets/logo.svg';
import AddIcon from '../../../assets/add_data.svg';

type iProps = {
    onAdd: () => void;
}

export const Menu: React.FC<iProps> = memo(({onAdd}) => {
    return (
        <div className='menu'>
            <img className='h-8' alt='Moysklad logo' src={LogoIcon}/>
            <div className='inner-div'>
                <button type='button' className='add-button' onClick={onAdd}>
                    <img className='me-2' src={AddIcon} alt='Add data'/>
                    Добавить
                </button>
            </div>
        </div>
    );
});
