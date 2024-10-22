import { Avatar, Box, Button, Divider, IconButton, Tab, Tabs, Typography, styled } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import { KpLogo } from "../kpLogo/KpLogo";
import { useEffect, useState, useRef } from "react";
import { KpBadge } from "../kpBadge/KpBadge";
import { ICONS, Icon, IconType } from '../kpIcons/KpIcon'

export type TabData = {
    id: number,
    status: 'Active' | 'Hover' | 'Inactive' | 'Disabled',
    label: string
}

export interface Header {   
    tabs: Array<TabData>,
    productName: string,
    companyName: string,
    userName: string,
    userRole: string,
    hasNotification: boolean,
    notificationCount: number,
    dropDownOpenIcon: string | null | JSX.Element,
    dropDownCloseIcon: string | null | JSX.Element,
    dropDownIconSize?: number,
    iconColor?: string,
    iconType: IconType,
    platformSwitcherContent: null | JSX.Element,
    appOptionContent: null | JSX.Element,
    isIconListShowing: boolean,
    onHelp: () => void,
    onNotification: () => void,
    onSettings: () => void,
    platformSwitcherProps?: any,
    appOptionProps?: any,
    onTabClick: (id: number) => void,
    maxCountNotification: number,
    helpIconShow?: boolean,
    notificationIconShow?: boolean,
    settingsIconShow?: boolean,
    dropdownMenuDisabled?: boolean | undefined,
    avatarBgColor?: string | undefined;
}

interface DropDownMenu {
    dropDownOpenIcon: string | null | JSX.Element,
    dropDownCloseIcon: string | null | JSX.Element,
    dropDownIconSize?: number,
    iconColor?: string,
    triggerOpen?: boolean,
    iconType: IconType,
    content: null | JSX.Element
}

const HeaderWrapper = styled('div')({
    width: '100%',
    height: '64px',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #E0E1E6',
    boxSizing: 'border-box',
    paddingInline: '16px'
})

const LeftWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    height: '100%'
})

const ProductWrapper = styled('div')({
    display: "flex",
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
})

const LogoWrapper = styled('div')({
    height: '28px',
    width: '95.24px',
})

const PlatformText = styled(Typography)({
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '19.36px',
    fontFamily: "Inter",
    color:'#1E2332'

})

const PlatformTextButton = styled(IconButton)({
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '19.36px',
    fontFamily: "Inter",
    color: '#1E2332',
})
const SwitcherWrapper = styled('div')({
    width: '185px',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '8px',
    paddingLeft: '16px',
    alignItems: 'center',
})

const TabWrapper = styled('div')({
    display: 'flex',
    marginLeft: '24px'
})

const TabButton = styled(Tab)({
    display: 'block',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#151D44',
    textTransform: 'capitalize',
})

const RightWrapper = styled('div')({
    display: 'flex',
    width: '515px',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
})

const ClientText = styled(Typography)({
    color: '#9BA0AF',
    fontSize: '14px',
    fontFamily: "Inter"
})

const Line1 = styled(Divider)({
    marginTop: '8px',
    marginBottom: '8px',
    marginLeft: '24px',
    marginRight: '24px',
    borderColor: '#E0E1E6'
})

const Line2 = styled(Divider)({
    marginTop: '8px',
    marginBottom: '8px',
    marginRight: '24px',
    borderColor: '#E0E1E6'
})

const IconWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'row'
})

const IconBtn = styled(IconButton)({
    width: '24px',
    height: '24px',
    marginRight: '24px' 
})

const UserWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
})

const UserDetailsWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '8px'
})

const UserAvatar = styled(Avatar)({
    width: '40px',
    height: '40px'
})

const UserName = styled(Typography)({
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '21px',
    color: '#1E2332',
    fontFamily: "Inter"
})

const UserRole = styled(Typography)({
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '18px',
    color: '#9BA0AF',
    fontFamily: "Inter"

})

const IconBtnDropDown = styled(IconButton)({
    width: '24px',
    height: '24px',
    marginLeft: '14px',
})

