import { render } from '@testing-library/react';
import { KpLogo } from './KpLogo';

describe('muiSnackbar', () => {
    const props = {
        color: 'Blue',
    }

    it('should render successfully', () => {
        const { baseElement } = render(<KpLogo {...props} />);
        expect(baseElement).toBeTruthy();
    });
});