import { StatusTypes } from '../Status';
import { IconName } from '../Illustration/Icon';

export enum SupportedTypes {
    TIME = 'TIME',
    SENDER = 'SENDER',
    RECEIVER = 'RECEIVER',
}

export enum SupportedCategory {
    PACKAGE = 'PACKAGE',
    PALLET = 'PALLET',
}

export interface ICorrespondant {
    id: string;
    lastName: string;
    firstName: string;
}

export interface ISchedule {
    departure?: number;
    arrivalEnd?: number;
    arrivalStart?: number;
}

export interface IDeliveryProps {
    id: string;
    to: string;
    from: string;
    weight?: number;
    isRead: boolean;
    feeAmount: number;
    timestamp: number;
    status: StatusTypes;
    description: string;
    schedule?: ISchedule;
    sender?: ICorrespondant;
    receiver?: ICorrespondant;
    category: SupportedCategory;
}

export interface IDeliveryCardProps {
    isExpanded?: boolean;
    data: IDeliveryProps;
    showProgressTitle?: boolean;
}

export interface IInfoRow {
    fromValue: string;
    toValue?: string;
}

export interface IInfoRowProps {
    data: IInfoRow;
    type?: SupportedTypes | string;
}

export interface IProgressLog {
    id: string;
    timestamp: number;
    type?: StatusTypes | string;
}

export const DEFAULT_PROGRESS_ICONS: { [key: StatusTypes]: IconName } = {
    [StatusTypes.PENDING]: 'shipping',
    [StatusTypes.DELIVERED]: 'package',
    [StatusTypes.CANCELLED]: 'package',
    [StatusTypes.PICKED_UP]: 'package',
    [StatusTypes.IN_TRANSIT]: 'shipping',
    [StatusTypes.DROPPED_OFF]: 'package',
}

export const DEFAULT_PROGRESS_DESCRIPTIONS: { [key: StatusTypes]: IconName } = {
    [StatusTypes.PENDING]: 'Package delivery is pending',
    [StatusTypes.DELIVERED]: 'Package has been delivered',
    [StatusTypes.CANCELLED]: 'Package delivery has been cancelled',
    [StatusTypes.PICKED_UP]: 'Package is picked up',
    [StatusTypes.IN_TRANSIT]: 'Package is in-transit',
    [StatusTypes.DROPPED_OFF]: 'Package is dropped off',
}

export const DEFAULT_ETA_FORMAT = 'HH:MM A';

export const DEFUALT_WEEK_DATE = 'dddd, MMMM D';

export const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY';

export const DEFUALT_DAILY_DATE = 'MMMM D, YYYY';

export const DEFAULT_TIME_DATE_FORMAT = 'DD/MM/YYYY HH:mm A';

export const SUPPORTED_CTA_STATUSES = [StatusTypes.PENDING, StatusTypes.IN_TRANSIT];

export const parseETA = (data: ISchedule, dateFormatter: Function) => {
    const weekDate = data?.departure && dateFormatter(data?.departure, DEFUALT_WEEK_DATE);

    const arrivalStart = data?.arrivalStart && dateFormatter(data?.arrivalStart, DEFAULT_ETA_FORMAT);
    const arrivalEnd = data?.arrivalEnd && dateFormatter(data?.arrivalEnd, DEFAULT_ETA_FORMAT);

    let res = null;

    if (arrivalStart && arrivalEnd) {
        res = `${weekDate} between ${arrivalStart} - ${arrivalEnd}`;
    } else {
        res = `${weekDate} at ${arrivalStart}`;
    }

    return res;
}

export const parseTime = (data: ISchedule, dateFormatter: Function) => ({
    fromValue: dateFormatter(data?.departure, DEFAULT_TIME_DATE_FORMAT),
    toValue: dateFormatter(data?.arrivalEnd || data?.arrivalStart, DEFAULT_TIME_DATE_FORMAT),
});

export const parseCorrespondant = (data: ICorrespondant) => ({
    fromValue: `${data?.firstName} ${data?.lastName}`,
    toValue: data?.id,
});

export const getButtonCTA = (type: StatusTypes) => {
    switch (type) {
        case StatusTypes.IN_TRANSIT:
            return ['UNSUCCESSFUL', 'DELIVERED'];
        case StatusTypes.PENDING:
        default:
            return ['DECLINE', 'ACCEPT'];
    }
};

export const getLabels = (type: SupportedTypes | string) => {
    switch (type) {
        case SupportedTypes.TIME:
            return ['Departure time', 'Arrival time'];
        case SupportedTypes.SENDER:
            return ['Sender’s Name', 'Sender’s Number'];
        case SupportedTypes.RECEIVER:
        default:
            return ['Receiver’s Name', 'Receiver’s Number'];
    }
};

export const getProgressStatusIcon = (status: StatusTypes): string => (
    DEFAULT_PROGRESS_ICONS[status]
);

export const getProgressStatusDescription = (status: StatusTypes): string => (
    DEFAULT_PROGRESS_DESCRIPTIONS[status]
);
