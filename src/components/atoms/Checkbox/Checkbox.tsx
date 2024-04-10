import React from 'react';

import * as PrCheckbox from 'primereact/checkbox';

interface CheckboxProps extends PrCheckbox.CheckboxProps {
    checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, ...props }) => {
    return <PrCheckbox.Checkbox data-testid="checkbox-testid" checked={checked} {...props} />;
};

export default Checkbox;
