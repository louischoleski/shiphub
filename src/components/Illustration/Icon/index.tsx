import { ComponentType } from 'react';

import Csv from './Csv';
import Mail from './Mail';
import Call from './Call';
import Edit from './Edit';
import Lock from './Lock';
import Brand from './Brand';
import Logout from './Logout';
import Search from './Search';
import Report from './Report';
import Target from './Target';
import Package from './Package';
import Profile from './Profile';
import Calendar from './Calendar';
import Shipping from './Shipping';
import Delivery from './Delivery';
import Disabled from './Disabled';
import Inventory from './Inventory';
import Encrypted from './Encrypted';
import Dashboard from './Dashboard';
import ArrowDown from './ArrowDown';
import ArrowBack from './ArrowBack';
import PersonPin from './PersonPin';
import Visibility from './Visibility';
import Notification from './Notification';
import ArrowForward from './ArrowForward';
import VisibilityOff from './VisibilityOff';
import ForwardToInbox from './ForwardToInbox';
import DeployedCodeAlert from './DeployedCodeAlert';
import DeployedCodeAccount from './DeployedCodeAccount';
import DeployedCodeHistory from './DeployedCodeHistory';

export enum IconName {
	csv = 'csv',
	mail = 'mail',
	call = 'call',
	edit = 'edit',
	lock = 'lock',
	brand = 'brand',
	logout = 'logout',
	search = 'search',
	report = 'report',
	target = 'target',
	package = 'package',
	profile = 'profile',
	calendar = 'calendar',
	shipping = 'shipping',
	delivery = 'delivery',
	disabled = 'disabled',
	inventory = 'inventory',
	encrypted = 'encrypted',
	dashboard = 'dashboard',
	arrow_down = 'arrow_down',
	arrow_back = 'arrow_back',
	person_pin = 'person_pin',
	visibility = 'visibility',
	notification = 'notification',
	arrow_forward = 'arrow_forward',
	visibility_off = 'visibility_off',
	forward_to_inbox = 'forward_to_inbox',
	deployed_code_alert = 'deployed_code_alert',
	deployed_code_account = 'deployed_code_account',
	deployed_code_history = 'deployed_code_history',
}

export interface IIconProps {
	name: IconName | string;
	[key: string]: any;
}

const iconMap: Record<IconName, ComponentType<any>> = {
	[IconName.csv]: Csv,
	[IconName.mail]: Mail,
	[IconName.call]: Call,
	[IconName.edit]: Edit,
	[IconName.lock]: Lock,
	[IconName.brand]: Brand,
	[IconName.logout]: Logout,
	[IconName.search]: Search,
	[IconName.report]: Report,
	[IconName.target]: Target,
	[IconName.package]: Package,
	[IconName.profile]: Profile,
	[IconName.calendar]: Calendar,
	[IconName.shipping]: Shipping,
	[IconName.delivery]: Delivery,
	[IconName.disabled]: Disabled,
	[IconName.inventory]: Inventory,
	[IconName.encrypted]: Encrypted,
	[IconName.dashboard]: Dashboard,
	[IconName.arrow_down]: ArrowDown,
	[IconName.arrow_back]: ArrowBack,
	[IconName.person_pin]: PersonPin,
	[IconName.visibility]: Visibility,
	[IconName.notification]: Notification,
	[IconName.arrow_forward]: ArrowForward,
	[IconName.visibility_off]: VisibilityOff,
	[IconName.forward_to_inbox]: ForwardToInbox,
	[IconName.deployed_code_alert]: DeployedCodeAlert,
	[IconName.deployed_code_account]: DeployedCodeAccount,
	[IconName.deployed_code_history]: DeployedCodeHistory,
};

const Icon: React.FC<IIconProps> = ({ name, ...props }) => {
	const IconComponent = iconMap[name];
	return IconComponent ? <IconComponent {...props} /> : null;
};

export default Icon;
