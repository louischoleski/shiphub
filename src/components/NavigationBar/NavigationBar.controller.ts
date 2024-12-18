export const DEFAULT_SCREEN_SLUGS = {
    REPORT: 'ReportScreen',
    PROFILE: 'ProfileScreen',
    DELIVERY: 'DeliveryScreen',
    DASHBOARD: 'DashboardScreen',
    NOTIFICATION: 'NotificationScreen',
};

export const SUPPORTED_NAV_SCREENS = Object.values(DEFAULT_SCREEN_SLUGS);

export const DEFAULT_TABS = [
    {
        icon: 'dashboard',
        title: 'Dashboard',
        navScreen: DEFAULT_SCREEN_SLUGS.DASHBOARD,
    },
    {
        icon: 'report',
        title: 'Reports',
        navScreen: DEFAULT_SCREEN_SLUGS.REPORT,
    },
    {
        icon: 'delivery',
        title: 'Deliveries',
        navScreen: DEFAULT_SCREEN_SLUGS.DELIVERY,
    },
    {
        icon: 'notification',
        title: 'Notification',
        navScreen: DEFAULT_SCREEN_SLUGS.NOTIFICATION,
    },
    {
        icon: 'profile',
        title: 'Profile',
        navScreen: DEFAULT_SCREEN_SLUGS.PROFILE,
    },
];

export const getIconColor = (itemScreen: string, activeItemScreen: string) => (
    itemScreen === activeItemScreen ? '#007BFF' : '#afb0b2'
);

export const getItemColor = (itemScreen: string, activeItemScreen: string) => ({
    color: getIconColor(itemScreen, activeItemScreen),
});
