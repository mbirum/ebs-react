import React from 'react';
import Field from './Field';

const FieldSet = props => {
    return (
        <div>
            <Field
                onChange={e => props.setFormData({ ...props.formData, 'name': e.target.value})}
                placeholder="Note name"
                value={props.formData.name}
            />
            <Field
                onChange={e => props.setFormData({ ...props.formData, 'description': e.target.value})}
                placeholder="Description"
                value={props.formData.description}
            />
            <Field
                onChange={e => props.setFormData({ ...props.formData, 'newAttribute': e.target.value})}
                placeholder="Attribute"
                value={props.formData.newAttribute}
            />
        </div>
    );
};

export default FieldSet;