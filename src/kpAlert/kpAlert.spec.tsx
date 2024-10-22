import { render } from '@testing-library/react';
import { KpAlert } from './KpAlert';
import { createElement } from 'react';

describe('KpAlert', () => {
 const props = {
    status: 'success',
    hasTitle: true,
    title: 'Title',
    content: 'message',
    hasIcon: true,
    hasClose: true
 }

 it('should render successfully', () => {
    const {baseElement} = render(<KpAlert {...props}/>);
    expect (baseElement).toBeTruthy();
 });

 it('should render string content successfully', () => {
   const propsWithStringContent = {...props, content: "New Message"};
   const {queryByRole} = render(<KpAlert {...propsWithStringContent}/>);
   expect (
      queryByRole("alert")?.textContent).toBe("TitleNew Message");
 });

 it('should render html content successfully', () => {
   const propsWithHtmlContent = {...props, content: createElement('h1', { className: 'greeting' }, 'Hello')};
   const {queryByRole} = render(<KpAlert {...propsWithHtmlContent}/>);
   expect (queryByRole("alert")?.querySelector("div:nth-child(2) h1")?.className).toBe("greeting")
 });

});
