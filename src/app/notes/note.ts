export interface INote {
    id: string;
    description: string;
    createdBy: string;
    RemindAt: Date;
    isEnabled: boolean;
}