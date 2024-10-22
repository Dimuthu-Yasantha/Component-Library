import React from 'react';
import { render } from '@testing-library/react';
import { KpSnackbar } from './KpSnackbar';

describe('muiSnackbar', () => {
    const props = {
        status: "success",
        title: 'Title',
        content: 'message',
        hasIcon: true,
        hasClose: true,
        duration: 10000,
        hasTitle: true,
    }

    it('should render successfully', () => {
        const { baseElement } = render(<KpSnackbar {...props} />);
        expect(baseElement).toBeTruthy();
    });
});