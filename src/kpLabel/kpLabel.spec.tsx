import { render } from '@testing-library/react';
import { KpLabel } from './kpLabel';

describe('KpLabel', () => {
    const props = {
        content: 'message'
    }

    it('should render successfully', () => {
        const {baseElement} = render(<KpLabel {...props}/>);
        expect (baseElement).toBeTruthy();
    });
});