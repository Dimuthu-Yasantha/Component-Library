import React, {useEffect} from 'react';
import {Container, Divider, Modal, OutlinedInput, Switch} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {KpButton} from "../kpButton/KpButton";

export enum MODALTYPE {
    DEFAULT = "Default",
    INFORMATIVE = "Informative"
}

export enum MODALVARIANT {
    PRIMARY = "Primary",
    SECONDARY = "Secondary",
    TERTIARY = "Tertiary",
    TEXT = "Text",
}

export enum ModalButtonColor {
    PRIMARY = "Primary",
    SECONDARY = "Secondary",
}

export enum ModalIconType {
    MUI = "MUI",
    SVG = "SVG",
}

interface ModalProps {
    /**
     * Type of the Modal
     */
    type?: MODALTYPE;
    /**
     * Modal Title
     */
    title: string;
    /**
     * Contents of the Modal
     */
    content: null | JSX.Element;
    /**
     * Submit button text
     */
    submitBtnText?: string;
    /**
     * Submit button click event
     */
    handleSubmit?: () => void;
    /**
     * Submit button variant
     */
    submitBtnVariant?: MODALVARIANT;
    /**
     * Optional Size handler
     */
    submitBtnSize: string;
    /**
     * Optional custom Background Colors
     */
    submitBtnColor: ModalButtonColor;
    /**
     * Optional custom Left Icon
     */
    submitBtnHasLeftIcon: boolean;
    /**
     * Submit button left icon
     */
    submitBtnLeftIcon?: string | null | JSX.Element;
    /**
     * Optional custom Right Icon
     */
    submitBtnHasRightIcon: boolean;
    /**
     * Submit button right icon
     */
    submitBtnRightIcon?: string | null | JSX.Element;
    /**
     * Submit button disabled flag
     */
    submitBtnDisabled: boolean;
    /**
     * Cancel button variant
     */
    cancelBtnVariant?: MODALVARIANT;
    /**
     * Optional Size handler
     */
    cancelBtnSize: string;
    /**
     * Optional custom Background Colors
     */
    cancelBtnColor: ModalButtonColor;
    /**
     * Optional custom Left Icon
     */
    cancelBtnHasLeftIcon: boolean;
    /**
     * Cancel button left icon
     */
    cancelBtnLeftIcon?: string | null | JSX.Element;
    /**
     * Optional custom Right Icon
     */
    cancelBtnHasRightIcon: boolean;
    /**
     * Cancel button right icon
     */
    cancelBtnRightIcon?: string | null | JSX.Element;
    /**
     * Cancel button disabled flag
     */
    cancelBtnDisabled: boolean;
    /**
     * Cancel button text
     */
    cancelBtnText?: string;
    /**
     * Cancel button click event
     */
    handleRejection?: () => void;
    /**
     * Is Modal open
     */
    isOpen: boolean;
    /**
     * Is footer content available
     */
    isFooterContent?: boolean;
    /**
     * Is footer content 
     */
    footerContent?: null | JSX.Element;
    /**
     * Is footer content available
     */
    isHeaderContent?: boolean;
    /**
     * Is footer content 
     */
    headerContent?: null | JSX.Element;
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #fffff',
    borderRadius: '6px',
    boxShadow: 24,
    pt: 2,
    pb: 2,
};


export const ModalTestJSXElementTwo = () => {
    return (<p>Modal content</p>)
}
export const ModelTestHeaderElement = () => {
    return (<OutlinedInput placeholder="Input value" sx={{ ml: 10}}/>)
}
export const ModelTestFooterElement = () => {
    return (<p>Footer content</p>)
}
export const ModalTestJSXElementOne = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h6">Name your campaign</Typography>
            <Typography variant="body1" gutterBottom>
                You can always change this name later on.
            </Typography>
            <Box sx={{mt: 3}}>
                <Typography variant="caption" display="block" gutterBottom>
                    Name
                </Typography>
                <OutlinedInput placeholder="New customer engagement" fullWidth/>
            </Box>
            <Stack direction="row" spacing={2} sx={{mt: 2}}>
                <div>
                    <Typography variant="subtitle2" gutterBottom>
                        Kognition smart build
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        Turn off for manual settings
                    </Typography>
                </div>
                <Switch/>
            </Stack>
        </Box>
    )
}


