import {MutableRefObject} from "react";
import {OnShowProps} from "../onShow";

export const onShow = jest.fn().mockImplementation(
    (ref: MutableRefObject<HTMLElement>, show: boolean, props: OnShowProps) => {
});