const ContentHolder = styled('div')({
    display: 'flex',
    position: 'absolute',
    backgroundColor: '#ffffff',
    zIndex: 1500,
    top: '40px',
    overflow: 'hidden',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    borderRadius: '4px'
})

const randomColor = Math.floor(Math.random()*16777215).toString(16);

export const TestJSXElementOne = () => {
    return (
        <Box sx={{ width: '200px', display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{fontFamily: "Inter"}}>Access Manger</Typography>
            <Typography sx={{fontFamily: "Inter"}}>Pulse</Typography>
        </Box>
    )
}

export const TestJSXElementTwo = () => {
    return (
        <Box sx={{ display: 'flex', width: '200px', flexDirection: 'column' }}>
            <Typography sx={{fontFamily: "Inter"}}>Change Tenant...</Typography>
            <Typography sx={{fontFamily: "Inter"}}>Logout</Typography>
        </Box>
    )
}

const DropDownMenu = ({
    dropDownOpenIcon,
    dropDownCloseIcon,
    dropDownIconSize,
    iconColor,
    iconType,
    content,
    triggerOpen,
    ...props
}: DropDownMenu) => {
    const [isOpen, setOpen] = useState(triggerOpen)
    const contentHolderRef = useRef(null);
    const toggleBtn = () => {
        setOpen(!isOpen)
    }
    
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

    const handleOutsideClick = (e) => {
        if (contentHolderRef.current && !contentHolderRef.current.contains(e.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        setOpen(triggerOpen)
    },[triggerOpen])

    return (
        <>
            <IconBtnDropDown  disableRipple
                 onClick={toggleBtn}
                > 
                <Icon
                    iconName={ isOpen ? dropDownCloseIcon as any : dropDownOpenIcon as any}
                    iconSize={dropDownIconSize}
                    color={iconColor}
                    type={iconType}
                />
                {
                    isOpen &&
                    <ContentHolder
                        ref={contentHolderRef}
                    {...props}
                    >
                        {content}
                    </ContentHolder>
                }
             </IconBtnDropDown>     
        </>
    )
}

export const KpHeader = ({
    tabs,
    productName,
    companyName,
    userName,
    userRole,
    hasNotification,
    notificationCount,
    dropDownOpenIcon,
    dropDownCloseIcon,
    dropDownIconSize,
    iconColor,
    iconType,
    platformSwitcherContent,
    appOptionContent,
    onHelp,
    onNotification,
    isIconListShowing,
    settingsIconShow,
    helpIconShow,
    notificationIconShow,
    onSettings,
    platformSwitcherProps,
    appOptionProps,
    onTabClick,
    maxCountNotification,
    dropdownMenuDisabled,
    avatarBgColor
}: Header) => {
    const [value, setValue] = useState<number | null>(tabs.length > 0 ? tabs[0].id : null)
    const [tabStatus, setTabStatus] = useState(tabs.length && tabs[0].status)
    const [userOpsExpanded, setUserOpsExpanded] = useState(false)
    const [platFormExpanded, setPlatFormExpanded] = useState(false)

    const props = {
        ...platformSwitcherProps
    }
    const props2 = {
        ...appOptionProps
    }
    const onHelpClick = () => {
        onHelp()
    }
    const onNotificationClick = () => {
        onNotification()
    }
    const onSettingsClick = () => {
        onSettings()
    }
    const onTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
        onTabClick(newValue)
    }
    useEffect(() => {
        if (value !== null) {
            const selectedTab: TabData = tabs.find(tab => tab.id === value)!
            setTabStatus(selectedTab.status)
        }
    }, [value])
    const styleInactive = {
        ...tabStatus === 'Inactive' && {color: '#151D44'} 
       }
    return (
        <>
            <HeaderWrapper>
                <LeftWrapper>
                <ProductWrapper style={{width: !dropdownMenuDisabled? '320.24px': '82.8px'}}>
                    <LogoWrapper>
                        <KpLogo color="Blue" width={94.24} height={28}/>
                    </LogoWrapper>
                    {!dropdownMenuDisabled && (
                    <SwitcherWrapper>
                        <PlatformTextButton disableRipple onClick={() => {setPlatFormExpanded(!platFormExpanded)}} >{productName.length > 15 ? `${productName.slice(0,14)}...`: productName}</PlatformTextButton>

                        <DropDownMenu 
                                dropDownOpenIcon={dropDownOpenIcon}
                                dropDownCloseIcon={dropDownCloseIcon}
                                dropDownIconSize={dropDownIconSize}
                                iconColor={iconColor}
                                iconType={iconType}
                                content={platformSwitcherContent}
                                {...props}
                                triggerOpen={platFormExpanded}
                        />
                    </SwitcherWrapper>
                    )}
                </ProductWrapper>
                <TabWrapper>        
                <Tabs
                value={value}
                onChange={onTabChange}
                sx={{ color: '#151D44', height: '55px', paddingTop: '10px', fontFamily: "Inter"}}
                TabIndicatorProps={{
                    style: {
                      backgroundColor: "#151D44",
                      color: '#151D44',
                      display: `${tabStatus === 'Inactive' ? 'none' : 'block'}`
                    }
                }}
                >
                    {
                        tabs.map(({status, label, id}) => (
                            <TabButton disableRipple key={id} value={id} label={label} sx={{ color: '#151D44', fontFamily: "Inter", textTransform: 'capitalize', '&.Mui-selected': {
                                ...styleInactive
                            } }}  disabled={status === 'Disabled' ? true : false}/>
                        ))
                    }
                </Tabs>
                </TabWrapper>
                </LeftWrapper>
                <RightWrapper>
                    <ClientText>{companyName}</ClientText>
                    <Line1 orientation="vertical" flexItem />
                    {isIconListShowing && 
                    <>
                        <IconWrapper>
                            {helpIconShow &&(
                            <IconBtn
                                size="large"
                                color="inherit"
                                onClick={onHelpClick}
                                >
                                <KpBadge color="#EA421A" vertical={'top'} horizontal={'right'} innerComponent={<Icon iconName={ICONS.HELPCERCLE} type={IconType.MUI} color="#666C7F"/>} />
                            </IconBtn>
                            )}
                            {notificationIconShow && (
                            <IconBtn
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                onClick={onNotificationClick}
                                >
                                <KpBadge color="#EA421A" vertical={'top'} horizontal={'right'} maxCount={maxCountNotification} value={hasNotification ? notificationCount : undefined} innerComponent={<Icon iconName={ICONS.NOTIFICATIONOUTLINE} type={IconType.MUI} color="#666C7F"/>} />
                            </IconBtn>
                            )}
                            {settingsIconShow && (
                            <IconBtn
                                size="large"
                                color="inherit"
                                onClick={onSettingsClick}
                                >
                                <KpBadge color="#EA421A" vertical={'top'} horizontal={'right'} innerComponent={<Icon iconName={ICONS.SETTINGSICON} type={IconType.MUI} color="#666C7F" />} />
                            </IconBtn>
                            )}
                        </IconWrapper>
                        <Line2 orientation="vertical" flexItem />
                    </>
                    }
                    <UserWrapper>
                        <UserAvatar sx={{bgcolor: avatarBgColor ? avatarBgColor : `#${randomColor}`}} onClick={() => {setUserOpsExpanded(!userOpsExpanded)}}>{userName.slice(0,1)}</UserAvatar>
                        <UserDetailsWrapper>
                            <UserName>{userName.length > 15 ? `${userName.slice(0,15)}...`: userName}</UserName>
                            <UserRole>{userRole.length > 20 ? `${userRole.slice(0,20)}...`: userRole}</UserRole>
                        </UserDetailsWrapper>
                        <DropDownMenu
                            dropDownOpenIcon={dropDownOpenIcon}
                            dropDownCloseIcon={dropDownCloseIcon}
                            dropDownIconSize={dropDownIconSize}
                            iconColor={iconColor}
                            iconType={iconType}
                            triggerOpen={userOpsExpanded}
                            content={appOptionContent}
                            {...props2}
                        />
                    </UserWrapper>
                </RightWrapper>
            </HeaderWrapper>
        </>
    )
}
