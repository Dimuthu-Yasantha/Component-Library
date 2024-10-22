import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { styled } from '@mui/system';
interface SnackbarProps {
  /**
  * Title 
  */
  title: string;
  /**
  * contents of Alert
  */
  content: string | JSX.Element;
  /**
 * severity variant handler
 */
  status: any;
  /**
   * Icon added or not 
   */
  hasIcon: boolean;
  /**
    * Title added or not 
    */
  hasTitle: boolean;
  /**
   * Close function added or not 
   */
  hasClose: boolean;
}
/**
 * Primary UI component for user interaction
 */
export const KpAlert = ({
  title,
  content,
  status,
  hasIcon,
  hasTitle,
  hasClose,
  ...props
}: SnackbarProps) => {
  const hasTitleStatus = hasTitle && hasTitle ? true : false;
  const hasIconStatus = hasIcon && hasIcon ? true : false;
  const onCloseHandler = hasClose && hasClose ? true : false;
  const [showing, setShowing] = useState(true);


const getTheamColor =()=>{
  let theamColor ='';
  switch (status) {
    case 'error':
      return theamColor ='#C64343';
    case 'warning':
      return theamColor ='#EA9B42';
    case 'info':
      return theamColor ='#253378';
    case 'success':
      return theamColor ='#5FA562';
    default: 
      return theamColor ='#5FA562';
  }
}

  const AlertComponent = styled(Alert)({
        background: '#F4F4F6',
        borderLeft: `7px solid ${getTheamColor()}`,
        borderRadius: '0 4px 4px 0',
        fontFamily: "Inter",
        fontSize: '14px',
        "& .MuiAlert-icon": {
          color:  getTheamColor()
        },
        "& .MuiAlertTitle-root": {
          fontSize: '13px',
          paddingTop:'3px',
          fontFamily: "Inter",
          color: getTheamColor()
        },
        "& .MuiAlertMessage-root": {
          Padding:100
        },
  });

  return (
    <>
      {showing ?
        <>{onCloseHandler ?
          <>{hasIconStatus ?

            <AlertComponent {...props} severity={status} 
              onClose={() => { setShowing(false) }} >
              {hasTitleStatus ? <AlertTitle>{title}</AlertTitle> : null}
              {content}
            </AlertComponent>

            :

            <AlertComponent {...props} severity={status} onClose={() => { setShowing(false) }} icon={hasIconStatus}>
              {hasTitleStatus ? <AlertTitle >{title}</AlertTitle> : null}
              {content}
            </AlertComponent>

          } </> 
          
          :

          <>{hasIconStatus ?

            <AlertComponent {...props} severity={status} >
              {hasTitleStatus ? <AlertTitle >{title}</AlertTitle> : null}
              {content}
            </AlertComponent>

            :

            <Alert {...props} icon={hasIconStatus} severity={status}>
              {hasTitleStatus ? <AlertTitle>{title}</AlertTitle> : null}
              {content}
            </Alert>
          }
          </>
        }
        </>
        : null}
    </>
  );
};