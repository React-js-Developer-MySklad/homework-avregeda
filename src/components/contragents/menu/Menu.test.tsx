import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Menu} from "./Menu";

test('component will be rendered and button clicked', () => {
    const onAdd = jest.fn();
    const {getByText} = render(<Menu onAdd={onAdd}/>);
    expect(getByText('Добавить')).toBeTruthy();
    fireEvent.click(getByText('Добавить'));
    expect(onAdd).toHaveBeenCalledTimes(1);
});
