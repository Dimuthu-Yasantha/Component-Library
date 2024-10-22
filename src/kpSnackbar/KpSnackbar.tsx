import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { styled } from '@mui/system';
interface SnackbarProps {
  /**
  * Title 
  */
  title: string;
  /**
  * Contents of snackBar
  */
  content: string;
  /**
 * Status of the sanackbar
 */
  status: any;
  /**
 * Verticle placement 
 */
  verticalPlacement?: 'top' | 'bottom';
  /**
* Horizontal placement 
*/
  horizontalPlacement?: 'left' | 'center' | 'right'
  /**
   * Duration of the snackbar display(ms)
   */
  duration: number;
  /**
  * Title show or not 
  */
  hasTitle: boolean;
  /**
  * Icon show or not 
  */
  hasIcon: boolean;
  /**
 * close button show or not 
 */
  hasClose: boolean;
  /**
  * callback for on Close 
  */
  onClose?: (state: any) => void;

}

export interface State extends SnackbarOrigin {
  open: boolean;
}

export const KpSnackbar = ({
  title,
  content,
  status,
  hasTitle,
  verticalPlacement,
  horizontalPlacement,
  hasIcon,
  hasClose,
  duration,
  onClose,
  ...props
}: SnackbarProps) => {
  const [showing, setShowing] = useState(true);
  const hasTitleStatus = hasTitle && hasTitle ? true : false;
  const hasIconStatus = hasIcon && hasIcon ? true : false;
  const onCloseHandler = hasClose && hasClose ? true : false;
  const severityCurrent = status && status ? status : 'success';


  const getTheamColor = () => {
    let theamColor = '';
    switch (status) {
      case 'error':
        return theamColor = '#C64343';
      case 'warning':
        return theamColor = '#EA9B42';
      case 'info':
        return theamColor = '#4387C6';
      case 'success':
        return theamColor = '#5FA562';
      default: return theamColor = '#5FA562';
    }
  }

  const AlertComponent = styled(Alert)({
    borderRadius: '0 0 4px 4px',
    fontSize: '13px',
    height: 'auto',
    padding: '6px 15px',
    fontFamily: "Inter",
    color: '#1E2332',
    "& .MuiAlert-icon": {
      color: getTheamColor(),
      fontSize: '21px',
      paddingTop: 3,
      fontFamily: "Inter"
    },
    "& .MuiAlertTitle-root": {
      fontSize: '13px',
      fontFamily: "Inter",
      paddingTop: '0px',
      color: getTheamColor(),
    },
    "& .MuiAlert-message": {
      overflow: 'hidden',
      paddingTop: '5px',
      paddingBottom: 0,
    },
    "& .MuiAlert-action": {
      paddingTop: 0,
      fontSize: '12px',
      fontFamily: "Inter"
    }

  });

  useEffect(() => {
    setState({
      open: true,
      vertical: verticalPlacement || 'top',
      horizontal: horizontalPlacement || 'right'
    })
  }, [verticalPlacement, horizontalPlacement]);

  const [state, setState] = React.useState<State>({
    open: true,
    vertical: 'top',
    horizontal: 'left',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
    typeof onClose !== "undefined" && onClose(state);
  };

  return (
    <>
      {showing ? <>
        {onCloseHandler ?
          <>
          {
            hasIconStatus ?
            <Snackbar open={open} anchorOrigin={{ vertical, horizontal }} autoHideDuration={duration} onClose={handleClose}>
              <AlertComponent onClose={() => { setShowing(false) }} severity={severityCurrent}>
                {hasTitleStatus ? <AlertTitle>{title}</AlertTitle> : null}
                {content}
              </AlertComponent>
            </Snackbar>
            :
            <Snackbar open={open} anchorOrigin={{ vertical, horizontal }} autoHideDuration={duration} onClose={handleClose}>
              <AlertComponent onClose={() => { setShowing(false) }} icon={hasIconStatus} severity={severityCurrent}>
                {hasTitleStatus ? <AlertTitle>{title}</AlertTitle> : null}
                {content}
              </AlertComponent>
            </Snackbar>
          } 
          </> :
          <>
          {
          hasIconStatus ?
            <Snackbar open={open} anchorOrigin={{ vertical, horizontal }} autoHideDuration={duration} onClose={handleClose}>
              <AlertComponent severity={severityCurrent}>
                {hasTitleStatus ? <AlertTitle>{title}</AlertTitle> : null}
                {content}
              </AlertComponent>
            </Snackbar>
            :
            <Snackbar open={open} anchorOrigin={{ vertical, horizontal }} autoHideDuration={duration} onClose={handleClose}>
              <AlertComponent icon={hasIconStatus} severity={severityCurrent}>
                {hasTitleStatus ? <AlertTitle>{title}</AlertTitle> : null}
                {content}
              </AlertComponent>
            </Snackbar>
          }
          </>
        }</>
        : null}
    </>
  );
};