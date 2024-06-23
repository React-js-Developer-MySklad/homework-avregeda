import Modal from "flowbite/lib/esm/components/modal";
import {MutableRefObject, useEffect} from "react";

export type OnShowProps = {
    onClose: () => void;
}

export const onShow = (ref: MutableRefObject<HTMLElement>, show: boolean, props: OnShowProps) => {
    useEffect(() => {
        if (ref) {
            const modal = new Modal(ref.current, {
                placement: 'center',
                backdrop: 'dynamic',
                'closable': true
            });
            modal.updateOnHide(props.onClose)
            if (show) {
                modal.show();
            } else {
                modal.hide();
            }
        }
    }, [ref, show]);
}
