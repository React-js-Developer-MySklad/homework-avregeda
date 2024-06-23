import './menu.css';
import React, {memo, useEffect} from "react";
import Logo from '../../../assets/logo.svg';
import Add from '../../../assets/add_data.svg';

type iProps = {
    onAdd: () => void;
}

export const Menu: React.FC<iProps> = memo(({onAdd}) => {
    useEffect(() => {
        console.log('Menu mounted');
        return () => console.log('Menu unmounted');
    });

    return (
        <div className='menu'>
            <img className='h-8' alt='Moysklad logo' src={Logo}/>
            <div className='inner-div'>
                <button type='button' className='add-button' onClick={onAdd}>
                    <img className='me-2' src={Add} alt='Add data'/>
                    Добавить
                </button>
            </div>
        </div>
    );
});
