export const DEFAULT_PROFILE_SECTIONS = {
    MAIN: 'MAIN',
    EMAIL: 'EMAIL',
    PHONE: 'PHONE',
    PASSWORD: 'PASSWORD',
};

export const DEFAULT_PROFILE_OPTIONS = [
    {
        id: DEFAULT_PROFILE_SECTIONS.EMAIL,
        icon: "mail",
        description: "Change Email",
    },
    {
        id: DEFAULT_PROFILE_SECTIONS.PASSWORD,
        icon: "encrypted",
        description: "Change Password",
    },
    {
        id: DEFAULT_PROFILE_SECTIONS.PHONE,
        icon: "call",
        description: "Change Phone Number",
    },
];