export const KpModal = ({
                            type,
                            title,
                            content,
                            handleSubmit,
                            submitBtnVariant,
                            submitBtnSize,
                            submitBtnColor,
                            submitBtnHasLeftIcon,
                            submitBtnLeftIcon,
                            submitBtnHasRightIcon,
                            submitBtnRightIcon,
                            submitBtnDisabled,
                            cancelBtnVariant,
                            cancelBtnSize,
                            cancelBtnColor,
                            cancelBtnHasLeftIcon,
                            cancelBtnLeftIcon,
                            cancelBtnHasRightIcon,
                            cancelBtnRightIcon,
                            cancelBtnDisabled,
                            cancelBtnText,
                            submitBtnText,
                            handleRejection,
                            isOpen,
                            isFooterContent=false,
                            footerContent,
                            isHeaderContent=false,
                            headerContent,
                            ...props
                        }: ModalProps) => {

    const [open, setOpen] = React.useState(isOpen);

    useEffect(() => {
        isOpen ? handleOpen() : null;
    }, [isOpen]);

    const handleOpen = () => setOpen(true);

    const onAcceptanceClick = (e: any) => {
        e.preventDefault()
        handleSubmit && handleSubmit();

    }

    const onCancelClick = () => {
        setOpen(false);
        handleRejection && handleRejection();
    }

    const handleClose = (event: string, reason: string) => {
        if (reason && reason == "backdropClick" || reason == "escapeKeyDown") 
            return;
        setOpen(false);
    }

    const submitButtonProps = {
       variant: submitBtnVariant,
        buttonColor: submitBtnColor,
       disabled: submitBtnDisabled,
        hasLeftIcon: submitBtnHasLeftIcon,
       hasRightIcon: submitBtnHasRightIcon,
       label: submitBtnText,
        leftIcon: submitBtnLeftIcon,
        leftIconType: ModalIconType.MUI,
        onClick: (e: any) => {
            onAcceptanceClick(e)
        },
       rightIcon: submitBtnRightIcon,
       rightIconType: ModalIconType.MUI,
       size: submitBtnSize
    }

    const cancelButtonProps = {
        variant: cancelBtnVariant,
        buttonColor: cancelBtnColor,
        disabled: cancelBtnDisabled,
        hasLeftIcon: cancelBtnHasLeftIcon,
        hasRightIcon: cancelBtnHasRightIcon,
        label: cancelBtnText,
        leftIcon: cancelBtnLeftIcon,
        leftIconType: ModalIconType.MUI,
        onClick: () => {
            onCancelClick()
        },
        rightIcon: cancelBtnRightIcon,
        rightIconType: ModalIconType.MUI,
        size: cancelBtnSize
    }

    return (
        <Stack>
            <Modal
                open={open}
                componentsProps={{backdrop: {style: {backgroundColor: "#1E2332", opacity: '0.6'}}}}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", mb: 2 }}>
                        <Typography id="transition-modal-title" variant="h5" component="div"
                                    sx={{color: "#1E2332", ml: 3, mb: 1, fontFamily: 'Inter', fontSize: "20px", fontWeight: "600", textOverflow:"ellipsis"}}>
                            {title}
                        </Typography>
                        {
                            isHeaderContent && 
                            <Container>
                            {headerContent}
                            </Container>
                        }
                    </Box>
                    <Divider variant="fullWidth" flexItem={true}/>

                    <form onSubmit={onAcceptanceClick}>
                    <Container sx={{mt: 2, mr: 3}}>
                        {content}
                    </Container>
                    <Stack direction="row-reverse" spacing={1} mt={1} mr={3}>
                        <> {type === MODALTYPE.DEFAULT ? (
                            <>
                                <KpButton type="submit" {...submitButtonProps}>{submitBtnText}</KpButton>
                                <KpButton {...cancelButtonProps}>{cancelBtnText}</KpButton>
                            </>
                        ) : (
                            <KpButton type="submit" {...submitButtonProps}>{submitBtnText}</KpButton>
                        )}</>


                    </Stack>
                    </form>
                    {
                        isFooterContent ? 
                        <Container sx={{mt: 2, mr:2}}>
                            {footerContent}
                        </Container> : null
                    }
                </Box>
            </Modal>
        </Stack>
    );
};