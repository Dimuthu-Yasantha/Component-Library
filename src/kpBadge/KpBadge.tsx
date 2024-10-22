import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/system';

interface BadgeProps {
    /**
    * variant of the badge 
    */
    type?: 'dot' | 'standard';
    /**
    * Count of the badge 
    */
    value?: number;
    /**
    * Max count of the badge 
    */
    maxCount?: number;
    /**
    * Color  of the badge 
    */
    color: string;
    /**
    * vertical placement of the badge 
    */
    vertical: any;
    /**
    * horizontal placement of the badge 
    */
    horizontal: any;
    /**
    * inner component of the badge place
    */
    innerComponent: JSX.Element;

}

export const sampleInnerComponent = () => {
    return (
        <MailIcon />
    );
}


export const KpBadge = ({
    type,
    value,
    maxCount,
    color,
    vertical,
    horizontal,
    innerComponent,
    ...props
}: BadgeProps) => {
    const BadgeComponent = styled(Badge)({
        "& .MuiBadge-badge": {
            background: color,
            color: '#ffff', 
            fontFamily: "Inter"
          }
    });
    
    return (
        <>
            <BadgeComponent
            variant={type}
            anchorOrigin={{
                vertical: vertical,
                horizontal: horizontal,
              }}
               badgeContent={value && value} max={maxCount && maxCount} >
                {innerComponent}
            </BadgeComponent>
        </>
    );
};