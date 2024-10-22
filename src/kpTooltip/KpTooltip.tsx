import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';

interface TooltipProps {
    /**
    * Place of the tooltip place
    */
    position: any;
    /**
    * content of the tooltip place
    */
    content: string;
    /**
    * inner component of the tooltip place
    */
    innerComponent: JSX.Element;

}

export const sampleInnerTooltipComponent = () => {
    return (
        <Button style={{margin: '60px 200px', fontFamily: "Inter"}}>{'Sample Inner Component'}</Button>
    );
}

export const KpTooltip = ({
    position,
    content,
    innerComponent,
    ...props
}: TooltipProps) => {


    return (
        <>

            <Tooltip title={content} placement={position} arrow
                PopperProps={{
                    sx: {
                        "& .MuiTooltip-tooltip": {
                            background: '#1E2332',
                            borderRadius: '3px',
                            fontFamily: "Inter"
                        },
                        "& .MuiTooltip-arrow": {
                            "&:before": {
                                background: '#1E2332',
                            },
                        }
                    }
                }}
            >
                {innerComponent}
            </Tooltip>
        </>
    );
};